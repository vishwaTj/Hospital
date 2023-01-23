const express = require('express');

const router = express.Router();

const DoctorContoller = require('../controllers/Doctor_controller');

// router to register a doctor
router.post('/register',DoctorContoller.registerDoctor);

// router for docotr login
router.post('/login',DoctorContoller.login);

module.exports=router;