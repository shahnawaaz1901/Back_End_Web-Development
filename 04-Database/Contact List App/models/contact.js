// First Include Library of mongoose
const mongoose = require('mongoose');

/* 
Note : If You Add this File Below to Database File where we Already include mongoose Library
    then You don't need to include file again but we include which is not mandatory
*/

// New Key Word Every Time Create New Object So For Every Data we Create New Object
const contactSchema = new mongoose.Schema({
    name : {
        type : String,              // Type of Name Input
        require : true              // Validation Field
    },

    phone : {
        type : String,              // We Store Number as in String Form
        require : true,             // Validation
    }
})

// WhenEver You Create Model Use Capital Letter in First Word to Indicate
/* 
    mongoose.Model Set Model and After that first Argument is name of model
    and second argument is name of schema
*/
const Contact = mongoose.model('Contact',contactSchema);

// Export the Model
module.exports = Contact;