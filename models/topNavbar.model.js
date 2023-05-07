const mongoose = require('mongoose')
const validator = require('validator');

const topNavbarSchema = mongoose.Schema({
    phone: 
        {
            type: Array,
            trim: true,
            required: [true, "Please provide phone"],
            maxLength: [25, "maxLength 25."],
            unique: true
        }
    ,
    time: 
        {
            type: Array,
            trim: true,
            required: [true, "Please provide time"],
            maxLength: [35, "maxLength 35."],
        }
    ,
    email: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide email"],
            maxLength: [50, "maxLength 50."],
            lowercase: true,
            validate: [validator.isEmail, 'Please fill a valid email address'],
        },
        website: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide website link"],
            validate: [validator.isURL, 'Please fill a valid url.'],
        },
        linkedin: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide linkedin link"],
            validate: [validator.isURL, 'Please fill a valid url.'],
        },
        youtube: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide youtube link"],
            validate: [validator.isURL, 'Please fill a valid url.'],
        },
        facebook: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide facebook link"],
            validate: [validator.isURL, 'Please fill a valid url.'],
        },
        twitter: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide twitter link"],
            validate: [validator.isURL, 'Please fill a valid url.'],
        }
    
},{
    timestamps: true
})

const TopNavbar = mongoose.model('TopNavbar', topNavbarSchema)
module.exports = TopNavbar