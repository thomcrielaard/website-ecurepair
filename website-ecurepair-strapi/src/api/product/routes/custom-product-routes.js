"use strict";

/**
 * custom product router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/products/search",
      handler: "product.search",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/products/:id/similar",
      handler: "product.findSimilar",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
