/*
Requested Url

How to get the requested URL, if req is the request variable.

1. req.url()
2. req.url                                      // Correct, Because url is Not a Function
3. req.get(url);
4. req.get(url());

*/

/*
Installing Nodemon

Which command will install nodemon globally?

1. node install nodemon
2. node install -g nodemon
3. npm install -g nodemon                       // Correct
4. npm install nodemon

Solution Description
nodemon is a tool that helps develop node js based applications by automatically 
restarting the node application when file changes in the directory are detected.
*/

/*
Multiple Pages

The code below is used to select the file to display according to the requested URL .-
Suppose you have assigned port number: 8000)

switch(request.url) {
case '/home':
    filePath = './index.html';
    break;
case '/profile':
    filePath = './profile.html';
    break;
default: 
    filePath = './404.html';
}

What will happen if the URL -‘127.0.0.1: 8000' gets hit?

1. 'index.html' file gets displayed on the browser
2. 'profile.html' file gets displayed in the browser
3. '404.html' file gets displayed in the browser
4. the code will not work, so nothing is displayed in the browser
*/