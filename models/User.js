const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    userName:{type:String,requried:true},
    email:{type:String,requried:true},
    password:{type:String,requried:true},
    role: { type: String, default: 'user' }

})
const User=mongoose.model('User',userSchema)
module.exports=User