const express = require('express');
const router = express.Router();
const homecontrol = require('../controller/Homepage');
router.get('/',homecontrol.home);

//User
router.use('/user',require('./user'));
module.exports = router;