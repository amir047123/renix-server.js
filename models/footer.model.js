const mongoose = require('mongoose')

const footerSectionSchema = mongoose.Schema({
    text: {
    type: String,
    required: [true, 'Please provide your text.']
   },
   quickLinks: {
    type: Array,
    required: [true, 'Please provide your quick links.']
   },
   services: {
    type: Array,
    required: [true, 'Please provide your services.']
   },
   contact: {
    type: Array,
    required: [true, 'Please provide your contact.']
   },
   rights: {
    type: String,
    required: [true, 'Please provide your rights.']
   },
   developBy: {
    type: String,
    required: [true, 'Please provide your develop information.']
   },
   socialLinks: {
    type: Array,
    required: [true, 'Please provide your socialLinks.']
   },
},{
    collection: "footerSection"
},
{
    timestamps: true
})



const FooterSection = mongoose.model('FooterSection', footerSectionSchema)
module.exports = FooterSection