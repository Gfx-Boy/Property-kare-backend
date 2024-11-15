const express = require("express");
const registration = require("../controllers/auth-controller"); 

const Router = express.Router();

Router.route("/login")
  .post(registration);

module.exports = Router;
