const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    title: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide title"],
        }
    ,
    location: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide location"],
        },
        time: 
        {
            type: Array,
            trim: true,
            required: [true, "Please provide time"],
        },
        email: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide email"],
            maxLength: [50, "maxLength 50."],
            lowercase: true,
        },
        website: 
        {
            type: String,
            trim: true,
            required: [true, "Please provide website link"],
        },
        phone: 
        {
            type: Array,
            trim: true,
            required: [true, "Please provide phone"],
            maxLength: [25, "maxLength 25."],
            unique: true
        }
},{
    collection: "contact"
},{
    timestamps: true
}
)

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact