const express = require('express');

const router = express.Router();

router.use('/authFailed',require('./authFailed'));

//route doctor funtionalities
router.use('/doctor',require('./doctor'));

//router to patient functionalities
router.use('/patient',require('./patient'));

//router to report functionalities
router.use('/report',require('./report'));

module.exports=router;
