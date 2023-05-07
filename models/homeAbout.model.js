const mongoose = require('mongoose')

const homeAboutSectionSchema = mongoose.Schema({
   title1: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   description1: {
    type: String,
    required: [true, 'Please provide your description.']
   },
   title2: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   description2: {
    type: String,
    required: [true, 'Please provide your description.']
   }
},{
    collection: "homeAboutSection"
},
{
    timestamps: true
})

const HomeAboutSection = mongoose.model('HomeAboutSection', homeAboutSectionSchema)
module.exports = HomeAboutSection