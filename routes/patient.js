const express = require('express');

const router = express.Router();

const passport = require('passport');

const PatientController = require('../controllers/Patient_controller');

const ReportContorller = require('../controllers/Reports_controller');

// register a patient
router.post('/register', passport.authenticate('jwt', { session: false, failureRedirect: '/authfailed' }),PatientController.patientRegister);


// register a new patient
router.post('/:id/create_report',passport.authenticate('jwt',{session : false,failureRedirect : '/authFailed'}),ReportContorller.createReport);


//fetch all reports of a patient
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false, failureRedirect: '/authFailed'}),ReportContorller.allReports);



module.exports=router;