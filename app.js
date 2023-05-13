const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const adminEdit = require("./routes/adminEdit.route");
const doctors = require("./routes/doctors.route");
const imageUploadRoutes = require("./routes/imageUpload.route");

// middleware
app.use(express.json());
app.use(cors());

app.use("/api/v1/upload", imageUploadRoutes);
app.use("/api/v1/adminEdit", adminEdit);
app.use("/api/v1/doctors", doctors);
//get image
app.get("/images/:filename", function (req, res) {
  var filename = req.params.filename;
  res.sendFile(__dirname + "/image/" + filename);
});

// route hit
app.get("/", (req, res, next) => {
  res.send(
    `<h1 style="color:#00ff00;font-size:62px; text-align:center;margin-top:200px">"Database Running with faysal & ifty"</h1>`
  );
});

module.exports = app;
