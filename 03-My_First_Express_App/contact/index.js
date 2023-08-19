const http = require('http');                   // import http module
const path = require('path');                   // import path
const express = require('express');             // import express
const port = 8000;
const app = express();                          // Use App With express Function
app.set('view engine', 'ejs');                  // Set view engine to ejs
// First Argument is views means this views then second time in path there is folder views so both are diiferent
app.set('views', path.join(__dirname, 'views')) // Set View Engine Path

var contactList = [
    {
        name : "Shahnawaaz Ansari",
        phone : '+91-9119145616'
    },
    {
        name : "Zakir Hussain Ansari",
        phone : '+91-9929711739'
    },
    {
        name : "Toshiba Ansari",
        phone : '+91-7339900265'
    }
]


app.get('/',function(request, response){        // First Argument of get is Required url
    return response.render('contact',{contact : contactList});
})

app.get('/practice',function(request, response){
    return response.render('practice');
})

// Post Request, Because we Create Contact and Try to Save it
// Always when You Create a Handle Function for Post request.url is same in action(in HTML form tag) as mention in function
app.post('/create-contact',function(request, response){
    console.log(request);
    // a function get is required for handle this practice URL to render it On Browser at line 30
    // response.redirect('/practice');
    // return;
})

// WhatEver method we use get or post or any other kind express detect that method and value of that method is true if You Print the Request

app.listen(port,(error)=>{
    if(error){
        console.log('Error' , error);
        return;
    }
    console.log('Server is Up and Run Perfectly on Port :',port);
})