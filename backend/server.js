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

// Register page
app.post("/api/register", async (req, res) => {});

// Login page
app.post("/api/login", async (req, res) => {});

// Profile page
app.get("/api/profile/:username", async (req, res) => {
  res.send("profile page");
  console.log("display profile");
});

app.put("/api/profile/:username", async (req, res) => {
  console.log("update profile");
});

// listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port 4000");
});
