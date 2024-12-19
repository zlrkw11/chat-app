require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./user");

// express app
const app = express();

app.use(cors());
app.use(express.json());

const user1 = new User({
  name: "joe",
  age: 20,
});

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
