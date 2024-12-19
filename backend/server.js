require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// express app
const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "Homepage" });
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
