export default function constructSearchUrl(text, brand, part) {
  let url = "/onderdelen/zoeken/1";
  let queryParams = [];

  if (text && text != "") {
    queryParams.push(`onderdeel=${encodeURIComponent(text)}`);
  }

  if (brand && brand != "DEFAULT") {
    queryParams.push(`merk=${encodeURIComponent(brand)}`);
  }

  if (part && part != "DEFAULT") {
    queryParams.push(`part=${encodeURIComponent(part)}`);
  }

  if (queryParams.length > 0) {
    url += "?";
    url += queryParams.join("&");
  }

  return url;
}
