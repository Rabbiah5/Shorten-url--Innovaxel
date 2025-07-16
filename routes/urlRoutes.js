const express = require('express');
const router = express.Router();
const controller = require('../controllers/urlController');

router.post('/', controller.createShortURL);
router.get('/:code', controller.getOriginalURL);
router.put('/:code', controller.updateURL);
router.delete('/:code', controller.deleteURL);
router.get('/stats/:code', controller.getStats);

module.exports = router;