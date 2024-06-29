import requests
import json

# Define the Strapi API URL
strapi_url = "https://strapi.ecurepair.nl/api"  # Replace with your Strapi API URL

# Specify the path to your JSON file
json_file_path = "translated_product_data_mercedes_contactslot.json"

brand_id = 7
part_id = 8

# Open the JSON file for reading
with open(json_file_path, "r") as json_file:
    # Use json.load() to parse the JSON data into a Python data structure
    data = json.load(json_file)

# # Function to create a brand in Strapi
# def create_brand(brand_name):
#   response = requests.post(
#     f"{strapi_url}/merks",
#     json={
#       "data": {
#         "naam": brand_name
#       }
#     }
#   )
#   return response

# def get_brand(brand_name):
#   response = requests.get(
#     f"{strapi_url}/merks?filters[naam][$eq]={brand_name}"
#   )

#   return response


# # Function to create a type in Strapi
# def create_type(type_name):
#   response = requests.post(
#     f"{strapi_url}/types",
#     json={
#       "data": {
#         "naam": type_name
#       }
#     }
#   )
#   return response

# def get_type(type_name):
#   response = requests.get(
#     f"{strapi_url}/types?filters[naam][$eq]={type_name}"
#   )

#   return response


# Function to create a module in Strapi
def create_module(module_name, module_summary, module_description, brand_id, type_id):
  response = requests.post(
    f"{strapi_url}/products",
    json={
      "data": {
        "onderdeelnummer": module_name,
        "samenvatting": module_summary,
        "omschrijving": module_description,
        "merk": brand_id,
        "onderdeel": type_id
      }
    }
  )
  return response

def get_module(module_name):
  response = requests.get(
    f"{strapi_url}/products?filters[onderdeelnummer][$eq]={module_name}"
  )

  return response

def update_module(module_id, new_description):
  response = requests.put(
    f"{strapi_url}/products/{module_id}",
    json={
      "data": {
        "omschrijving": new_description,
      }
    }
  )
  return response

for part in data:
  # Create new brand or get brand if it already exists
  brand_response = create_module(part["part_name"], part["part_name"], part["part_name"], brand_id, part_id)
#   if brand_response.status_code == 400:
#     brand_response = get_brand(brand["brand_name"])
#     brand_content = json.loads(brand_response.content)
#     brand_id = brand_content["data"][0]["id"]
#   else:
#     brand_content = json.loads(brand_response.content)
#     brand_id = brand_content["data"]["id"]

  if brand_response.status_code == 200:
    print(f"Success for {part['part_name']}")
  else:
    print(f"Something went wrong with brand {part['part_name']}")
    print(brand_response.content)