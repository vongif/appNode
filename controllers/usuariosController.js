const usuariosModel = require("../models/usuariosModel")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

module.exports={
    login:async function(req, res, next) {
      try{
        const user = await usuariosModel.findOne({email:req.body.email})
        if(!user){
          res.status(401).json({error:true,message:"Email incorrecto"})
          return
        }
        if(bcrypt.compareSync(req.body.password,user.password)){
          const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
          res.status(200).json({token})
        }else{
          res.status(401).json({error:true,message:"Password incorrecto"})
        }
      }catch(e){
        next(e)
      }
    },
    create:async function(req, res, next) {
        try{
          const document = new usuariosModel({
            name:req.body.name,
            email:req.body.email,
            password: req.body.password
          })

          const response = await document.save()

          res.status(201).json(response)
        }catch(e){
          //e.status=200
          next(e)
        }
        
    },
    
}