const express=require('express')
const adminController=require('../controller/adminController')
const authMiddleware = require('../middleware/authMiddleware')
const router=express.Router()


router.post('/login',adminController.adminLogin)
router.get('/check-auth',authMiddleware(['admin']),adminController.adminCheckAuth)

module.exports=router