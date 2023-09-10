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

module.exports.create = async function(req, res) {
    try {
        if (req.body.password != req.body.confirm_password) {
            return res.redirect('back');
        }

        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user.Email != req.body.Email) {
            user = await User.create(req.body);
            return res.redirect('/user/sign-in');
        } else {
            console.log('Inside Else');
            return res.redirect('back');
        }
    } catch (error) {
        console.log('Error:', error);
        return res.status(500).send('Internal Server Error');
    }
}

/*module.exports.create = function(request, response){
    // TODO Later
    console.log(request.body);
    if(request.body.Password != request.body.ConfirmPassword){
        return response.redirect('back');
    }
    User.findOne({email : request.body.email})
}
module.exports.createSession = function(request, response){
    // TODO Later
}

*/