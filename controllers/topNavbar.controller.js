const { updateTopNavbar } = require("../services/topNavbar.service");

module.exports.getTopNavbar = (req, res) => {
  res.send("Top nav bar get found");
};

module.exports.editTopNavbar = async (req, res) => {
  try {
    console.log(req.body)
    const result = await updateTopNavbar(req.body)
    console.log(result)
    res.send({
      status: "success",
      message: "Top Navbar update successfully.",
    });
  } catch (error) {
    const {message} = error
    res.send({
      status: "fail",
      message: message,
    });
  }
};
