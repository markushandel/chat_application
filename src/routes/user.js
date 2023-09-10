// user.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// User registration route
router.post('/register', UserController.registerUser);

// User login route
router.post('/login', UserController.loginUser);

module.exports = router;
