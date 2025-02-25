const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SlideSchema = new Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  buttonText: {
    type: String,
  },
  img: {
    type: String,
  },
  link: {
    type: String,
  },
  description: {
    type: String,
  },
});

const Slide = mongoose.model("Slide", SlideSchema);

module.exports = Slide;
