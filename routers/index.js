const router = require('express').Router();
const routerCart = require('./router-cart');
const routerProduct = require('./router-product');

router.get('/', (req, res) => {
  res.send('Welcome');
});

router.use('/product', routerProduct);
router.use('/cart', routerCart);

module.exports = router;
