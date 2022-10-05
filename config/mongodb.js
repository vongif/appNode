const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")
const environment = require("./environments")
console.log("environment",environment)
mongoose.connect(`mongodb://${environment.dbHost}/${environment.dbName}`,function(error){
    if(error){
        throw error
    }else{
        console.log("Conectado con Mongo Db")
    }
})
mongoosePaginate.paginate.options={
    limit:10
}
mongoose.mongoosePaginate=mongoosePaginate
module.exports = mongoose