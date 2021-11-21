const { ObjectId } = require('mongodb');
const connection = require('../connection');

module.exports = async (collection, id) => {
  try {
    const productDeleted = await (await connection())
    .collection(collection).deleteOne({ _id: new ObjectId(id) });
    return productDeleted;
  } catch (e) {
    console.log(e);
  }
}; 
