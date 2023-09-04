// SetUp Express
const express = require('express');
const port = 8000;
const ejs = require('ejs');
// const db = require('./config/index');


// Firing Up Server
const app = express();

// For Static CSS and JavaScript File
app.use(express.static('./assets'));

// For Decode the Data Received By the User
app.use(express.urlencoded());

// Set View Engine
app.set('view engine','ejs');
app.set('views','./views');





let output = [];

// SetUp Controller For Home Page
app.get('/',function(request, response){
    return response.render('home',{
        title : "Contact List",
        todo : output,
    });
})

app.post('/create-todo',function(request, response){
    let task = request.body;
    console.log(task);
    let newTodo = {
        mark : false,
        description : task.description,
        category : task.category,
        date : task.date,
    }
    output.push(newTodo);
    return response.redirect('/');
})

app.get('/delete-todo',function(request, response){
    console.log(request);
    return response.redirect('/');
})


app.listen(port, function(error){
    if(error){
        console.log(`Error : ${error}`);
        return;
    }
    console.log(`Server is Up and Run Successfully on Port : ${port}`);
})