import mysql.connector
from mysql.connector import errorcode 
import fade
import math

# Database configuration
config = {
    'user': 'root',
    'password': 'hello',
    'host': '127.0.0.1',
    'database': 'ecommercedb',
}

# Establishing the connection
cnx = mysql.connector.connect(**config)
cursor = cnx.cursor()

def create_category():
    name = input("Enter category name: ")
    query = "INSERT INTO categories (categoryname) VALUES (%s)"
    cursor.execute(query, (name,))
    cnx.commit()
    print(f"Category '{name}' added successfully!")

def create_product():
    id = int(input("Enter product id, must be unique: ")) 
    name = input("Enter product name: ") 
    description = input("Enter product description: ") 
    price = float(input("Enter product price: ")) 
    image_url = input("Enter product image URL: ") 
    category_id = int(input("Enter category ID: "))
    query = "INSERT INTO products VALUES (%s, %s, %s, %s, %s, %s)"
    cursor.execute(query, (id, name, description, price, image_url, category_id)) 
    cnx.commit()
    print(f"Product '{name}' added successfully!")

def read_products():
    query = "SELECT * FROM products"
    cursor.execute(query)
    products = cursor.fetchall()
    for product in products:
        print(product)

def update_product():
    product_id = int(input("Enter product ID to update: ")) 
    name = input("Enter new product name: ")
    description = input("Enter new product description: ") 
    price = float(input("Enter new product price: ")) 
    image_url = input("Enter new product image URL: ")
    category_id = int(input("Enter the new category ID from the list: "))
    query = """UPDATE products SET name = %s, description = %s, price = %s, image_url = %s, categoryid = %s WHERE id = %s"""
    cursor.execute(query, (name, description, price, image_url, category_id, product_id)) 
    cnx.commit()
    print(f"Product ID '{product_id}' updated successfully!")

def delete_product():
    product_id = int(input("Enter product ID to delete: ")) 
    query = "DELETE FROM products WHERE id = %s"
    cursor.execute(query, (product_id,))
    cnx.commit()
    print(f"Product ID '{product_id}' deleted successfully!")

def main():
    while True:
        print("\nE-commerce Product Catalog Management") 
        print("1. Create Category") 
        print("2. Create Product") 
        print("3. Read Products")
        print("4. Update Product") 
        print("5. Delete Product")
        print("6. Exit")

        choice = input("Enter your choice: ")
        if choice == '1':
            create_category()
        elif choice == '2':
            create_product()
        elif choice == '3': 
            read_products()
        elif choice == '4': 
            update_product()
        elif choice == '5':
            delete_product()
        elif choice == '6': 
            cursor.close()
            cnx.close()
            print("Goodbye!")
            break
        else:
            print("Invalid choice! Please try again.")

main()
