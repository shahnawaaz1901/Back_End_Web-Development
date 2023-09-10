// Import Schema
const User = require('../models/user');
const { use } = require('../routers');

// Render User Profile Page
module.exports.profile = function(request, response){
    return response.render('user_profile',{
        title : "Profile | Codeial",
    });
}


// Render User SignUp Page
module.exports.signUp = function(request, response){
    return response.render('user_sign_up',{
        title : "Sign Up | Codeial",
    });
}

// Render User SignIn Page
module.exports.signIn = function(request, response){
    return response.render('user_sign_in',{
        title : "Sign In | Codeial",
    });
}

module.exports.create = function(request, response){
    // TODO Later
    console.log(request.body);
    if(request.body.Password != request.body.ConfirmPassword){
        return response.redirect('back');
    }
    User.findOne({email : request.body.email},function(error, user){
        if(error){
            console.log('Error While Finding User', error);
            return;
        }
        if(!user){
            User.create(request.body, function(error, user){
                if(error){
                    console.log('Error while Sign Up');
                    return response.redirect('back');
                }
                console.log(user);
            });
        }else{
            return response.redirect('back');
        }
    })
}

module.exports.createSession = function(request, response){
    // TODO Later
}
