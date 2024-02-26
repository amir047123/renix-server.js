const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const adminEdit = require("./routes/adminEdit.route");
const doctors = require("./routes/doctors.route");
const imageUploadRoutes = require("./routes/imageUpload.route");
const medicineRoute = require("./routes/medicine.route");
const categoryRoute = require("./routes/category.route");
const blogsCategoryRoute = require("./routes/blogsCategoryRoute");
const blogsRoute = require("./routes/blogs.route");
const orderRoute = require("./routes/order.route");
const userRoutes = require("./routes/user.route");
const appointmentRoute = require("./routes/appointment.route");
const contactRenix = require("./routes/contactRenix.route")
const collectEmail = require("./routes/collectEmail.route")
const shippingRoutes = require("./routes/shipping.route")
const newsAndMediaRouter = require("./routes/newsAndMedia.route");

// middleware
app.use(express.json());
app.use(cors());
// app.use("/images", express.static("image"));
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/upload", imageUploadRoutes);
app.use("/api/v1/adminEdit", adminEdit);
app.use("/api/v1/doctors", doctors);
app.use("/api/v1/medicine", medicineRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/blogsCategory", blogsCategoryRoute);
app.use("/api/v1/blogs", blogsRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/appointment", appointmentRoute);
app.use("/api/v1/contactRenix", contactRenix);
app.use("/api/v1/collectEmail", collectEmail);

app.use("/api/v1/shipping", shippingRoutes);

app.use("/api/v1/newsAndMedia", newsAndMediaRouter);

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
