const statusCodes = require('../statusCodes.json');
const service = require('../../services/products');

module.exports = async (req, res, next) => {
  const { id } = req.params;
   const productFound = await service.get(id);

   if (productFound.err) {
     return next({
       err: {
         code: productFound.err.code,
         message: productFound.err.message,
       },
       status: statusCodes.unprocessableEntity,
     });
   }

   res.status(statusCodes.ok).json(productFound);
};