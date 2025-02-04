const { updateHealthSectionService, getHealthSectionService } = require("../services/healthSection.service");


//get health section information
module.exports.getHealthSection = async(req,res)=>{
    try{
        const result = await getHealthSectionService();
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your health section.',
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

//update health section
module.exports.editHealthSection = async(req,res)=>{
    try{
        const result = await updateHealthSectionService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your Health section.',
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