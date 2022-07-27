"use strict";

/**
 *  tournament controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::tournament.tournament",
  ({ strapi }) => ({
    async findOneBySlug(ctx) {
      const { slug } = ctx.params;

      console.log("slug :: ", ctx);

      const entity = await strapi.query("api::tournament.tournament").findOne({
        where: { slug: slug },
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
