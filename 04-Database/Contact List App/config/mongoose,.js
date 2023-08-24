// Import Library
const mongoose = require('mongoose');


main().catch(err => console.log('Error',err));
main().then(()=>console.log('Successfully Connect to the Database'));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
/*


mongoose.connect('mongodb://localhost:8000/contact_list_db');
// Connect to the Database
const db = mongoose.connection;

// In Any Kind of Error Situation
db.on('error',console.error.bind(console, 'Error While Connecting to Database'));

// When Connection is Successful
db.once('open',function(){
    console.log('Successfully Connected to the Database');
})
*/