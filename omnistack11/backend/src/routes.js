const express = require("express");
const routes = express.Router();

routes.get("/", (_, response) => {
  return response.json({ hello: "World!" });
});

module.exports = routes;
