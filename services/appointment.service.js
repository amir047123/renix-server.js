const Appointment = require("../models/appointment.model");

exports.createAppointmentService = async (data) => {
  const result = await Appointment.create(data);
  return result;
};

exports.updateAppointmentStatusService = async (id, data) => {
  const result = await Appointment.updateOne({ _id: id }, data);
  return result;
};
exports.getAppointmentByIdService = async (id) => {
  const result = await Appointment.find({ patientId: { $eq: id } });
  return result;
};
