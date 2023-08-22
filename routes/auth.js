const { login, register } = require('../controllers/auth')
const express = require('express')
const router = express.Router()



// router.route('/register').post(register)
// router.route('/login').post(login)

router.post('/login',login)
router.post('/register',register)

module.exports = router