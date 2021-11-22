const statusCodes = require('../statusCodes.json');
const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const saleDeleted = await service.remove(id);
  if (saleDeleted.err) {
    return next({
      err: { code: saleDeleted.err.code, message: saleDeleted.err.message },
      status: statusCodes.unprocessableEntity,
    });
  }
  res.status(statusCodes.ok).json(saleDeleted);
};