const express = require('express')
const router = express.Router();
const doctorsSection = require('../controllers/doctorsSection.controller')


router
.route('/') 
.get(doctorsSection.getDoctorsSection)
.post(doctorsSection.postDoctorsSection)

router
.route('/searchDoctors/:name') 
.get(doctorsSection.getSearchDoctors)



module.exports = router;