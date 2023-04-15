const express = require('express');
const router = express.Router();

router
.route('/topNavbar') 
.get((req,res)=>{
    res.send('Top nav bar get found')
})
.post((req,res)=>{
    res.send('Top nav bar post found')
})

router
.route('/heroSection') 
.get((req,res)=>{
    res.send('heroSection get found')
})
.post((req,res)=>{
    res.send('heroSection post found')
})


router
.route('/healthSection') 
.get((req,res)=>{
    res.send('healthSection get found')
})
.post((req,res)=>{
    res.send('healthSection post found')
})

router
.route('/homeAboutSection') 
.get((req,res)=>{
    res.send('homeAboutSection get found')
})
.post((req,res)=>{
    res.send('homeAboutSection post found')
})

router
.route('/subscribeSection') 
.get((req,res)=>{
    res.send('subscribeSection get found')
})
.post((req,res)=>{
    res.send('subscribeSection post found')
})

router
.route('/doctorsSection') 
.get((req,res)=>{
    res.send('doctorsSection get found')
})
.post((req,res)=>{
    res.send('doctorsSection post found')
})

router
.route('/contactSection') 
.get((req,res)=>{
    res.send('contactSection get found')
})
.post((req,res)=>{
    res.send('contactSection post found')
})

router
.route('/footerSection') 
.get((req,res)=>{
    res.send('footerSection get found')
})
.post((req,res)=>{
    res.send('footerSection post found')
})


module.exports = router;