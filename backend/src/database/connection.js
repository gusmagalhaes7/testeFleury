var knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    user: "gustavo",
    password: "admin",
    database: "fleury",
  },
});
module.exports = knex;