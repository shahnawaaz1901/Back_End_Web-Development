// Import Library
const mongoose = require('mongoose');

// This Promise Use in New Version of MongoDB
main().catch(err => console.log('Error',err));
main().then(()=>console.log('Successfully Connect to the Database'));
async function main() {
  // first is mongodb server second is our ip local host or 127.0.0.1 which is run on default 
  // mongo db sever and last is database naming
  await mongoose.connect('mongodb://127.0.0.1/contact_list_db');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


/*  Old Version method to Connect Database
// connect to the mongodb server
mongoose.connect('mongodb://localhost/contact_list_db');

// Enstablish the Connection
const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error While Connecting to DataBase'));

db.once('open',function(){
  console.log('Connection is Successfull')
})
*/