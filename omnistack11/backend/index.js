const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (_, response) => {
  return response.json({ hello: "World!" });
});

app.listen(3333);
