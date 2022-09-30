const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("query",req.query) //buscador con ?
  res.json('registro usuarios')
 });


 router.post('/',(req, res, next)=>{
  console.log("body", req.body, req.body.name)
   res.json(req.body)
})
router.put('/:id',(req, res, next)=>{
  console.log("body", req.body, req.body.name)
  console.log("params", req.params, req.params.id)
  res.json(req.body)
})  
router.delete('/:id',(req, res, next)=>{
  console.log("params", req.params, req.params.id)
  
})
module.exports = router;
