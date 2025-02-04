const mongoose = require("mongoose");

const appointmentSchema = mongoose.Schema(
  {
    name: { type: String },
    phone: { type: String },
    email: { type: String },
    date: { type: String },
    time: { type: String },
    area: { type: String },
    city: { type: String },
    state: { type: String },
    postCode: { type: String },
    doctorId: { type: String },
    patientId: { type: String },
    appointmentStatus: { type: String, default: "pending" },
    meetLink: { type: String, default: "" },
  },
  { timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
