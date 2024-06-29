import json
import os

# Define file paths
input_file_path = "detailed_product_data.json"
preparse_file_path = "preparse.json"
preparsed_output_file_path = "preparsed_product_data_mercedes_contactslot.json"
translations_file_path = "translations.json"

# Load or create the translations file
if os.path.exists(translations_file_path):
    with open(translations_file_path, "r", encoding="utf-8") as file:
        translations = json.load(file)
else:
    translations = {}

# Load preparse file
if os.path.exists(preparse_file_path):
    with open(preparse_file_path, "r", encoding="utf-8") as file:
        preparse = json.load(file)
else:
    preparse = {}

# Function to collect texts that need translation
def collect_texts_to_translate(texts, text):
    if text not in translations:
        texts.add(text)

# Function to translate a text
def translate_text(text):
    if text in translations:
        return translations[text]
    else:
        translation = input(f"Please enter the translation for: '{text}': ")
        translations[text] = translation
        with open(translations_file_path, "w", encoding="utf-8") as file:
            json.dump(translations, file, ensure_ascii=False, indent=4)
        return translation

# Function to preparse the faults descriptions
def preparse_fault_descriptions(fault_code, fault_description):
    key = f"{fault_code}: {fault_description}" if fault_code else fault_description
    if key in preparse:
        return [{"fault_code": fault_code, "fault_description": desc} for desc in preparse[key]]
    else:
        return [{"fault_code": fault_code, "fault_description": fault_description}]

# Load the input JSON file
with open(input_file_path, "r", encoding="utf-8") as file:
    data = json.load(file)

# Preparse the data
preparsed_data = []
for part in data:
    parsed_part = {
        "part_name": part["part_name"],
        "image_url": part["image_url"],
        "product_link": part["product_link"],
        "products": []
    }
    for product in part.get("products", []):
        parsed_product = {
            "product_url": product["product_url"],
            "part_numbers": product.get("part_numbers", []),
            "faults": [],
            "cars": product.get("cars", [])
        }
        for fault in product.get("faults", []):
            fault_code = fault.get("fault_code", None)
            fault_description = fault["fault_description"]
            parsed_product["faults"].extend(preparse_fault_descriptions(fault_code, fault_description))
        parsed_part["products"].append(parsed_product)
    preparsed_data.append(parsed_part)

# Save the preparsed data to a new JSON file
with open(preparsed_output_file_path, "w", encoding="utf-8") as file:
    json.dump(preparsed_data, file, ensure_ascii=False, indent=4)

print(f"Preparsed data saved to {preparsed_output_file_path}")

# Load the preparsed data for translation
with open(preparsed_output_file_path, "r", encoding="utf-8") as file:
    data = json.load(file)

# Collect texts that need translation
texts_to_translate = set()
for part in data:
    collect_texts_to_translate(texts_to_translate, part["part_name"])
    for product in part.get("products", []):
        for part_number in product.get("part_numbers", []):
            collect_texts_to_translate(texts_to_translate, part_number["title"])
        for fault in product.get("faults", []):
            collect_texts_to_translate(texts_to_translate, fault["fault_description"])
        for car in product.get("cars", []):
            collect_texts_to_translate(texts_to_translate, car)

# Print texts that need translation
print("Texts that need translation:")
for text in sorted(texts_to_translate):
    print(text)

# Translate the texts
for text in texts_to_translate:
    translate_text(text)

# Traverse the data and translate the required fields
for part in data:
    part["part_name"] = translate_text(part["part_name"])
    for product in part.get("products", []):
        for part_number in product.get("part_numbers", []):
            part_number["title"] = translate_text(part_number["title"])
        for fault in product.get("faults", []):
            fault["fault_description"] = translate_text(fault["fault_description"])
        for i, car in enumerate(product.get("cars", [])):
            product["cars"][i] = translate_text(car)

# Save the translated data to a new JSON file
output_file_path = "translated_product_data_mercedes_contactslot.json"
with open(output_file_path, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print(f"Translated data saved to {output_file_path}")
