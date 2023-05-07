const { createHeroSectionService, getHeroSectionService } = require("../services/heroSection.service")

//update hero section controller function
exports.updateHeroSectionController = async(req,res) => {
 
    try{
        const hero = await createHeroSectionService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully update your hero section.',
            data: hero
        })
    } 
    catch(error) {
        res.status(400).json({ 
            status: 'error',
            message: 'Oh sorry! we are not updated your data.',
        })
    }
}


//get hero section controller function
exports.getHeroSectionController = async(req,res) => {
 
    try{
        const hero = await getHeroSectionService();
        res.status(200).json({
            status: 'success',
            message: 'Wow! successfully found your hero section data.',
            data: hero
        })
    } 
    catch(error) {
        res.status(400).json({ 
            status: 'error',
            message: 'Data not found.',
        })
    }
}
