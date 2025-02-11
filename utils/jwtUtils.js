const jwt=require('jsonwebtoken')


const generateAccessToken=(user)=>{
    const accesstoken= jwt.sign({id:user._id,role:user.role},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15m'})
    return accesstoken
}

const generateRefreshToken=(user)=>{
    const refreshtoken= jwt.sign({id:user._id,role:user.role},process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
    return refreshtoken
}

module.exports={
    generateAccessToken,
    generateRefreshToken
}