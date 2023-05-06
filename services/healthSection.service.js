const healthSection = require("../models/healthSection.model")

//update health section service
exports.updateHealthSectionService = async(data) => {
    const updateDoc = {
      $set: {
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
      }
    }
    const result = await healthSection.updateOne({},updateDoc,{ upsert: true })
    return result
  }

//get health section info service
exports.getHealthSectionService = async() => {
  const result = await healthSection.findOne({})
  return result
}