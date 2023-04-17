const { getFooterSectionService, updateFooterSectionService } = require("../services/footer.service");


//get footer information
module.exports.getFooterSection = async(req,res)=>{
    try{
        const result = await getFooterSectionService();
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully found your footer section information.',
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


//update footer information
module.exports.editFooterSection = async(req,res)=>{
    try{
        const result = await updateFooterSectionService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your footer section.',
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