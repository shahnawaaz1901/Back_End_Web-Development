// For Using Express Functionalities You Need to import it Using Require Function
const express = require('express');

// Port is Always Required 8000 is Default Port
const port = 8000;

// Calling Express Function it Will Creates Server For Us
// all functionalities of Express now store in our app Variable
const app = express();

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