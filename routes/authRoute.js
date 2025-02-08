const express=require('express')
const {refreshToken} =require('../controller/authController')

const router=express.Router()

router.post('/refresh-token',refreshToken)

module.exports=router