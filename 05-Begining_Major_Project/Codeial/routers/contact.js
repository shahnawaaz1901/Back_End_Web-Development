const express = require('express');
const router = express.Router();
const contactControllerNumber = require('../controllers/contact_controller_Num');
const contactControllerEmail = require('../controllers/contact_controller_Email'); 
// When You Directly Called Controller Use get Method
// When You Transfer Route to Other Route File then use Method is Used
router.get('/number',contactControllerNumber.contact);
router.get('/email',contactControllerEmail.contact);

module.exports = router;