const express = require("express");
const ongController = require("./controllers/ong-controller");
const incidentController = require("./controllers/incident-controller");

const routes = express.Router();

routes.get("/ongs", ongController.findAll);
routes.post("/ongs", ongController.create);

routes.get("/incidents", incidentController.findAll);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.deleteIncident);

module.exports = routes;
