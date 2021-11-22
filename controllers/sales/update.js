const statusCodes = require('../statusCodes.json');
const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const sale = req.body;

  const saleUpdate = await service.update(id, sale);

  if (!id || !sale) {
    return next({
      err: { code: 'invalid_data' },
      status: statusCodes.unprocessableEntity,
    });
  }

  if (saleUpdate.err) {
    return next({ 
      err: { code: saleUpdate.err.code, message: saleUpdate.err.message },
      status: statusCodes.unprocessableEntity, 
    });
    }
  res.status(statusCodes.ok).json(saleUpdate);
};