module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '687c3b5a811c3863a49e8b0a6788d248'),
  },
});
