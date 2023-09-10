
module.exports.home = function(request, response){
    // return response.end('<h1>Server is FireUp and Run Through Express</h1>');
    // Access Cookie which is Sent By Browser
    // console.log(request.cookies);
    // WhenEver Page is refreshed this Console Statement fire Because conroller is called


    // response.cookie('name','ashu ansari');          // Send Cookie to the Browser
    // response.cookie({
    //     name : "Ashu Ansari",
    //     token : "01fdf2d3045%60!",
    //     create : true,
    // });
    return response.render('home',{
        title : "CodeIal | Home"
    });
}