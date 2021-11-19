const statusCodes = require('../statusCodes.json');

module.exports = (_req, res, _next) => {
  res.status(statusCodes.notImplemented).end();
};