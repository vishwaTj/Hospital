const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/homecontroller');

router.get('/',HomeController.home);

//handle all doctors functionalities
router.use('/doctors',require('./doctor'));

//handle patients functionalities
router.use('/patients', require('./patient'));

//handle reports functionalities
router.use('/report',require('./report'));

module.exports = router;