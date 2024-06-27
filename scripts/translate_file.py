import json
import os

# Define file paths
input_file_path = "detailed_product_data.json"
translations_file_path = "translations.json"

# Load or create the translations file
if os.path.exists(translations_file_path):
    with open(translations_file_path, "r", encoding="utf-8") as file:
        translations = json.load(file)
else:
    translations = {}

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

# Load the input JSON file
with open(input_file_path, "r", encoding="utf-8") as file:
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

# Print texts that need translation
print("Texts that need translation:")
for text in texts_to_translate:
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

# Save the translated data to a new JSON file
output_file_path = "translated_product_data.json"
with open(output_file_path, "w", encoding="utf-8") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)

print(f"Translated data saved to {output_file_path}")
