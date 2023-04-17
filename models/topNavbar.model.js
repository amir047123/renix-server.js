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
            type: Array,
            trim: true,
            required: [true, "Please provide email"],
            maxLength: [50, "maxLength 50."],
            lowercase: true,
            validate: [validator.isEmail, 'Please fill a valid email address'],
        }
    
},{
    timestamps: true
})

const TopNavbar = mongoose.model('TopNavbar', topNavbarSchema)
module.exports = TopNavbar