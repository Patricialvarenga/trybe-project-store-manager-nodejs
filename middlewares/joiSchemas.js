const joi = require('@hapi/joi');

// Definimos qual o schema da nossa requisição
const createProductSchema = joi.object().keys({
  name: joi.string().min(5).required(),
  quantity: joi.number().min(1).required(),
});

 module.exports = {
   createProductSchema,
 };