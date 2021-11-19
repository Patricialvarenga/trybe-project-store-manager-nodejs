const statusCodes = require('../controllers/statusCodes.json');

// Essa parte foi retirada do respositório do Leonardo Ferreira
// https://github.com/tryber/sd-012-store-manager/pull/19
function setStatus(code) {
  switch (code) {
    case 'invalid_data':
      return statusCodes.unprocessableEntity;
    case 'stock_problem':
       return statusCodes.notFound;
    case 'not_found':
      return statusCodes.notFound;
    default:
      break;
  }
}

module.exports = (error, _req, res, _next) => {
  // Caso o erro possua uma propriedade `status`, devolvemos esse status, juntamente com a mensagem do erro
  const { err, message, status } = error;
  const stat = setStatus(err.code);

  if (err) {
    return res.status(stat).json({ err });
  }

  return res.status(status).json({ message });
};