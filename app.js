const express=require('express')
const dbConnect = require('./config/dbConnect')
const userRoute=require('./routes/userRoute')
require('dotenv').config()
const app=express()



app.get('/',(req,res)=>{
    res.send('checking route')
})
app.use('/',userRoute)
app.listen(process.env.PORT,()=>{
    console.log('server running')
    dbConnect()

})
