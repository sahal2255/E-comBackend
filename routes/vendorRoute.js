const express=require('express')
const vendorController=require('../controller/vendorController')
const router=express.Router()
const {upload}=require('../config/cloudinary')

router.post('/register',upload.fields([{ name: "businessReg" }, { name: "panCard" }]),vendorController.vendorRegister)

module.exports=router