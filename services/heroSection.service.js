const heroSection = require('../models/heroSection.model')

//create hero section post service
exports.createHeroSectionService = async(data) => {
  const updateDoc = {
    $set: {
      commission: data.commission,
      title: data.title,
      subtitle: data.subtitle,
      button: data.button,
      image: data.image
    }
  }
  const hero = await heroSection.updateOne({},updateDoc,{ upsert: true })
  return hero
}

//get hero section info service
exports.getHeroSectionService = async() => {
  const hero = await heroSection.findOne({})
  return hero
}