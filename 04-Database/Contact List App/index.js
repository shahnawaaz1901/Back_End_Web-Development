// Including Modules or Require Libraries
const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
// Set Port
const port = 8000;

// Include Database File
const db = require('./config/mongoose,.js');

// Include Models or Schema
const Contact = require('./models/contact.js');


// Start the Server
const app = express();

// For Decode Encoded Form Data
// Use Function is Used to Set MiddleWare
app.use(express.urlencoded());


// Set Path of Other Require Files Using MiddleWare
// This is Address of Files other then ejs like css, javaScript
app.use(express.static('asset'));

// Set EJS for View Engine
app.set('view engine','ejs');

// Set Path Where our ejs File is Stored
app.set('views',path.join(__dirname,'views'));

let contacts = [];

// Server Request URL
app.get('/',function(request, response){
    return response.render('index',{
        title :"Contact List App",
        Contact : contacts,
    });
})
// Send Data to the Server and Render It On Browser
app.post('/create-contact',function(request, response){
    contacts.push(request.body);
    response.redirect('/');
})

app.get('/delete-contact',function(request, response){
    let phone = request.query.phone;
    let index = contacts.findIndex((contact)=>contact.phone == phone);
    contacts.splice(index, 1);
    response.redirect('/');
})

// Server Status
app.listen(port, function(error){
    if(error){
        console.log('Error', error);
        return;
    }
    console.log('Server is up And Run SuccessFully');
})
