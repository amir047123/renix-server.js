const express = require('express');
const router = express.Router();
const topNavbar = require('../controllers/topNavbar.controller')
const heroSection = require('../controllers/heroSection.controller')
const healthSection = require('../controllers/healthSection.controller')
const homeAboutSection = require('../controllers/homeAboutSection.controller')
const subscribeSection = require('../controllers/subscribeSection.controller')
const doctorsSection = require('../controllers/doctorsSection.controller')
const contactSection = require('../controllers/contactSection.controller')
const footerSection = require('../controllers/footerSection.controller')


router
.route('/topNavbar') 
.get(topNavbar.getTopNavbar)
.post(topNavbar.editTopNavbar)

router
.route('/heroSection') 
.post(heroSection.updateHeroSectionController)
.get(heroSection.getHeroSectionController)


router
.route('/healthSection') 
.get(healthSection.getHealthSection)
.post(healthSection.editHealthSection)

router
.route('/homeAboutSection') 
.get(homeAboutSection.getHomeAboutSection)
.post(homeAboutSection.editHomeAboutSection)

router
.route('/subscribeSection') 
.get(subscribeSection.getSubscribeSection)
.post(subscribeSection.editSubscribeSection)

// router
// .route('/doctorsSection') 
// .get(doctorsSection.getDoctorsSection)
// .post(doctorsSection.postDoctorsSection)

router
.route('/contactSection') 
.get(contactSection.getContactSection)
.post(contactSection.editContactSection)

router
.route('/footerSection') 
.get(footerSection.getFooterSection)
.post(footerSection.editFooterSection)


module.exports = router;