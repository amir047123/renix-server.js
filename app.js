const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

// route hit
app.get("/", (req, res, next) => {
    res.send(`<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">"Database routing successfully"</h1>`);
});

module.exports = app;