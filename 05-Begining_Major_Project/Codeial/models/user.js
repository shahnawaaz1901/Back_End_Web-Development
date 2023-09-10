const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Email : {
        type : String,
        unique : true,
        require : true,
    },
    Password:{
        type : String,
        require:true,
    },
    Name:{
        type : String,
        require:true
    },
},{
    timestamps : true,
});
const User = mongoose.model('User',userSchema);
module.exports = User;