const TopNavbar = require("../models/topNavbar.model");

module.exports.getTopNavbar = (req, res) => {
  res.send("Top nav bar get found");
};

module.exports.editTopNavbar = async (req, res) => {
  try {
    const result = new TopNavbar(req.body);
    await result.save();
    res.send({
      status: "success",
      error: "Top Navbar update successfully.",
    });
  } catch (error) {
    const {message} = error
    res.send({
      status: "fail",
      error: message,
    });
  }
};
