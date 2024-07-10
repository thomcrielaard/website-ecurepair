import requests
import json

# Define the Strapi API URL
strapi_url = "https://strapi.ecurepair.nl/api"  # Replace with your Strapi API URL

# Specify the path to your JSON file
json_file_path = "translated_product_data_mercedes_contactslot.json"

brand_id = 7
part_id = 9

# Open the JSON file for reading
with open(json_file_path, "r") as json_file:
    data = json.load(json_file)

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

for part in data:
  for product in part['products']:
    product_response = create_product(part, product, brand_id, part_id)

    if product_response.status_code == 200:
      print(f"Success for {product['part_numbers'][0]['numbers'][-1]}")
    else:
      print(f"Something went wrong with brand {part['part_name']}")
      print(product_response.content)