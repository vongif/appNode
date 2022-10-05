const mongoose = require("../config/mongodb")
const errorMessage = require("../utils/errorMessage")

const productosSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        minLength:3,
        uppercase:true
    },
    price:{
        type:Number,
        min:0,
        get: function(value){
            return value * 1.21
        },
        // set: function(value){
        //     return value * 1.21
        // }
    },
    status:{
        type:String,
        enum:["creado","baja","sin_stock"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"categories"
    },
    description:String,
    quantity:Number,
    created_by:{
        type:mongoose.Schema.ObjectId,
        ref:"usuarios"
    },
})
productosSchema.set("toJSON",{getters:true,setters:true})
module.exports = mongoose.model("productos",productosSchema)