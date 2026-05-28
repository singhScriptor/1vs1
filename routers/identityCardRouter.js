const express = require('express')
const router = express.Router()

const identityCardController = require('../controller/indentityCardController')

router.post('/',identityCardController.postIdCard)
router.get('/:id',identityCardController.getIdCardByStudnetId)

module.exports = router