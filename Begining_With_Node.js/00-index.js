/* Since Node.Js is RunTime Environment Over JavaScript So that All Program Saves With .js Extension */

console.log('Hello World !');

function add(a, b){
    return a + b;
}

// Node.Js Works On VAT Engine VAT engine Written in C++ Language
console.log(add);                                   // Print Function
console.log(add());                                 // Print NaN Because You Not Pass Any Argument so value of and b is undefined and sum of two undefined is NaN(Not a Number)
console.log(add(2, 4));                             // Print 6
