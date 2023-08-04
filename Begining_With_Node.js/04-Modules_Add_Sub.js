// For Export Functions Into Another File You Need to Write Functions in function Expression
// Function Expression is Not Enough, You Need to Write KeyWord Module.exports Before variable name
// You Need to write module.exports at the function expression is created
/*

You Can Not DO this :-

const add = (a,b)=> return a + b;
module.exports.add

*/

module.exports.substract = (a, b)=>{
    return a - b;
}

module.exports.add = (a, b)=>{
    return a + b;
}