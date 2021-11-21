const connection = require('../connection');

module.exports = async (collection) => {
  try {
    const allProducts = await (await connection()).collection(collection).find().toArray();
    return allProducts;
  } catch (e) {
    console.log(e);
  }
};