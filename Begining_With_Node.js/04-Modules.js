/* Modules :- Modules is a Library or Set of ReUsable Functions  */
/*
Eg.:- 
Let's Assume You Build A Calculator Program Which Have 4 function Add, Substract, Multiply and Divide.
And Now You Create Another File Where You Required a Single Arithmetic Function(Let's Assume Add), 
You Can Use Calculator Add Function In Your File ,This is Called Module.
Use Another File Function into Files is Called Modules.

*/

/* 
For Using Module We Need to Import the File Which Function We Want To Use and Similarly We Also Need to 
Export That File Which Function We Want to Use 
*/

/* For Example With this File We Create Two Files 04-Modules_Add_Sub.js and 04-Modules_Multi_Divide.js */

// Import Both Files
const operation1 = require('./04-Modules_Add_Sub.js');
const operation2 = require('./04-Modules_Multi_Divide.js')

// For Imports require Keyword is Used
// For Use Inport Functions First You Need to Write Variable Name Where You Store the File
console.log(operation1.add(3,4));
console.log(operation1.substract(3,4));
console.log(operation2.multiply(3,4));
console.log(operation2.divide(3,4));

