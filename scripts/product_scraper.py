import requests
from bs4 import BeautifulSoup

class ProductScraper:
    def scrape_product_info(self, part_url):
        # Send a GET request to the URL
        response = requests.get(part_url)

        # Check if the request was successful
        if response.status_code == 200:
            # Parse the HTML content of the webpage
            soup = BeautifulSoup(response.text, 'html.parser')

            # Find all product URLs on the part page
            products = []

            product_tags = soup.select('div.product-right h4 a')
            base_url = "https://ecu.eu"

            for tag in product_tags:
                product_url = base_url + tag['href']
                response2 = requests.get(product_url)
                if response2.status_code == 200:
                    soup2 = BeautifulSoup(response2.text, 'html.parser')
                    number_tags = soup2.select('div.product-info-right table.pro_info tr')
                    part_numbers = []

                    for tr in number_tags:
                        # Replace <wbr> tags with spaces
                        for wbr in tr.select('td wbr'):
                            wbr.replace_with(' ')
                        
                        title = tr.select_one('td').get_text()
                        title = ' '.join(title.split())
                        
                        numbers = []
                        for td in tr.select('td')[1:]:
                            parts = td.decode_contents().split('<em>')
                            for part in parts:
                                text = BeautifulSoup(part, 'html.parser').get_text(strip=True)
                                if text:
                                    numbers.append(text)
                        part_numbers.append({
                            'title': title,
                            'numbers': numbers
                        })

                    # Extract fault information
                    fault_tags = soup2.select('div#t_error table tr')
                    faults = []

                    for tr in fault_tags:
                        fault_code_tag = tr.select_one('span.border')
                        fault_code = fault_code_tag.get_text(strip=True) if fault_code_tag else None
                        fault_description = tr.select_one('td').get_text(strip=True)
                        fault_description = ' '.join(fault_description.split())
                        
                        if fault_code:
                            # Remove fault code from fault_description
                            fault_description = fault_description.replace(fault_code, '').strip()
                            fault_info = {
                                'fault_code': fault_code,
                                'fault_description': fault_description
                            }
                        else:
                            fault_info = {
                                'fault_description': fault_description
                            }

                        faults.append(fault_info)

                    products.append({
                        'product_url': product_url,
                        'part_numbers': part_numbers,
                        'faults': faults
                    })
                else:
                    print(f"Failed to retrieve the webpage. Status code: {response2.status_code}")

            return {
                'products': products
            }
        else:
            print(f"Failed to retrieve the webpage. Status code: {response.status_code}")
            return {
                'products': []
            }