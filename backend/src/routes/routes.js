const express = require("express");
const routes = express.Router();

routes.get("/:users", (req, res) => {
  const query = req.query; //pegando um query params
  const params = req.params.users; //pegando um route params
  const body = req.body; //pegando um body params

  console.log(body);

  return res.json({ jossias: "go to sleap" });
});

module.exports = routes;
