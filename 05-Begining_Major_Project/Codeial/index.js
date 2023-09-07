/* 
    For A Big Scale Project We Need to Seprate EveryThing to Understand and Much More
    Readable Code. For This We Devide Our Controllers Routers models asset views in 
    Different Folders. We Control All Folder and Things From index.js and Keep Control
    Over All the Files.
*/

// SetUp Express Server
const express = require('express');
const app = express();

//Setup Database
const db = require('./config/mongoose');

// Setting Up Static Files
app.use(express.static('./asset'));



// Import Express Layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

// Set Route file in MiddleWare
app.use('/',require('./routers/index'));

// SetUp View Engine(Use Set Function to SetUp ,Use function used to setup as middleware)
app.set('view engine','ejs');
app.set('views','./views');


// For Extract Css and Script tag from body and Put it where we want to put in Layouts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// We Use Port 8000 But in Real Life or in Production Port 80 is Used
const port = 8000;

app.listen(port, function(error){
    if(error){
        // console.log('Error : ', error);      Instead of Using this Use backTicks to write Variable in String
        /* Using a Variable in String (Using Backticks) is Called InterPollation */
        console.log(`Error While Firing Up the Server : ${error}`);       //Backticks Just left Near from 1 Number in Keyboard 
        return;
    }
    console.log(`Server is Running on port : ${port}`);
})

/* 
    EveryTime We Run Our file using nodemon index.js we Replace Using some changes in
    package-lock.json where we store nodemon index.js as value command in start key
    and after that we only need to write npm start to start our Server. We Can give
    any name of the key but here we write start.
*/

/* 
    For Ignoring Some Files on Upload to Github You Need to Create .gitignore file 
    and put folders which you would't want to upload or push
*/

/* 
    WhenEver We Import Same Library in Two Files which is InterConnected Via 
    Something then second file not import the library second file uses instance of
    first file library which is import first.
*/