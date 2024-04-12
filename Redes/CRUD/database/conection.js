const mysql = require("mysql");
const config = require("config");

const conection = mysql.createConnection({
  host: config.get("conection.host"),
  port: config.get("conection.port"),
  user: config.get("conection.user"),
  password: config.get("conection.password"),
  database: config.get("conection.database"),
});

module.exports = conection;
