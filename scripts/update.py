import requests
import json

# Define the Strapi API URL
strapi_url = "https://strapi.ecurepair.nl/api"  # Replace with your Strapi API URL

# Function to retrieve all products from the CMS
def get_all_products():
    response = requests.get(f"{strapi_url}/products?pagination[pageSize]=999999&fields[0]=onderdeelnummer&fields[1]=omschrijving")
    if response.status_code == 200:
        return json.loads(response.content)["data"]
    else:
        print("Failed to retrieve products")
        return []

# Function to update a product in the CMS
def update_product(product_id, updated_data):
    response = requests.put(
        f"{strapi_url}/products/{product_id}",
        json={"data": updated_data}
    )
    if response.status_code == 200:
        print(f"Product {product_id} updated successfully.")
    else:
        print(f"Failed to update product {product_id}.")
        print(response.content)

# Main function to retrieve and update products
def main():
    products = get_all_products()
    for product in products:
        product_id = product["documentId"]
        product_number = product["onderdeelnummer"]
        product_description = product["omschrijving"]

        # Example: Update the summary field
        product_description = product_description.replace("{part_name}", product_number)  # Replace with your logic
        updated_data = {"omschrijving": product_description}

        update_product(product_id, updated_data)

if __name__ == "__main__":
    main()