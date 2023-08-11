/*
Node Package

Which command will be used to set up a new or existing package?

1. node init
2. node create
3. npm init                     // Correct
4. npm create

*/

/*
Package.json

package.json contains the metadata and project dependencies of Node project?

1. True                         // Correct, Because package.json Contains Whole Information which is Provide By Us When Create New Server
2. False

*/

/*
Multiple Node Servers

We can run multiple Node.js servers on a single machine.

1. True                         // Correct, But on Different Port One Port Only Run One Server At a Time
2. False
*/

/*
Instance of HTTP Module

Which of the following will create an instance of HTTP module in Node.js file?

1. var http = require("http");          // Correct, this Statement Imports http Module in this File
2. var http = new require("http");
3. var http = new server();
4. none of the above
*/

/*
Node Server

Which among these will run our server on port 3000.

1.  const http = require('http');                                   // Correct, All Syntax is Correct In this Statement
    const port = 3000; 
    const server = http.createServer(); 
    server.listen(port, function(err){ 
        console.log("Server is up and running on port:", port);
    });
2.  const http = require('http'); 
    const port = 3000; 
    const server = http.newServer(); 
    server.listen(port, function(err){ 
        console.log("Server is up and running on port:", port);
    });
3.  const http = require('http'); 
    const port = 3000; 
    const server = http.createServer(); 
    server.start(port, function(err){ 
        console.log("Server is up and running on port:", port);
    });
4.  const http = require('http'); 
    const port = 3000; 
    const server = createServer(); 
    server.listen(port, function(err){ 
        console.log("Server is up and running on port:", port); 
    });
*/