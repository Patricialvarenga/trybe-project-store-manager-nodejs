const statusCodes = require('../statusCodes.json');
const service = require('../../services/sales');

module.exports = async (req, res, next) => {
  const { id } = req.params;
   const productSaleFound = await service.get(id);

   if (!id) {
     return next({ err: { code: 'not_found' }, status: statusCodes.notFound });
   }

   if (productSaleFound.err) {
     return next({
       err: {
         code: productSaleFound.err.code,
         message: productSaleFound.err.message,
       },
       status: statusCodes.notFound,
     });
   }

   res.status(statusCodes.ok).json(productSaleFound);
};