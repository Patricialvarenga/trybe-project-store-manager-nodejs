const statusCodes = require('../statusCodes.json');
const service = require('../../services/products');

module.exports = async (_req, res, _next) => {
  const allProducts = await service.list();

  res.status(statusCodes.ok).json(allProducts);
};