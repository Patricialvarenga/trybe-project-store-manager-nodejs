const create = require('./create');
const find = require('./find');

module.exports = (collection) => ({ 
    create: (entity) => create(collection, entity),
     find: (filter) => find(collection, filter),
});