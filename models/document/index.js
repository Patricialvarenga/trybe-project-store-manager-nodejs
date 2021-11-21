const create = require('./create');
const find = require('./find');
const list = require('./list');
const update = require('./update');

module.exports = (collection) => ({ 
    create: (entity) => create(collection, entity),
     find: (filter) => find(collection, filter),
     list: () => list(collection),
     update: (entity) => update(collection, entity),
});