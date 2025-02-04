const mongoose = require('mongoose')

const healthSectionSchema = mongoose.Schema({
   title: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   subtitle: {
    type: String,
    required: [true, 'Please provide your subtitle.']
   },
   description: {
    type: String,
    required: [true, 'Please provide your description text.']
   },
},{
    collection: "healthSection"
},
{
    timestamps: true
})



const HealthSection = mongoose.model('HealthSection', healthSectionSchema)
module.exports = HealthSection