"use strict";

/**
 * searchbar router
 */

module.exports = {
  routes: [
    {
      method: "GET",
      path: "/searchbar",
      handler: "searchbar.find",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
