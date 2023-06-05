const Appointment = require("../models/appointment.model");
const {
  createAppointmentService,
  updateAppointmentStatusService,
  getAppointmentByIdService,
} = require("../services/appointment.service");

// for property post
exports.createAppointment = async (req, res) => {
  try {
    const newBlog = await createAppointmentService(req.body);
    res.status(200).json({
      status: "success",
      message: "data inserted successfully!",
      data: newBlog,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// get Specific Appointment
exports.getSpecificAppointment = async (req, res) => {
  const page = +req.query?.page;
  const size = +req.query?.size;
  const fieldName = req.query?.fieldName;
  const fieldValue = req.query?.fieldValue;

  try {
    let appointment = await Appointment.find({
      [fieldName]: { $eq: fieldValue },
    })
      .skip(page * size)
      .limit(size);
    const total = await Appointment.countDocuments({
      [fieldName]: { $eq: fieldValue },
    });
    res.status(200).json({
      status: "success",
      data: appointment,
      total: total,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      error: err.message,
    });
  }
};

// update Appointment status
exports.updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await updateAppointmentStatusService(id, req.body);

    if (!result.modifiedCount) {
      return res.status(400).json({
        status: "fail",
        message: "couldn't update",
      });
    }
    res.status(200).json({
      status: "success",
      message: "appointment updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Internal error. couldn't update user ",
      error: error.message,
    });
  }
};

//Get appointment by id
exports.getAppointmentById = async (req, res) => {
  const id = req?.params.id;
  try {
    const data = await getAppointmentByIdService(id);
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "internal error",
      error: error.message,
    });
  }
};
