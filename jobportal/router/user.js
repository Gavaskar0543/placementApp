const express = require('express');
const router = express.Router();
const userControl = require('../controller/userpage');
router.get('/signup',userControl.signup);

//User
module.exports = router;