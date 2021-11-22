const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/', require('./create'));
router.get('/:id', require('./get'));
router.get('/', require('./list'));
router.put('/:id', require('./update'));
router.delete('/:id', require('./delete'));

module.exports = router;