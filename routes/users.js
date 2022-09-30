var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('usuarios');
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
