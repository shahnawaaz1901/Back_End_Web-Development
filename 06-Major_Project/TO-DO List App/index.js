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





let output = [{
    checkbox : "",
    task : "My Name is Shahnawaaz Ansari",
    date : "June 19, 2020",
    work : "Personal",
}]

// SetUp Controller For Home Page
app.get('/',function(request, response){
    return response.render('home',{
        title : "Contact List App",
        todo : output,
    });
})

app.post('/create-todo',function(request, response){
    console.log(request.body);
    // let newTodo = {
    //     task : request.body.task,
    //     date : "June 19, 2020",
    //     work : "Personal",
    // }
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