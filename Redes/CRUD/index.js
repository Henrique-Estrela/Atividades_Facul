const express = require("express");
const app = express();
const config = require("config");
const appCustom = require("./config/appCustom");

appCustom(app, express);

app.listen(config.get("port"), (error) => {
  if (error) {
    console.log("Deu erro ai meu chapa!!");
    return;
  }
  console.log("Ta rodando lisinho...");
});
