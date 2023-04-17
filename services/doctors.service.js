const DoctorsSection = require("../models/doctors.model")

//create doctors service
exports.createDoctorsService = async(data) => {
    const result = await DoctorsSection.create(data)
    return result
  }

//get doctors info service
exports.getDoctorsService = async() => {
  const cursor = await DoctorsSection.find({})
  return cursor
}