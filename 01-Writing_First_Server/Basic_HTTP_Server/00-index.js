
/* Why We Write Name index, Because First Page of Any WebSite or WebPage is Known as index .
It Shows That User is Currently At HomePage of that WebPage */

/*
Include http Module Because is is Written for Node.Js which Provides Us Different Functionalities
to Run a Program through the Web 
*/

/*
With HTTP Module You Enter URL localhost along with port and After that localhost sends request to this 
file and files Return Some Logic Which is Written in that Server
*/

const http = require('node:http');           // For Accessing http Module First Import That Module into this file
/*
WhenEver Your System Sends Request it Sends Request directly to Port 8000 which is Default
A single Port Work a Single Work. It's Not Like USB Ports which our System Own.
Any Peice of Software Running on System Running on Specific Port.
Port is Logical Term.
WhenEver Services is Running on the System it's Define Uniquely By Port.
One Port Can Run only One Software at One Time
*/
const port = 8000;                      // Port is a Perticular Area of that Server it Means in Which Perticular hardware Server is Loaded, 8000 is a Unique Key Number of that Perticular Hardware
// Create Server
const server = http.createServer();

// Server Listen is Called via Port and an Function which is Responsible for Any Kind of \
// Error Occurs and Tells Us Server Work Fine or Not
server.listen(port, function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log("Server is Up And Running On Port : ", port);
})


// In a Computer localhost is server which is similar to 127.0.0.1 which is an Ip and Hard to remember
// Along with localhost and Ip write port Number after colon

// If We Run Our Server Right Now then it's Load Continuesly Because we Did'nt return anything 
// after server is Run Successfully