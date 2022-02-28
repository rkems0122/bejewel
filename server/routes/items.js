const router = require('express').Router()
const controller = require('./../controllers')

router.get('/', controller.items.get)

module.exports = router