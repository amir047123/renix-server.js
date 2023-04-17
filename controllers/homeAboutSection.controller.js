const { getHomeAboutSectionService, updateHomeAbout } = require("../services/homeAbout.service");

//get home about information
module.exports.getHomeAboutSection = async(req,res)=>{
    try{
        const result = await getHomeAboutSectionService();
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully found your Home about data.',
            data: result
        })
    } 
    catch(error) {
        res.status(400).json({ 
            status: 'error',
            message: 'Data not found.',
        })
    }
}

//update home about section 
module.exports.editHomeAboutSection = async(req,res)=>{
    try{
        const result = await updateHomeAbout(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your home about section.',
            data: result
        })
    } 
    catch(error) {
        res.status(400).json({ 
            status: 'error',
            message: 'Oh sorry! we are not updated your data.',
        })
    }
}