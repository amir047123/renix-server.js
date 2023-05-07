const mongoose = require('mongoose')

const doctorsSchema = mongoose.Schema({
    fullName: {
    type: String,
    required: [true, 'Please provide your fullName.']
   },
   email: {
    type: String,
    required: [true, 'Please provide your email.']
   },
   phone: {
    type: String,
    required: [true, 'Please provide your phone.']
   },
   address: {
    type: String,
    required: [true, 'Please provide your address.']
   },
   expertise: {
    type: String,
    required: [true, 'Please provide your expertise.']
   },
   description: {
    type: String,
    required: [true, 'Please provide your description.']
   },

   facebook: {
    type: String,
    required: [true, 'Please provide your facebook.']
   },
   linkedin: {
    type: String,
    required: [true, 'Please provide your linkedin.']
   },
   twitter: {
    type: String,
    required: [true, 'Please provide your twitter.']
   },
   youtube: {
    type: String,
    required: [true, 'Please provide your youtube.']
   },
   image: {
    type: String,
    required: [true, 'Please provide your image.']
   },
   status: {
    type: Boolean
   },
},{
    collection: "doctors"
},
{
    timestamps: true
})



const DoctorsSection = mongoose.model('DoctorsSection', doctorsSchema)
module.exports = DoctorsSection