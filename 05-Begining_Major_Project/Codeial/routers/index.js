const express = require('express');
// For Managing Routes we Need to Use express's Route function
const router = express.Router();
console.log('Inside the Route File');               // Verify the Route File
// Export Router so that our all file use router function
module.exports = router;