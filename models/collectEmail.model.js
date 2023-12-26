const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectEmailSchema = new Schema({
  email: {
    type: String,
  },
 
});

const CollectEmail = mongoose.model("CollectEmail", collectEmailSchema);

module.exports = CollectEmail;
