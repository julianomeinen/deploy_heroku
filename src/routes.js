const express = require("express");
const routes = express.Router();

routes.get("/", function(req, res) {
  return res.send("first route");
});

routes.get("/test", function(req, res) {
  return res.send("this is a test");
});

routes.get("/v1/test", function(req, res) {
  return res.send("this is a v1 test");
});

const SequenceController = require("./app/controller/SequenceController");

routes.get("/current", SequenceController.current);
routes.post("/new", SequenceController.store);
routes.post("/current", SequenceController.setCurrent);
routes.get("/next", SequenceController.next);

module.exports = routes;