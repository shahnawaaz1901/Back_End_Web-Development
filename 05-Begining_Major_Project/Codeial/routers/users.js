const express = require('express');
const router = express.Router();
// Import User Controller File
const userController = require('../controllers/users_controller');
const postController = require('../controllers/post_controller');

// Send Request to Controller
router.get('/profile',userController.profile);

router.post('/post',postController.post);
module.exports = router;
