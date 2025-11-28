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

  async findSimilar(ctx) {
    const id = Number(ctx.params.id);
    const max = Number(ctx.query.max) || 36;
    const universeLimit = Number(ctx.query.universeLimit) || 500; // safety upper bound

    if (!id || Number.isNaN(id)) {
      return ctx.badRequest("Invalid product id");
    }

    // 1) Get the current product with minimal fields needed
    const current = await strapi.entityService.findOne(
      "api::product.product",
      id,
      {
        fields: ["id"],
        populate: {
          onderdeel: { fields: ["documentId"] },
          merks: { fields: ["documentId"] },
        },
      }
    );

    if (!current) {
      return ctx.notFound("Product not found");
    }

    const onderdeelDocId = current.onderdeel?.documentId || null;
    const merkDocIds = (current.merks ?? [])
      .map((m) => m.documentId)
      .filter(Boolean);

    // If we don't have an onderdeel, we can't define similarity
    if (!onderdeelDocId) {
      ctx.body = { data: [] };
      return;
    }

    //
    // 2) Define the "similar universe" = all products sharing this onderdeel (+ optional merks)
    //
    const baseFilters = {
      onderdeel: { documentId: onderdeelDocId },
    };

    if (merkDocIds.length > 0) {
      baseFilters.merks = {
        documentId: { $in: merkDocIds },
      };
    }

    //
    // 3) Fetch the entire similar universe, sorted by id ASC
    //    (this includes the current product itself)
    //
    const allSimilar = await strapi.entityService.findMany(
      "api::product.product",
      {
        filters: baseFilters,
        sort: ["id:asc"],
        limit: universeLimit,
        fields: ["onderdeelnummer", "samenvatting"], // id always included
      }
    );

    if (!allSimilar.length) {
      ctx.body = { data: [] };
      return;
    }

    //
    // 4) Find the index of the current product in that sorted list
    //
    const index = allSimilar.findIndex((p) => p.id === id);

    if (index === -1) {
      // Current product somehow not in the universe; just return first max (without self filter)
      const withoutSelf = allSimilar.filter((p) => p.id !== id).slice(0, max);
      ctx.body = { data: withoutSelf };
      return;
    }

    //
    // 5) Rotate the list so it starts AFTER the current product,
    //    then fill with items before it (true circular), and drop self.
    //
    const rotated = [];

    // After current
    for (let i = index + 1; i < allSimilar.length; i++) {
      rotated.push(allSimilar[i]);
    }

    // Before current
    for (let i = 0; i < index; i++) {
      rotated.push(allSimilar[i]);
    }

    // 6) Explicitly ensure we never include self (even if weird data)
    const withoutSelf = rotated.filter((p) => p.id !== id);

    const result = withoutSelf.slice(0, max);

    ctx.body = {
      data: result,
    };
  },
}));
