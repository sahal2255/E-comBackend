const mongoose=require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    images: [{ type: String }], 
    brand: { type: String },
    variants: [
        {
            price: { type: Number, required: true },
            weight: { type: String, required: true },
            stock: { type: Number, required: true, default: 0 },
            sku: { type: String, unique: true } 
        }
    ], 
    isAvailable: { type: Boolean, default: true },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


const Product=mongoose.model('Product',productSchema)
module.exports=Product