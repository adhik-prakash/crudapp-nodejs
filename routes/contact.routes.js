const express = require('express')

const router = express.Router()

const contactController = require('../controller/contactController')
// const { testFunction } = require('../controller/testController')

router.post('/contact',contactController.userContact)
router.get('/allcontacts',contactController.getAllContact)



module.exports = router