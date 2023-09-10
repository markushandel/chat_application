const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessageController');

// Create a new message
router.post('/x', MessageController.createMessage);

// Retrieve messages for a user
router.get('/', MessageController.getMessages);


module.exports = router;
