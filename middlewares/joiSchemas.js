const joi = require('@hapi/joi');
const { ObjectId } = require('mongodb');

// Definimos qual o schema da nossa requisição
const createProductSchema = joi.object().keys({
  name: joi.string().min(5).required(),
  quantity: joi.number().min(1).required(),
});

// Para definir a parte do productId ser igual ao Id consultei o repositório: https://github.com/tryber/sd-012-store-manager/pull/19/commits
const createSaleSchema = joi.array().min(1).items(
  joi.object().keys({
    productId: joi.string().custom((value, helper) => {
      if (!ObjectId.isValid(value)) {
        return helper.message('Wrong product ID or invalid quantity');
      }
      return value;
    }),
    quantity: joi.number().min(1).required(),
  }),
);

 module.exports = {
   createProductSchema,
   createSaleSchema,
 };