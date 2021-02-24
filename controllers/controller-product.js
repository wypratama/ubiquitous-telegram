const productsData = require('../data/products');

module.exports = {
  async getAllProducts(req, res) {
    try {
      const products = [...productsData.values()];
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
};
