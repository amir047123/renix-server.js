const TopNavbar = require("../models/topNavbar.model");

//update top nav section
exports.updateTopNavbar = async(data)=> {
    const updateDoc = {
        $set: {
            phone: data.phone,
            time: data.time,
            email: data.email,
            website: data.website,
            linkedin: data.linkedin,
            youtube: data.youtube,
            facebook: data.facebook,
            twitter: data.twitter
        }
      }
      const result = await TopNavbar.updateOne({},updateDoc,{ upsert: true })
      return result
}

//get top nav section info service
exports.getTopNavSectionService = async() => {
    const result = await TopNavbar.findOne({})
    return result
  }