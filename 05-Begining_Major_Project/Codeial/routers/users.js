const express = require('express');
const router = express.Router();
// Import User Controller File
const userController = require('../controllers/users_controller');

// Send Request to Controller
router.get('/profile',userController.profile);
module.exports = router;
