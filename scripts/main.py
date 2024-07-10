import json
import os
from part_scraper import PartScraper
from product_scraper import ProductScraper
from brand_scraper import BrandScraper

def scrape_brands_section():
  brand_scraper = BrandScraper("https://ecu.eu")

  brands_data = brand_scraper.scrape_brands()

  with open('brands.json', 'w') as file:
    json.dump(brands_data, file, indent=2)

def scrape_parts_section(brand, part, url):
  # Create an instance of the PartScraper class with the same URL
  part_scraper = PartScraper(url)

  parts_data = part_scraper.scrape_parts()

  # Save the updated models_data to a JSON file as parts_data.json
  if not os.path.exists(brand):
    os.makedirs(brand)
  with open(f"{brand}/{part.replace('/', '-')}.json", 'w') as file:
    json.dump(parts_data, file, indent=2)

def scrape_product_section(brand, part_):
  # Load the parts data from the JSON file
  with open(f"{brand}/{part_.replace('/', '-')}.json", 'r') as file:
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
  with open(f"{brand}/Detailed {part_.replace('/', '-')}.json", 'w') as file:
    json.dump(parts_data, file, indent=2)

def main():
  # scrape_brands_section()

  # Load the brands data from the JSON file
  with open('brands.json', 'r') as file:
    brands_data = json.load(file)

  for brand in brands_data:
    for brand_part in brand['brand_parts']:
      # scrape_parts_section(brand['brand_name'], brand_part['part_name'], brand_part['part_link'])
      scrape_product_section(brand['brand_name'], brand_part['part_name'])

# Check if the script is being run as the main program
if __name__ == "__main__":
  # Call the main function
  main()
