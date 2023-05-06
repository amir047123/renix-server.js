const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const adminEdit = require('./routes/adminEdit.route')

// middleware
app.use(express.json());
app.use(cors());


app.use('/api/v1/adminEdit', adminEdit)

// route hit
app.get("/", (req, res, next) => {
    res.send(`<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">"Database routing successfully"</h1>`);
});

module.exports = app;