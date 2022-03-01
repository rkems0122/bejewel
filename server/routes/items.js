const router = require('express').Router();
const controller = require('./../controllers');

router.post('', controller.items.post);
router.get('/', controller.items.get);
router.patch('', controller.items.patch);
router.delete('', controller.items.delete);

module.exports = router;
