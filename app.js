const express=require('express')
require('dotenv').config()
const app=express()



app.get('/',(req,res)=>{
    res.send('checking route')
})
app.listen(process.env.PORT,()=>{
    console.log('server running')
})
