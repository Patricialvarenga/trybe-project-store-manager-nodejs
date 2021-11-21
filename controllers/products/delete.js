const statusCodes = require('../statusCodes.json');
const service = require('../../services/products');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const productDeleted = await service.remove(id);
  if (productDeleted.err) {
    return next({
      err: { code: productDeleted.err.code, message: productDeleted.err.message },
      status: statusCodes.unprocessableEntity,
    });
  }
  res.status(statusCodes.ok).json(productDeleted);
};