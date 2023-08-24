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
const { default: mongoose } = require('mongoose');


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

// let contacts = [];

// Server Request URL
app.get('/',async function(request, response){
    /*Contact.find({},function(error, contact){
        if(error){
            console.log('Error While Fetching Data into Database');
            return;
        }

        return response.render('index',{
            title :"Contact List App",
            Contact : contact
        })
    })*/
    const doc = await Contact.find({});
    return response.render('index',{
        title :"Contact List App",
        Contact : doc,
    });
    
})
// Send Data to the Server and Render It On Browser
app.post('/create-contact', async function(request, response){
    // For Instead of Storing Contact into the Array Let's Directly Store into the Database
    /*contacts.push(request.body);*/
    // Another Method to Create
    const contact = new Contact({
        name : request.body.name,
        phone :request.body.phone,
    })
    /*
    await contact.save();
    */
    await Contact.create({                                       // Create Object IntoDataBase
        name : contact.name,                               // Store Name as Schema which mention in Database
        phone : contact.phone,                             // Store Phone as Schema which mention in Database
    })
    return response.redirect('back');
})

app.get('/delete-contact',async function(request, response){
    let id = request.query.id;
    Contact.findByIdAndDelete(id);
    try{
        Contact.orders.deleteOne({"id":__id});
    }catch(error){
       console.log('Error',error);
    }
    /*
    let index = contacts.findIndex((contact)=>contact.phone == phone);
    contacts.splice(index, 1);
    */
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
