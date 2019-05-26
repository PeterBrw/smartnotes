const express = require('express');

const controller = require('../controllers/notes.js');

const router = express.Router();

router.get('/', controller.getHome)

router.get('/notes', controller.getNotes)

router.get('/login', controller.getLogin);

router.get('/login-err', controller.getLoginErr);

router.get('/signup', controller.getSignup);

router.get('/signup-err', controller.getSignupErr);

module.exports = router;