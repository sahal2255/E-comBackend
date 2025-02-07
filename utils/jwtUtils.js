const jwt=require('jsonwebtoken')


const generateAccessToken=async(user)=>{
    const accesstoken= jwt.sign({id:user._id,role:user.role},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    console.log('generated accesstoken',accesstoken)
    return accesstoken
}

const generateRefreshToken=async(user)=>{
    return jwt.sign({id:user._id,role:user.role},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}

module.exports={
    generateAccessToken,
    generateRefreshToken
}