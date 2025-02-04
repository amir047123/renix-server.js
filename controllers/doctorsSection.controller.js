const {
  createDoctorsService,
  getDoctorsService,
  getSearchDoctorsService,
  changeDoctorsStatusService,
} = require("../services/doctors.service");

//get doctors information
module.exports.getDoctorsSection = async (req, res) => {
  try {
    const result = await getDoctorsService();
    res.status(200).json({
      status: "success",
      message: "Wow! successfully found your doctors data.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data not found.",
    });
  }
};

//insert doctors information
module.exports.postDoctorsSection = async (req, res) => {
  try {
    const result = await createDoctorsService(req.body);

    res.status(200).json({
      status: "success",
      message: "Wow! successfully insert your doctors information.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Oh sorry! we are not insert your data.",
    });
  }
};

//get doctors information by search
module.exports.getSearchDoctors = async (req, res) => {
  try {
    const result = await getSearchDoctorsService(req.params.name);
    res.status(200).json({
      status: "success",
      message: "Wow! successfully found your doctors data.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data not found.",
    });
  }
};

//change doctors status
module.exports.changeDoctorsStatus = async (req, res) => {
  try {
    const result = await changeDoctorsStatusService(req.body);
    res.status(200).json({
      status: "success",
      message: "Wow! successfully found your doctors data.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Data not found.",
    });
  }
};
