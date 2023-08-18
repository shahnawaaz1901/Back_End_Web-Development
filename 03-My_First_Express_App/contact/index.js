const http = require('http');                   // import http module
const path = require('path');                   // import path
const express = require('express');             // import express
const port = 8000;
const app = express();                          // Use App With express Function
app.set('view engine', 'ejs');                  // Set view engine to ejs
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

app.listen(port,(error)=>{
    if(error){
        console.log('Error' , error);
        return;
    }
    console.log('Server is Up and Run Perfectly on Port :',port);
})