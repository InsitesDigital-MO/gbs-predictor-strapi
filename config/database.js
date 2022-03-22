module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "frankfurt-postgres.render.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "gbs_predictor_db"),
      user: env("DATABASE_USERNAME", "gbs_predictor_db_user"),
      password: env("DATABASE_PASSWORD", "RDWHj4XToqe3oSxgmXIMG6XEvSh9wtKX"),
      ssl: env.bool("DATABASE_SSL", true),
    },
  },
});
