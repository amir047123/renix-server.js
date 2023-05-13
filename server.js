const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// server
const port = process.env.PORT || 8080;


// database connection
mongoose.connect(process.env.DATABASE).then(() => {
  console.log(`Database connection is successful`.red.italic.bold);
});
mongoose.connect('mongodb+srv://organicherbalofficial:ZbbdRYIHnD6WihCT@cluster0.snumnte.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));
const uri = process.env.DATABASE;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});





app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.italic.bold);
});
