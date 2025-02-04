const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactRenixSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const ContactRenix = mongoose.model("ContactRenix", contactRenixSchema);

module.exports = ContactRenix;
