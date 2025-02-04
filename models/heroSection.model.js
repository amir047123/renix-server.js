const mongoose = require('mongoose')

const heroSectionSchema = mongoose.Schema({
   commission: {
    type: String,
    required: [true, 'Please provide your commission.']
   },
   title: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   subtitle: {
    type: String,
    required: [true, 'Please provide your subtitle.']
   },
   button: {
    type: String,
    required: [true, 'Please provide your button text.']
   },
   image: {
    type: String,
    required: [true, 'Please provide your image url.']
   },
},{
    collection: "heroSection"
},
{
    timestamps: true
})



const HeroSection = mongoose.model('HeroSection', heroSectionSchema)
module.exports = HeroSection