const express = require('express');
const router = express.Router();

const doctorController  = require('../controllers/doctors_controller');

router.post('/register',doctorController.create);
router.post('/login',doctorController.createSession);

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NkNDk0ZTlkNDIxMmVjZTk3MjkzY2EiLCJuYW1lIjoidml2ZWsiLCJlbWFpbCI6InZpdmVrQGhvc3BpdGFsQVBJLmNvbSIsInBhc3N3b3JkIjoiMTIzIiwiY3JlYXRlZEF0IjoiMjAyMy0wMS0yMlQxNDozMzo1MC42ODJaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yMlQxNDozMzo1MC42ODJaIiwiX192IjowLCJpYXQiOjE2NzQzOTgyMDYsImV4cCI6MTY3NDQwMDIwNn0.Jd19YLiIfj2Ns4ndZYv9M67pXgQn1YTXsjqOJwXoavs
// 7550269