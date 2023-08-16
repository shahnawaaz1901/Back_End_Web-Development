// For Using Express Functionalities You Need to import it Using Require Function
const express = require('express');

// Port is Always Required 8000 is Default Port
const port = 8000;

// Calling Express Function it Will Creates Server For Us
// all functionalities of Express now store in our app Variable
const app = express();

/* 
Instead of Check URL in switch cases and after that find corresponding function for that 
switch case You Can Directly Write get and pass it two argument first is request URL
and second is corresponding that URL a callback function

*/
// This Callback also get two Argument First is request and second is response
app.get('/',(request, response)=>{
    console.log('Request URL', request.url);
    // response.send('Hello Baby');
    /* 
    Using Express.Js it is Easy to Send Response to the Request Because we don't Need to 
    write writeHead function to specify text/html content express will automatically Detect
    What Response we want to send. 
    */

    /* 
    For Returning an HTML Element You Can Directly Return withOut telling HTML content
    to the browser express will do this for you by detecting automatically
    */
   response.send('<h1>Hello Baby</h1>');
   /*
   this Statement using express.Js Tells Automatically to Browser hey this is an HTML 
   element and browser will Render it according to that
   */
});




// listen function takes two Argument one is Port and Another is Callback
// listen callback takes error as first Argument
app.listen(port, (error)=>{
    if(error){
        console.log("Something Went Wrong ", error);
        return;
    }
    console.log("My First Express Server Run Perfectly On Port : ", port);
});

/*
We Didn't Return something as Respond but Using Express if Developer Not Return anything as 
Response then express is Automatically Returned 'Can Not Get and Url'.URL is Request which we Try 
to Access, if we only write local host and port after that then it will shows to us slash(/), 
slash means home page
*/