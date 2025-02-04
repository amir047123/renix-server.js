const HomeAboutSection = require("../models/homeAbout.model");

//update home about section
exports.updateHomeAbout = async(data)=> {
    const updateDoc = {
        $set: {
           title1: data.title1,
           description1: data.description1,
           title2: data.title2,
           description2: data.description2,
        }
      }
      const result = await HomeAboutSection.updateOne({},updateDoc,{ upsert: true })
      return result
}

//get home about section info service
exports.getHomeAboutSectionService = async() => {
    const result = await HomeAboutSection.findOne({})
    return result
  }