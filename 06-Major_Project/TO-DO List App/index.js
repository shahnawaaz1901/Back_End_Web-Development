// SetUp Express
const express = require('express');
const port = 8000;
const app = express();

// Set View Engine
app.set('view engine','ejs');
app.set('views','./views');

// SetUp Controller For Home Page
app.get('/',function(request, response){
    return response.render('home',{
        title : "Contact List App",
    });
})

app.listen(port, function(error){
    if(error){
        console.log(`Error : ${error}`);
        return;
    }
    console.log(`Server is Up and Run Successfully on Port : ${port}`);
})