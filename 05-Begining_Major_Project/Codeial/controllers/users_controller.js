// Render User Profile Page
module.exports.profile = function(request, response){
    return response.render('users_profile',{
        title : "Profile | Codeial",
    });
}


// Render User SignUp Page
module.exports.signUp = function(request, response){
    return response.render('user_sign_up',{
        title : "Sign in | Codeial",
    });
}

// Render User SignIn Page
module.exports.signIn = function(request, response){
    return response.render('user_sign_in',{
        title : "Sign In | Codeial",
    });
}
