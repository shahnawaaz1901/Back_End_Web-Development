/*
Query Params

Query params can be used to send multiple query parameters?

1. True                 // Correct, You Can send by Seprated query by &
2. False 

*/

/*
Multiple Query Params

If the query submitted to the server is
http://localhost:8001/delete-contact/?phone=123456789&name=Coding%20Ninjas

And this is the method delete-contact
app.get('/delete-contact/', function(req, res){
        console.log(req.query.phone);           
        console.log(req.query.name);
        return res.redirect('back');
}

What will get printed in the console?

1. 123456789 Coding Ninjas                              // Correct
2. 123456789 Coding%20Ninjas
3. 123456789 Undefined
4. phone: '12131321321' name: 'Coding Ninjas'
5. None of the Above

*/