const router = require('express').Router();
const { controllerProduct } = require('../controllers');

router.get('/', controllerProduct.getAllProducts);

module.exports = router;
