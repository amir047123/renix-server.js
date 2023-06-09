const express = require("express");
const {
  createAppointment,
  getSpecificAppointment,
  updateAppointmentStatus,
  getAppointmentById,
  getAppointment,
} = require("../controllers/appointment.controller");

const router = express.Router();

router.route("/").get(getAppointment);
router.route("/getAppointment/:id").get(getAppointmentById);
router.route("/postAppointment").post(createAppointment);
router.route("/specific").get(getSpecificAppointment);
router.route("/AppointmentStatus/:id").patch(updateAppointmentStatus);

module.exports = router;
