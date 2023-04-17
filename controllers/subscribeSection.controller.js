const { getSubscribeSectionService, updateSubscribe } = require("../services/subscribe.service");

module.exports.getSubscribeSection = async(req,res)=>{
    try{
        const result = await getSubscribeSectionService();
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully found your subscribe data.',
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
module.exports.editSubscribeSection = async(req,res)=>{
    try{
        const result = await updateSubscribe(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your subscribe section.',
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