const mongoose=require('mongoose')


const homePageData=async(req,res)=>{
    try {
        const data=[
            {
            "_id": 1,
            "title" : "Canon EOS Rebel T100",
            "description" : "Canon EOS Rebel T100 Digital SLR Camera with 18-55mm Lens Kit, 18 Megapixel Sensor, Wi-Fi, DIGIC4+, SanDisk 32GB Memory Card and Live View Shooting",
            "oldPrice" : 700.00,
            "price" : 559.99,
            "isNew" : true,
            "category" : "Electronics",
            "ratings" : 4.5,
            "image" : "https://i.ibb.co/1r28gMk/1.webp",
            "brand" : "Canon",
            } ,
            {
            "_id": 2,
            "title" : "DJI Air",
            "description" : "DJI Mini 2 Fly More Combo - Ultralight Foldable Drone, 3-Axis Gimbal with 4K Camera, 12MP Photos, 31 Min Flight Time",
            "oldPrice" : 1050.00,
            "price" : 999.00,
            "isNew" : true,
            "category" : "Electronics",
            "ratings" : 4.8,
            "image" :"https://i.ibb.co/qdfB3s6/2.webp",
            "brand" : "DJI",
            }]
            res.status(200).json({data})
             
    } catch (error) {
        console.log('home page error ',error)
    }
}

module.exports={
    homePageData
}