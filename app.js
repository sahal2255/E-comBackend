const express=require('express')
const dbConnect = require('./config/dbConnect')
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute')
const authRoute=require('./routes/authRoute')
const vendorRoute=require('./routes/vendorRoute')
const cors=require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const app=express()




app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials:true,
    allowedHeaders: ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send('checking route') 
})
app.use('/api/',userRoute)
app.use('/api/admin',adminRoute)
app.use('/api/auth',authRoute)
app.use('/api/vendor',vendorRoute)

app.listen(process.env.PORT,()=>{
    console.log('server running')
    dbConnect()
})
