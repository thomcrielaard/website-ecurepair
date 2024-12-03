from pathlib import Path
import requests
import json

# Define the Strapi API URL
strapi_url = "https://strapi.ecurepair.nl/api"  # Replace with your Strapi API URL

# Specify the path to your JSON file
# json_file_path = "translated_product_data_mercedes_contactslot.json"

# Open the JSON file for reading
# with open(json_file_path, "r") as json_file:
#   data = json.load(json_file)

# Function which creates a brand if it doesn't exist and returns the brands ID
def create_or_get_brand(brand_name):
  # Attempt to create brand
  response = requests.post(
    f"{strapi_url}/merks",
    json={
      "data": {
        "naam": brand_name,
      }
    }
  )

  # Brand already exists, retrieve brand
  if response.status_code == 400:
    response = requests.get(
      f"{strapi_url}/merks?filters[naam][$eq]={brand_name}"
    )

    # Retrieve ID from brand
    content = json.loads(response.content)
    id = content["data"][0]["id"]
  else:
    content = json.loads(response.content)
    id = content["data"]["id"]

  return id

# Function which creates a part if it doesn't exist and returns the part ID
def create_or_get_part(part_name):
  # Attempt to create part
  response = requests.post(
    f"{strapi_url}/onderdeels",
    json={
      "data": {
        "naam": part_name,
      }
    }
  )

  # Part already exists, retrieve part
  if response.status_code == 400:
    response = requests.get(
      f"{strapi_url}/onderdeels?filters[naam][$eq]={part_name}"
    )

    # Retrieve ID from part
    content = json.loads(response.content)
    id = content["data"][0]["id"]
  else:
    content = json.loads(response.content)
    id = content["data"]["id"]

  return id

# Function to create a module in Strapi
def create_product(part, product, brand_id, part_id):
  # Extracting the last element from each part number's numbers list
  onderdeelnummers = [part_['numbers'][-1] for part_ in product['part_numbers'] if 'numbers' in part_ and part_['numbers']]

  # Joining the elements with a space
  onderdeelnummer = ' '.join(onderdeelnummers) + ' ' + part['part_name']

  formatted_onderdeelnummers = []
  for nr in product["part_numbers"]:
    title = nr["title"]
    numbers = nr["numbers"]
    for number in numbers:
      # Voeg de geformatteerde string toe aan de lijst
      formatted_onderdeelnummers.append(f"- {title} {number}")

  # Voeg de strings samen met een newline karakter
  onderdeelnummers_lijst = "\n".join(formatted_onderdeelnummers)

  samenvatting = "Heeft u problemen met uw " + onderdeelnummer + "? Laat hem dan nu vervangen, repareren of reviseren door ECU Repair!"

  omschrijving = "Bij ECU Repair kunt u uw {part_name} laten repareren, reviseren of vervangen. Onze specialisten zijn ervaren in het oplossen van problemen met dit onderdeel en andere soortgelijke onderdelen. Of het nu gaat om het herstellen van defecte componenten of het uitvoeren van preventief onderhoud, bij ECU Repair bent u verzekerd van een snelle en efficiënte service. Wilt u graag een afspraak maken? Vul dan nu het reparatieformulier in!\n## Onderdeelnummers\n" + onderdeelnummers_lijst

  # Prepare faults list
  fouten = [{"code": fault.get("fault_code"), "omschrijving": fault["fault_description"]} for fault in product["faults"]]

  # Prepare cars list
  autos = [{"model": car} for car in product["cars"]]

  response = requests.post(
    f"{strapi_url}/products",
    json={
      "data": {
        "onderdeelnummer": onderdeelnummer,
        "samenvatting": samenvatting,
        "omschrijving": omschrijving,
        "merks": [brand_id],
        "onderdeel": part_id,
        "fouten": fouten,
        "autos": autos
      }
    }
  )
  return response

# Ensure the base_dir is a Path object
base_dir = Path.cwd()
filename_prefix = "Translated "

# Iterate through all entries in the base directory
for entry in base_dir.iterdir():
  if entry.is_dir():
    # Search for files starting with "Translated " in the subdirectory
    # Using glob with pattern "Translated *" to match any file starting with "Translated "
    translated_files = list(entry.glob(f"{filename_prefix}*"))
    
    if translated_files:
      brand_id = create_or_get_brand(entry.name)
      for file in translated_files:
        part_id = create_or_get_part(file.name.removeprefix(filename_prefix).removesuffix(".json"))

        with open(file.relative_to(base_dir), "r", encoding="utf-8") as json_file:
          data = json.load(json_file)
          for part in data:
            for product in part['products']:
              product_response = create_product(part, product, brand_id, part_id)

              if product_response.status_code == 200:
                try:
                  print(f"Success for {entry.name} {file.name} {product['part_numbers'][0]['numbers'][-1]}")
                except (IndexError, KeyError, TypeError) as e:
                  print(f"Success for {entry.name} {file.name}")  
              else:
                print(f"Something went wrong with brand {part['part_name']}")
                print(product_response.content)