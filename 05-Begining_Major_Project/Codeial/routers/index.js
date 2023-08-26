const express = require('express');
// Import Home Controller
const homeController = require('../controllers/home');
// For Managing Routes we Need to Use express's Route function
const router = express.Router();
// Set Home Controller For Default Route
router.get('/',homeController.home)
console.log('Inside the Route File');               // Verify the Route File
// Export Router so that our all file use router function
module.exports = router;