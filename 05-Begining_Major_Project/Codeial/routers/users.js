const express = require('express');
const router = express.Router();
// Import User Controller File
const userController = require('../controllers/users_controller');
const postController = require('../controllers/post_controller');

// Send Request to Controller
router.get('/profile',userController.profile);

// Send Request to Controller for Sign Up Form
router.use('/sign-up',userController.signUp);


// Send Request to Controller for Sign In Form
router.use('/sign-in',userController.signIn);

// Send Post Request to the Controller
router.post('/post',postController.post);
module.exports = router;
