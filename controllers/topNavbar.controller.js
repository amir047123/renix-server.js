const { updateTopNavbar, getTopNavSectionService } = require("../services/topNavbar.service");

module.exports.getTopNavbar = async(req, res) => {
  try{
    const result = await getTopNavSectionService();
    res.status(200).json({
        status: 'success',
        message: 'Wow! successfully found your Top nav section data.',
        data: result
    })
} 
catch(error) {
    res.status(400).json({ 
        status: 'error',
        message: 'Data not found.',
    })
}
};

module.exports.editTopNavbar = async (req, res) => {
  try{
    const topNav = await updateTopNavbar(req.body);
    res.status(200).json({
        status: 'success',
        message: 'Wow! successfully update your Top Nav section.',
        data: topNav
    })
} 
catch(error) {
    res.status(400).json({ 
        status: 'error',
        message: 'Oh sorry! we are not updated your data.',
    })
}
};
