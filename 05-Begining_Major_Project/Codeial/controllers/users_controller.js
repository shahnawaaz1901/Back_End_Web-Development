module.exports.profile = function(request, response){
    return response.render('users',{
        title : "Profile | Codeial",
    });
}