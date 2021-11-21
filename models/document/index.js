const create = require('./create');
const find = require('./find');
const list = require('./list');

module.exports = (collection) => ({ 
    create: (entity) => create(collection, entity),
     find: (filter) => find(collection, filter),
     list: () => list(collection),
});