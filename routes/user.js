var express = require('express');
var router = express.Router();

const {login} = require('../controller/users')

router.post('/login', login)

module.exports = router