const mongoose = require('mongoose')

const doctorsSchema = mongoose.Schema({
   title: {
    type: String,
    required: [true, 'Please provide your title.']
   },
   subtitle: {
    type: String,
    required: [true, 'Please provide your subtitle.']
   },
   info: {
    type: Array,
    required: [true, 'Please provide your information.']
   },
},{
    collection: "doctors"
},
{
    timestamps: true
})



const DoctorsSection = mongoose.model('DoctorsSection', doctorsSchema)
module.exports = DoctorsSection