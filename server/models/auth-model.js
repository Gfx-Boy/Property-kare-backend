const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
  
    email: { type: String },
    password: { type: String }
  },
  { collection: "log-in" }
);

const authmodel =  mongoose.model("authmodel", authSchema);
module.exports = authmodel;
