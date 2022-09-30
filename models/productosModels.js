const mongoose = require("../config/mongodb")

const productosSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
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
    description:String,
    quantity:Number
})
productosSchema.set("toJSON",{getters:true,setters:true})
module.exports = mongoose.model("productos",productosSchema)