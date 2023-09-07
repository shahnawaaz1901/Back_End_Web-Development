/*      Latest Version
const mongoose = require('mongoose');

main().catch((error)=>{
    console.log('Error While Connecting to the Database');
})

main().then(()=>{
    console.log('Successfully Connected to the Database :: MongoDB');
})

async function main(){
    await mongoose.connect('mongodb://localhost/codeial_development');
}*/
// Version 5.4.6
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error While Connecting To DataBase'));
db.once('open',function(){
    console.log('SuccessFully Connected to the Database :: MongoDB')
});

module.exports = db;

