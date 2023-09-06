const mongoose = require('mongoose');

mongoose.connect = ('mongodb://localhost/to-do');
//mongoose.connect("mongodb://localhost:27017/codeial", { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;

// const mongoose = require('mongoose');

// main().then(()=>{
//     console.log('Successfully Connect to the Database');
// })

// main().catch((error)=>{
//     console.log(`Error : ${error}`);
//     return;
// })    


// async function main(){
//     await mongoose.connect('mongodb://localhost/to-do');
// }