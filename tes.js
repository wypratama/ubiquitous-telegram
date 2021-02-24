const test = new Map();
const product = {
  id: 1,
  name: 'tas',
  price: 100000,
  quantity: 10,
};
test.set('sapi', 'tes');
test.set(product.id, product);
test.set(product.id, 'aaaa');

const getByid = test.get(1);
// console.log(getByid);
console.log([...test]);

// const tes = new Set([1, 2, 3, 4]);
// console.log(tes);
