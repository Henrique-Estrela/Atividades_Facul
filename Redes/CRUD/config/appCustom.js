const router = require("../routers");
const conection = require("../database/conection");
const tables = require("../database/tables");


module.exports = (app, express) => {
  router(app, express);
  tables.init(conection);
};
