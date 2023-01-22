const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patients_controller');
const passport = require('passport');

router.post('/register', passport.authenticate('jwt', {session:false}), patientController.createReport);
router.get('/:id/all_reports',passport.authenticate('jwt',{session:false}), patientController.allReports);

module.exports = router;