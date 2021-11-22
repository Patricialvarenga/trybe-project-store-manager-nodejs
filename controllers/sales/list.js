const statusCodes = require('../statusCodes.json');
const service = require('../../services/sales');

module.exports = async (_req, res, _next) => {
  const sales = await service.list();

  res.status(statusCodes.ok).json({ sales });
};