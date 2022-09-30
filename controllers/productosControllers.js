const productosModels = require("../models/productosModels")

module.exports={
    getAll: async function(req, res, next) {
        console.log("query",req.query)
        try{
            const productos = await productosModels.find()
            res.json(productos);
        }catch(e){
            console.log(e)
        }
        
    },
    getById: async function(req, res, next) {
        console.log("param",req.params,req.params.id)
        try{
            const producto = await productosModels.findById(req.params.id)
            res.json(producto);
        }catch(e){
            console.log(e)
        }
    },
    create: async (req, res, next)=>{
        console.log("body",req.body,req.body.name)
        try{
            const producto = new productosModels({
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                quantity:req.body.quantity
            })
            const document = await producto.save()
            res.json(document)
        }catch(e){
            console.log(e)
        }
    },
    update: async (req, res, next)=>{
        console.log("param",req.params,req.params.id)
        console.log("body",req.body,req.body.name)
        try{
            const document = await productosModels.updateOne({_id:req.params.id},req.body)
            res.json(document)
        }catch(e){
            console.log(e)
        }
    },
    delete: async (req, res, next)=>{
        console.log("param",req.params,req.params.id)
        try{
            const document = await productosModels.deleteOne({_id:req.params.id})
            res.json(document)
        }catch(e){
            console.log(e)
        }
    }
}