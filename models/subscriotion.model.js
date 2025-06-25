import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,'User name is required'],
    },
    price:{
        type:Number,
        required: [true,'User please you have to pay'],
         min:[0,'Price must be greater than your okaat']
    },
    currency:{
        type:String,
        enum:['INR','USD','EUR'],
        default:'INR',
    },
    frequency:{
        type:String,
        enum:['daily','weekly','monthly','yearly'],
    }
})