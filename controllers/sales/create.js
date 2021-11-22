const statusCodes = require('../statusCodes.json');
const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  try {
    const sale = req.body;
    const insert = await service.create(sale);

    if (!sale) {
      return next({
        err: { code: 'invalid_data' },
      });
    }

    if (insert.err) {
      return next({
        err: { message: insert.err.message, code: insert.err.code },
      });
    }
    return res.status(statusCodes.ok).json(insert);
  } catch (e) {
    console.log(e);
  }
};