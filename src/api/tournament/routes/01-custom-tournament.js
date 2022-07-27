/**
 * tournament router.
 */

module.exports = {
  routes: [
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/tournaments/:slug([^\\d][a-z\\d\\-]+)",
      handler: "api::tournament.tournament.findOneBySlug",
      config: {
        auth: false,
      },
    },
  ],
};
