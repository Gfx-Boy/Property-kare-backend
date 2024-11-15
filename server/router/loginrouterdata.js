const express = require("express");
const logindata = require("../controllers/logindata-controller");

const router2 = express.Router();

router2.route("/getdata").get(logindata);

module.exports = router2;
