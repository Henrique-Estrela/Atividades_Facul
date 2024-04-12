//const Router = require("express").Router;
const { Router } = require("express");
const router = Router();
const clientController = require("../controllers/clientController");

//get post put delete

router.get("/clients", clientController.search);

router.post("/clients", clientController.create);

router.put("/client/:id", clientController.update);

router.delete("/client/:id", clientController.delete);

module.exports = router;
