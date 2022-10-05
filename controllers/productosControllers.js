const productosModels = require("../models/productosModels")

module.exports={
    getAll: async function(req, res, next) {
        console.log("query",req.query)
        try{
            const productos = await productosModels.find().populate("category")
            // const productos = await productosModel.find({destacado:true}).populate("category")
            res.json(productos);
        }catch(e){
            res.json(e)
        }
        
    },
    getById: async function(req, res, next) {
        console.log("param",req.params,req.params.id)
        try{
            const producto = await productosModels.findById(req.params.id)
            res.json(producto);
        }catch(e){
            console.log(e.message)
        }
    },
    create: async (req, res, next)=>{
        console.log("body",req.body,req.body.name)
        try{
            const producto = new productosModels({
                name:req.body.name,
                price:req.body.price,
                description:req.body.description,
                quantity:req.body.quantity,
                category:req.body.category,
                created_by: req.body.userId 
            })
            const document = await producto.save()
            res.status(201).json(document)
        }catch(e){
            // res.status(400).json(e.message)
            e.status = 400
            next(e)
        }
    },
    update: async (req, res, next)=>{
        console.log("param",req.params,req.params.id)
        console.log("body",req.body,req.body.name)
        try{
            const document = await productosModels.updateOne({_id:req.params.id},req.body)
            res.json(document)
        }catch(e){
            res.json(e)
        }
    },
    delete: async (req, res, next)=>{
        console.log("param",req.params,req.params.id)
        try{
            const document = await productosModels.deleteOne({_id:req.params.id})
            res.json(document)
        }catch(e){
            res.json(e)
        }
    }
}