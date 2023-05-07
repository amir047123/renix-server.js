const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
const port = process.env.PORT || 8080;

const start = async () => {
  try {

    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(port, () => {
      console.log(`server is running on ${port}`)
    });
  }
  catch (err) {
    console.log(err)
  }
}

start();


