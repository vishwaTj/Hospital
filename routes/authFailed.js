const express = require('express');

const router = express.Router();

router.get('/',require('../controllers/authFailed').authFailed);
//route id auth fails

module.exports = router;