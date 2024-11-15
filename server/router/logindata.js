const express = require("express");
const getdata = require("../controllers/logindata"); 
const Router3 = express.Router();

Router3.route("/logindata")
  .get(getdata);

module.exports = Router3;
