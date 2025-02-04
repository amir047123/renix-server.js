const SubscribeSection = require("../models/subscribe.model")

//update subscribe section
exports.updateSubscribe = async(data)=> {
    const updateDoc = {
        $set: {
           title: data.title,
           button: data.button,
           discount: data.discount,
        }
      }
      const result = await SubscribeSection.updateOne({},updateDoc,{ upsert: true })
      return result
}

//get subscribe section info service
exports.getSubscribeSectionService = async() => {
    const result = await SubscribeSection.findOne({})
    return result
  }