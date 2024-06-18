import json
from part_scraper import PartScraper
from product_scraper import ProductScraper

def scrape_parts_section():
  # Create an instance of the PartScraper class with the same URL
  part_scraper = PartScraper("https://ecu.eu/mercedes/ezs-%28ignition-lock%29-elv-immobiliser-5919")

  parts_data = part_scraper.scrape_parts()

  # Save the updated models_data to a JSON file as parts_data.json
  with open('parts_data.json', 'w') as file:
    json.dump(parts_data, file, indent=2)

def scrape_product_section():
  # Load the parts data from the JSON file
  with open('parts_data.json', 'r') as file:
    parts_data = json.load(file)

  # Create an instance of the ProductScraper class
  product_scraper = ProductScraper()

  # Iterate through each part and scrape the detailed information
  for part in parts_data:
    product_url = part['product_link']
    print(f"Scraping product details from: {product_url}")
    detailed_info = product_scraper.scrape_product_info(product_url)
    part.update(detailed_info)

  # Save the detailed product data to a JSON file
  with open('detailed_product_data.json', 'w') as file:
    json.dump(parts_data, file, indent=2)

def main():
  scrape_parts_section()
  scrape_product_section()

# Check if the script is being run as the main program
if __name__ == "__main__":
  # Call the main function
  main()
