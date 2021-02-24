const cartsData = require('../data/carts');
const productsData = require('../data/products');

module.exports = {
  async getAllcarts(req, res) {
    try {
      const carts = [...cartsData.values()];
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async postCart(req, res) {
    try {
      const { productId, quantity, price } = req.body;

      const id = cartsData.size + 1;
      const checkIfExist = {
        id: null,
        data: null,
      };
      for await ([cartId, data] of cartsData.entries()) {
        if (data.productId === productId) {
          checkIfExist.id = cartId;
          checkIfExist.data = data;
        }
      }
      if (checkIfExist.id) {
        const product = await productsData.get(+productId);
        if (+checkIfExist.data.quantity + +quantity > +product.quantity) {
          throw new Error(`quantity can't be bigger than stock`);
        }
        cartsData.set(checkIfExist.id, {
          ...checkIfExist.data,
          quantity: +checkIfExist.data.quantity + +quantity,
        });
        res.status(200).json('cart updated');
      } else {
        console.log(cartsData.size + 1);
        cartsData.set(id, { id, productId, quantity, price });
        res.status(200).json('cart created');
      }
    } catch (err) {
      console.log(err);
      res.status(400).json({ error: err });
    }
  },

  async getCartById(req, res) {
    try {
      const cart = await cartsData.get(+req.params.id);
      res.status(200).json({ cart });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  async updateCartById(req, res) {
    try {
      const { quantity } = req.body;
      const cart = await cartsData.get(+req.params.id);
      await cartsData.set(+req.params.id, {
        ...cart,
        quantity: quantity,
      });
      res.status(200).json('data successfully updated');
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },

  async deleteCartById(req, res) {
    try {
      await cartsData.delete(+req.params.id);
      res.status(200).json('successfully deleted');
    } catch (err) {
      res.status(400).json({ error: err });
    }
  },
};
