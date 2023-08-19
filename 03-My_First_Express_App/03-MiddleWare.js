/* 
MiddleWare :- When Ever we Write express().use with using
.use it will Create a middle ware and when whatEver middleware function
we pass it's used for complete work of Middleware
*/

/* 
Middle have Access to read request and as well as response after that it will send 
that request to the route which is required and in callback direct request which is
raise by the browser not gone request which is raise by browser is go into middleware
and after that middleware send request to the route with body object where form data
is Present as key and value pairs.
Only One middleware is Use for One Work
*/

/* 
Own Middle Ware Creation is Possible . No limitations of 
Number of MiddleWares you Can Create as Many as MiddleWares
*/

/*
Tasks of Middleware

Which among these are the task that a middleware function can perform?

1. Execute any code.
2. Make changes to the request and the response objects.
3. End the request-response cycle.
4. Call the next middleware function in the stack.
5. All of the Above                                     // Correct
*/

/*
Using Middlewares

What will get printed in the console if http://localhost:8000/ is visited 
and these are the middlewares defined in index.js?

app.use(function(req, res, next){
 console.log('middleware 1 called');
 });

app.use(function(req, res, next){    
     console.log('middleware 2 called');
     next();
});

app.use(function(req, res, next){    
     console.log('middleware 3 called');
     next();
});

1. middleware 1 called          //Correct, Because next function is not called after middleware 1
2. middleware 1 called middleware 2 called
3. middleware 1 called middleware 2 called middleware 3 called
4. None of the Above

Solution Description : Before the controller, all the middlewares get executed in 
                    chronological order. So first middleware-1 is called. But since we 
                    haven’t called the next() function in it, the next middleware doesn’t 
                    get triggered. That is why only “middleware 1 is called” is printed.

*/