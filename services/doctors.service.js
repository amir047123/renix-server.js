const DoctorsSection = require("../models/doctors.model")

//create doctors service
exports.createDoctorsService = async(data) => {
  data["image"] = data.image.split("/")[3];
    const result = await DoctorsSection.create(data)
    return result
  }

//get doctors info service
exports.getDoctorsService = async() => {
  const cursor = await DoctorsSection.find({})
  return cursor
}

//get doctors info by search service
exports.getSearchDoctorsService = async(name) => {
  const cursor = await DoctorsSection.findOne({fullName: name})
  return cursor
}

//change doctors status service
exports.changeDoctorsStatusService = async(id) => {
  const previous = await DoctorsSection.findById(id.id)
  console.log(previous)
  const cursor = await DoctorsSection.updateOne({_id: id.id},{ $set: { status: !previous.status } })
  return cursor
}