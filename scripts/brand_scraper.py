import requests
from bs4 import BeautifulSoup

class BrandScraper:
  def __init__(self, url):
    self.url = url

  def scrape_brand_parts(self, url):
    # Send a GET request to the URL
    response = requests.get(url)

    # Check if the request was successful
    if response.status_code == 200:
      # Parse the HTML content of the webpage
      soup = BeautifulSoup(response.text, 'html.parser')

      # Initialize an empty list to store the scraped data
      parts_data = []

      # Find all <li> elements within the <ul class="products">
      parts_list = soup.find('ul', {'class': 'products'})
      if parts_list == None:
        print(f"No parts found for {url}")
        return []
      else:
        parts_list = parts_list.find_all('li')

      # Loop through all <li> elements
      for part in parts_list:
        # Get the part name
        part_name = part.find('strong').text.strip()

        # Get the image URL
        image_url = part.find('img')['src']

        # Get the link to the product
        product_link = part.find('a')['href']
        if not product_link.startswith("http"):
          product_link = self.url + product_link  # Assuming the base URL is self.url

        # Append the formatted data to the list
        parts_data.append({
          'part_name': part_name,
          'image_url': image_url,
          'part_link': product_link
        })

      return parts_data

    else:
      print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
      return []
    


  def scrape_brands(self):
    # Send a GET request to the URL
    response = requests.get(self.url)

    # Check if the request was successful
    if response.status_code == 200:
      # Parse the HTML content of the webpage
      soup = BeautifulSoup(response.text, 'html.parser')

      # Initialize an empty list to store the scraped data
      brands_data = []

      # Find all <li> elements within the <ul class="products">
      brand_list = soup.find('div', {'id': 'vtabs-content'}).find_all('li')

      # Loop through all <li> elements
      for brand in brand_list:
        # Get the part name
        brand_name = brand.find('a').text.strip()

        brand_url = self.url + brand.find('a', href=True)['href']

        brand_parts = self.scrape_brand_parts(brand_url)

        # Append the formatted data to the list
        brands_data.append({
          'brand_name': brand_name,
          'brand_url': brand_url,
          'brand_parts': brand_parts
        })

      # Return the scraped data as a list of dictionaries
      return brands_data
    else:
      print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
      return []
