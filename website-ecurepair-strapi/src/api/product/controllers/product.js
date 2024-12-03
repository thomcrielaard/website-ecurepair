"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product", ({ strapi }) => ({
  async search(ctx) {
    const { tekst, merk, onderdeel, pagination } = ctx.query;

    // Default values for pagination if not provided
    const pageSize = pagination?.pageSize
      ? parseInt(pagination.pageSize, 10)
      : 8;
    const page = pagination?.page ? parseInt(pagination.page, 10) : 1;
    const filters = {};

    // Function to clean the text by removing spaces, dashes, and periods
    const cleanText = (input) => {
      return (
        input?.split(" ").join("").split("-").join("").split(".").join("") || ""
      );
    };

    // Clean the search text if provided
    const cleanedText = cleanText(tekst);

    // Filter based on search text
    const filterByText = (item) => {
      const { omschrijving, samenvatting, onderdeelnummer } = item;

      const cleanedOmschrijving = cleanText(omschrijving);
      const cleanedSamenvatting = cleanText(samenvatting);
      const cleanedOnderdeelnummer = cleanText(onderdeelnummer);

      // Perform the comparison with the cleaned text and fields
      return (
        !cleanedText ||
        cleanedOmschrijving.includes(cleanedText) ||
        cleanedSamenvatting.includes(cleanedText) ||
        cleanedOnderdeelnummer.includes(cleanedText)
      );
    };

    // Apply filters for merk and onderdeel if provided
    if (merk) {
      filters.merks = { id: merk };
    }

    if (onderdeel) {
      filters.onderdeel = { id: onderdeel };
    }

    // Fetch the products with the provided filters, pagination, and specific fields/population
    const products = await strapi.entityService.findMany(
      "api::product.product",
      {
        filters,
        fields: ["onderdeelnummer", "samenvatting"], // Select specific fields
        populate: {
          afbeelding: {
            fields: ["url"], // Populate afbeelding with only the url field
          },
          onderdeel: {
            populate: {
              afbeeldingen: {
                fields: ["url"], // Populate afbeeldingen in onderdeel with only the url field
              },
            },
          },
        },
      }
    );

    // Apply the text filter
    const filteredProducts = products.filter(filterByText);

    // Calculate pagination details
    const total = filteredProducts.length;
    const pageCount = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const paginatedProducts = filteredProducts.slice(start, end);

    return {
      data: paginatedProducts,
      meta: {
        pagination: {
          page: Number(page),
          pageSize: Number(pageSize),
          pageCount: pageCount,
          total: total,
        },
      },
    };
  },
}));
