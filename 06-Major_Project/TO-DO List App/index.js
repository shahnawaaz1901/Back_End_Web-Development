// SetUp Express
const express = require('express');
const port = 8000;
const app = express();

// Set View Engine
app.set('view engine','ejs');
app.set('views','./views');

app.get('/',function(request, response){
    return response.end('<h1>Hello Baby</h1>')
})

app.listen(port, function(error){
    if(error){
        console.log(`Error : ${error}`);
        return;
    }
    console.log(`Server is Up and Run Successfully on Port : ${port}`);
})