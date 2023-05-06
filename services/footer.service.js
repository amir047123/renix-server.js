const FooterSection = require("../models/footer.model")

//update Footer Section service
exports.updateFooterSectionService = async(data) => {
    const updateDoc = {
      $set: {
        text: data.text,
        quickLinks: data.quickLinks,
        services: data.services,
        contact: data.contact, 
        rights: data.rights,
        developBy: data.developBy,
        socialLinks: data.socialLinks,
      }
    }
    const result = await FooterSection.updateOne({},updateDoc,{ upsert: true })
    return result
  }

//get Footer Section info service
exports.getFooterSectionService = async() => {
  const result = await FooterSection.findOne({})
  return result
}