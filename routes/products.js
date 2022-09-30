const express = require('express');
const router = express.Router();

/* GET users listing. */
const productosControllers = require("../controllers/productosControllers")

/* GET users listing. */
router.get('/', productosControllers.getAll);
router.get('/:id', productosControllers.getById);
router.post('/',productosControllers.create);
router.put('/:id',productosControllers.update);
router.delete('/:id',productosControllers.delete);
module.exports = router;
