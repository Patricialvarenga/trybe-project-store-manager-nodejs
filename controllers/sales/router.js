const express = require('express');

const router = express.Router({ mergeParams: true });

router.post('/', require('./create'));
router.get('/:id', require('./get'));
router.get('/', require('./list'));

module.exports = router;