const router = require('express').Router();
const controller = require('./../controllers');

router.post('/', controller.items.post);
router.get('/:id', controller.items.get);
router.get('/', controller.items.get_all);
router.patch('/id', controller.items.patch);
router.delete('/:id', controller.items.delete);

module.exports = router;
