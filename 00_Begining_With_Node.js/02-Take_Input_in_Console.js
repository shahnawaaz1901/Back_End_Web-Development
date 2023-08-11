// console.log(process.argv);
/* process.argv is responsible to take input in console in JavaScript */
/* You Need to gives Input Before Run the file Along with node filename.js  */
/* Eg :-
    FileName is index.js
    Run on Terminal :- node index.js 1 2
*/

/* 
First Two Argument of process.argv is Fixed  :-
(process.argv is return array of strings where first two string is):-
1. Location of Node Installed, Where Node is Running
2. Location of Current File Which You Want to Run

Remaining Argument You Passed Before Run Along With Run Command
*/
function add(a, b){
    return a + b;
}

var arg = process.argv.slice(2);                    // Slice Function is Used To Skip first two location String
var a = parseInt(arg[0])                            // Convert Input String into the Number Integer
var b = parseInt(arg[1])                            // Convert Input String into the Number Integer

// If We Pass Give 1 and 2 as input along with Run Command then it Prints 3
console.log("Adding The Numbers : ",add(a, b));

