const Admin=require('../models/Admin')
const bcrypt=require('bcrypt')
const {generateAccessToken,generateRefreshToken}=require('../utils/jwtUtils')
const adminLogin=async(req,res)=>{
    const {data}=req.body
    try {
        const {email,password}=data
        const admin=await Admin.findOne({email})
        if(!admin){
            console.log('admin not found')
            return res.status(404).json({message:'Admin Not Found'})
        }
        const isMatch=await bcrypt.compare(password,admin.password)
        if(!isMatch){
            console.log('password is not matched')
            return res.status(401).json({message:'Invalid Credential'})
        }
        
        console.log('Admin Logged In succes')
        generateAccessToken(admin)
        generateRefreshToken(admin)
        res.status(200).json({message:'Admin Logged In Successfully'})
    } catch (error) {
        console.log('error in admin login section',error)
        res.status(500).json({message:'Internal Server Error'})
    }
}

module.exports={
    adminLogin
}