const {
  updateContactService,
  getContactSectionService,
} = require("../services/contact.service");

module.exports.getContactSection = async (req, res) => {
  try {
    const result = await getContactSectionService();
    res.status(200).json({
      status: "success",
      message: "Wow! successfully find your contact section.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Oh sorry! we are not updated your data.",
    });
  }
};

//update contact section
module.exports.editContactSection = async (req, res) => {
  try {
    const result = await updateContactService(req.body);
    res.status(200).json({
      status: "success",
      message: "Wow! successfully update your contact section.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Oh sorry! we are not updated your data.",
    });
  }
};
