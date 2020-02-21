const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  return res.send("first route");
});

const SequenceController = require("./app/controller/SequenceController");

routes.get("/current", SequenceController.current);
routes.post("/new", SequenceController.store);
routes.post("/current", SequenceController.setCurrent);
routes.get("/next", SequenceController.next);

module.exports = routes;