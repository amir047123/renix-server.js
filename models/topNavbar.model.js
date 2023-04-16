const mongoose = require('mongoose')
const validator = require('validator');

const topNavbarSchema = mongoose.Schema({
    phone: [
        {
            type: String,
            trim: true,
            maxLength: [25, "maxLength 25."],
            unique: true
        }
    ],
    time: [
        {
            type: String,
            trim: true,
            maxLength: [35, "maxLength 35."],
        }
    ],
    email: [
        {
            type: String,
            trim: true,
            maxLength: [50, "maxLength 50."],
            validate: [validator.isEmail, 'Please provide a valid email']
        }
    ]
},{
    timestamps: true
})

const TopNavbar = mongoose.model('TopNavbar', topNavbarSchema)
module.exports = TopNavbar