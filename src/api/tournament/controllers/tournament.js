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
      const { query } = ctx;

      const args = {
        where: { slug: slug },
        populate: query?.populate === "*" ? true : { ...query?.populate },
      };

      const entity = await strapi
        .query("api::tournament.tournament")
        .findOne(args);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
