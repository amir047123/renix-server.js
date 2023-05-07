const Contact = require("../models/contact.model")

//update Contact section service
exports.updateContactService = async(data) => {
    const updateDoc = {
      $set: {
        title: data.title,
        location: data.location,
        time: data.time,
        email: data.email,
        website: data.website,
        phone: data.phone,
      }
    }
    const result = await Contact.updateOne({},updateDoc,{ upsert: true })
    return result
  }

//get Contact section info service
exports.getContactSectionService = async() => {
  const result = await Contact.findOne({})
  return result
}