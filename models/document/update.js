const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, entity) => {
  try {
    const { id, ...entityWithoutId } = entity;

    const productUpdate = await (await connection()).collection(collection).updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...entityWithoutId } },
    );
    return productUpdate;
  } catch (e) {
    console.log(e);
  }
};
