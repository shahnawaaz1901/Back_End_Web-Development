/*
Status Code

Which HTTP status code signifies the client does not have access rights to the content, 
the server is refusing to give the requested resource. You can visit the following link 

for exploring different HTTP Status codes.
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


Output is : 403

Explanation : 
400 : Bad Request
The server cannot or will not process the request due to something that is perceived 
to be a client error (e.g., malformed request syntax, invalid request message framing, 
or deceptive request routing).

401 : Unauthorized
Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". 
That is, the client must authenticate itself to get the requested response.

402 : Payment Required Experimental
This response code is reserved for future use. The initial aim for creating this code was 
using it for digital payment systems, however this status code is used very rarely and 
no standard convention exists.

403 : Forbidden
The client does not have access rights to the content; that is, it is unauthorized, 
so the server is refusing to give the requested resource. Unlike 401 Unauthorized, 
the client's identity is known to the server.

404 : Not Found
The server cannot find the requested resource. In the browser, this means the URL is not recognized. 
In an API, this can also mean that the endpoint is valid but the resource itself does not exist. 
Servers may also send this response instead of 403 Forbidden to hide the existence of a resource 
from an unauthorized client. This response code is probably the most well known due to its frequent
occurrence on the web.

405 : Method Not Allowed
The request method is known by the server but is not supported by the target resource. 
For example, an API may not allow calling DELETE to remove a resource.

406 : Not Acceptable
This response is sent when the web server, after performing server-driven content negotiation, 
doesn't find any content that conforms to the criteria given by the user agent.

407 : Proxy Authentication Required
This is similar to 401 Unauthorized but authentication is needed to be done by a proxy.

408 : Request Timeout
This response is sent on an idle connection by some servers, even without any previous request 
by the client. It means that the server would like to shut down this unused connection. 
This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, 
use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely 
shut down the connection without sending this message.

409 : Conflict
This response is sent when a request conflicts with the current state of the server.

410 : Gone
This response is sent when the requested content has been permanently deleted from server, 
with no forwarding address. Clients are expected to remove their caches and links to the resource. 
The HTTP specification intends this status code to be used for "limited-time, promotional services". 
APIs should not feel compelled to indicate resources that have been deleted with this status code.

*/

/*
Status code 200

Which of these sends a Response HTTP Status Code 200 to the browser?

1. res.sendHeader(200, {'content-type': 'text/html'});
2. res.write(200, {'content-type': 'text/html'});
3. res.writeHead(200, {'content-type': 'text/html'});               // Correct
4. res.writeHeader(200, {'content-type': 'text/html'});

Solution Description
res.writeHead(200, {'content-type': 'text/html'});
Sends a response header in the form of a status code along with the exact header message. 
Here 200 is a status code and content-type: 'text/html'  we usually give two options text and HTML, 
a standard browser protocol defined. Also, some browsers might not be rendering everything, 
so either renders as text and recognises this.

*/

/*
File Specific Operations

Which of the following modules can be used for file specific operations?

1. path
2. fs                                       // Correct
3. http
4. None of the above

*/

/*
Reading a File

If a file named 'file.txt' exists and an error occurred while reading 
a file using the code below-

fs.readFile('./file.txt', (err, data)=>{
if(err) {
    console.log("Inside gets printed.");
}
console.log("Outside gets printed.");
});

What will be the output shown in the terminal/console?

1. Inside gets printed.
2. Outside gets printed.
3. Inside gets printed. Outside gets printed.               // Correct, Because it inters in if condition and Not Returned From there
4. error occurs and gets printed on the console

*/

/*
appendFile Function

What is true about 'appendFile' function of 'fs' module?
You can visit the File System documentation for exploring 
various methods in the File System module.
https://nodejs.org/api/fs.html

1. It overwrites the data already stored in the file
2. Creating the file if it does not yet exist                               // Correct
3. Copies data from a source file and appends that data to a destination file
4. None of the above

*/

/*
readFile Function in 'fs' Module

What is the first parameter of the callback function inside the 'readFile' function of 'fs' module?

1. Data of the file
2. Error                        // Correct, First Argument Take Error Second Argument Take Data
3. Any of the two
4. None of them

*/
