const express = require('express')
const router = express.Router()

const studentController = require('../controller/studentController')

router.post('/',studentController.postStudent)
router.get('/:id',studentController.getStudentById)

module.exports = router