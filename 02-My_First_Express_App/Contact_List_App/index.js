/* Import Modules */
// For Using Express Functionalities You Need to import it Using Require Function
const express = require('express');

// For Using ejs Template Engine Functionalities You Need to import it Using Require Function
const ejs = require('ejs');

// We Dont Need to insall Path it will comes with node.js
const path = require('path');

/* Port */
// Port is Always Required 8000 is Default Port
const port = 8000;

/* Setting Up Functionalities */
// Calling Express Function it Will Creates Server For Us
// all functionalities of Express now store in our app Variable
const app = express();
// this statement set our view engine to ejs
app.set('view engine','ejs');

// this statement set inbuilt view path of express to our view path where we stores Files to render it on Browser
/* 
__dirname is inbuilt variable which is type of string and it's dynamic it will contains 
directory or address of Folder where we stores files to Render in the Browser
*/

// path.join function joins current path to a specific folder
app.set('views',path.join(__dirname,'views'))
/* 
Instead of Check URL in switch cases and after that find corresponding function for that 
switch case You Can Directly Write get and pass it two argument first is request URL
and second is corresponding that URL a callback function
*/

/* Total majorly 5 Type of Request is Exist */
// 1. Get :- For Reading File From Online or DataBase
// 2. POST :- For Add Something in DataBase
// 3. PUT :- For Add Some Specific Value of Object which is Already Stored
// 4. Patch :- For Update Some Object value which Object Already Stores in Database
// 5. Delete :- For Deleting Some Kind of Information from Databse

/* 
Except Get & Post You Need AJAX to do all Request Because Asynchronous Behaviour, 
You Can Not Place Request Synchronously  
*/

// This Callback also get two Argument First is request and second is response
// app.post('/',Callback Function)             // For Post 
// app.put('/',Callback Function)              // For Put Request
// app.patch('/',Callback Function)            // For patch Request
// app.delete('/',Callback Function)           // For Delete Request
app.get('/',(request, response)=>{             // For Get
    // render function helps to read index file and send data to browser and browser render data
    return response.render('index');
    
    /* 
    // console.log('Request URL', request);
    When You Observe reuqest which is sent by browser, then You Realize that browser sends 
    Every Possible Information Regarding to the User execpt personal and private information
    One is defaultEncoding : 'utf8'
    utf8 is default encoding method which comes with express.js another utf16 encoding method
    exist is also used for encoding but for now utf8 is used with express.js
    */
    /* 
    // Browser Request is Sent in this Form You Can UnderStand it's Host address browser details
    'Host',
    '127.0.0.1:8000',
    'Connection',
    'keep-alive',
    'Cache-Control',
    'max-age=0',
    'sec-ch-ua',
    '"Not/A)Brand";v="99", "Google Chrome";v="115", "Chromium";v="115"',
    'sec-ch-ua-mobile',
    '?0',
    'sec-ch-ua-platform',
    '"Windows"',
    'Upgrade-Insecure-Requests',
    '1',
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
    'Accept',
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Sec-Fetch-Site',
    'none',
    'Sec-Fetch-Mode',
    'navigate',
    'Sec-Fetch-User',
    '?1',
    'Sec-Fetch-Dest',
    'document',
    'Accept-Encoding',
    'gzip, deflate, br',
    'Accept-Language',
    'en-US,en;q=0.9,hi;q=0.8',
    'If-None-Match',
    'W/"13-nePw4Na2dK6/w5oFoyrlAIzebqI"'
    */






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