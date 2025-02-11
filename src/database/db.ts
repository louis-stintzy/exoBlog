const { Sequelize } = require("sequelize");

const pg_url = "postgres://blog:blog@localhost/blog"; // todo: utiliser PG_URL

function connect() {
  return new Sequelize(pg_url, {
    dialect: "postgres",
    logging: console.log,
    define: {
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  });
}

export default connect;
