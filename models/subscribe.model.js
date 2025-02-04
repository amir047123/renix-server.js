const mongoose = require('mongoose')

const subscribeSectionSchema = mongoose.Schema({
   title: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   button: {
    type: String,
    required: [true, 'Please provide your button text.']
   },
   discount: {
    type: String,
    uppercase: true,
    required: [true, 'Please provide your title.']
   }
},{
    collection: "subscribeSection"
},
{
    timestamps: true
})

const SubscribeSection = mongoose.model('SubscribeSection', subscribeSectionSchema)
module.exports = SubscribeSection