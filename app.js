const express=require('express')
const dbConnect = require('./config/dbConnect')
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute')
const cors=require('cors')
require('dotenv').config()
const app=express()




app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('checking route') 
})
app.use('/api/',userRoute)
app.use('/api/admin',adminRoute)

app.listen(process.env.PORT,()=>{
    console.log('server running')
    dbConnect()
})
