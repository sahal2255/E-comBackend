const mongoose=require('mongoose')

const dbConnect=async()=>{
    try {
        console.log('connecting.....')
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connection Success `)
    } catch (error) {
        console.log(`Error in db connection ${error.message}`)
        process.exit(1)
    }
}

module.exports=dbConnect