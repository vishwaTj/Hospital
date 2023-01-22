const express = require('express');
const router = express.Router();
const passport = require('passport');

const reportController = require('../controllers/reports_controller');

router.post('/:id/newReport', passport.authenticate('jwt',{ session: false}), reportController.create);

module.exports = router;