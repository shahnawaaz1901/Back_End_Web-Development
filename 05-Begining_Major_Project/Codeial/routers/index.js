const express = require('express');

// Import Home Controller
const homeController = require('../controllers/home_controller');

// For Managing Routes we Need to Use express's Route function
const router = express.Router();

// Set Home Controller For Default Route
router.get('/',homeController.home);

// Use Method is Use to Send Request to other Route File

// Set Users All Route to Users file
router.use('/users',require('./users'));                    // Transfer Route to users file

router.use('/contact-us', require('./contact'));            // Transfer Route to contact file


console.log('Inside the Route File');               // Verify the Route File
// Export Router so that our all file use router function
module.exports = router;