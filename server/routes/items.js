const router = require('express').Router();
const controller = require('./../controllers');

router.post('/', controller.items.post);
router.get('/:id', controller.items.get);
router.get('/', controller.items.get_all);
router.get('/:id/detailed', controller.items.get_detailed);
router.put('/:id', controller.items.put);
router.put('/:id/detailed', controller.items.put_detailed);
router.delete('/:id', controller.items.delete);

module.exports = router;
