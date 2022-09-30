const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/database",function(error){
    if(error){
        throw error
    }else{
        console.log("Conectado con Mongo Db")
    }
})

module.exports = mongoose