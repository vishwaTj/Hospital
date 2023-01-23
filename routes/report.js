const express = require('express');

const passport = require('passport');

const router = express.Router();

const ReportsController = require('../controllers/Reports_controller');


// route to fetch status specific reports
router.get('/:status', passport.authenticate('jwt', { session: false, failureRedirect: '/authFailed'}), ReportsController.statusVise);

module.exports = router;