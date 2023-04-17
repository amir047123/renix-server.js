const TopNavbar = require("../models/topNavbar.model");


exports.updateTopNavbar = async(data)=> {
    const result = await TopNavbar.updateOne({},data)
    return result
}