const statusCodes = require('../statusCodes.json');
const service = require('../../services/products');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const insert = await service.create({ name, quantity });

    if (insert.err) {
      return next({
        err: { message: insert.err.message, code: insert.err.code },
      });
    }

    return res.status(statusCodes.created).json(insert);
  } catch (e) {
    console.log(e);
  }
};