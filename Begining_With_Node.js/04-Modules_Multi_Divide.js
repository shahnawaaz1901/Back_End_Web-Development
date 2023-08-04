// For Export Functions You Need to Write functions in function expression
// For Exports the Both function You Need to Write Module.exports. variable name
// You Need to Write module.exports before variable name at the function expression is created

/*
const multiply = (a, b) => return a * b;
module.exports.multiply

*/
module.exports.multiply  = (a, b)=>{
    return a * b;
}

module.exports.divide = (a, b)=>{
    return a/b;
}
