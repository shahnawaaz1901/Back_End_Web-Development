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

/* 
    When you learn a New Programming Language Some Data Type has been pre defined
    Similarly Some Data Type MongoDb is Used to Store Data in Database
*/

/* 
    DataType of Schema
1. String                   // Like General String Class
2. Number                   // Stores Any Kind Number 
3. Date                     // Use For Record When Data is Entered or Update
4. Buffer                   // Use For divide small parts of a single huge links
5. Boolean                  // it's True or False
6. Mixed                
7. ObjectId
8. Array                    // Collection of Hetrogenous Data
9. Decimal 128
10. Map
11. UUID

*/