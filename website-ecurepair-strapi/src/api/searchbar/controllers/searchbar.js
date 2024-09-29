"use strict";

/**
 * searchbar controller
 */

module.exports = {
  async find(ctx) {
    // Fetch only necessary fields (id, naam) from merks
    const merks = await strapi.entityService.findMany("api::merk.merk", {
      fields: ["id", "naam"],
    });

    // For each merk, find onderdeels that have at least one product linked to the corresponding merk
    const result = await Promise.all(
      merks.map(async (merk) => {
        // Fetch only id and naam of onderdeels, and populate products minimally
        const onderdeels = await strapi.entityService.findMany(
          "api::onderdeel.onderdeel",
          {
            filters: {
              products: {
                merks: {
                  id: {
                    $contains: merk.id,
                  },
                },
              },
            },
            fields: ["id", "naam"], // Only select necessary fields
            populate: {
              products: {
                fields: ["id"], // Only need the id of products to verify the relationship
                populate: {
                  merks: {
                    fields: ["id"], // Only need the id of merks to verify the relationship
                  },
                },
              },
            },
          }
        );

        // Filter and return only the id and naam of onderdeels
        const filteredOnderdeels = onderdeels
          .filter((onderdeel) =>
            onderdeel.products.some((product) =>
              product.merks.some((m) => m.id === merk.id)
            )
          )
          .map((onderdeel) => ({
            id: onderdeel.id,
            naam: onderdeel.naam,
          }));

        return {
          id: merk.id,
          naam: merk.naam,
          onderdeels: filteredOnderdeels,
        };
      })
    );

    return result;
  },
};
