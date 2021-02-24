const router = require('express').Router();
const {
  getAllcarts,
  postCart,
  getCartById,
  updateCartById,
  deleteCartById,
} = require('../controllers').controllerCart;
const { auth } = require('../middlewares/index');

router.use(auth);
router.get('/', getAllcarts);
router.post('/', postCart);
router.get('/:id', getCartById);
router.patch('/:id', updateCartById);
router.delete('/:id', deleteCartById);

module.exports = router;
