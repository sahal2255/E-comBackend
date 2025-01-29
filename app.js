const express=require('express')
const dbConnect = require('./config/dbConnect')
require('dotenv').config()
const app=express()



app.get('/',(req,res)=>{
    res.send('checking route')
})
app.get('/login',(req,res)=>{
    res.send('login route')
})
app.listen(process.env.PORT,()=>{
    console.log('server running')
    dbConnect()

})
