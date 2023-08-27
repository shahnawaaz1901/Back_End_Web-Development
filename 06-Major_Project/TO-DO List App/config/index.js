const mongoose = require('mongoose');

main().catch((error)=>{
    console.log(`Error : ${error}`);
    return;
})

main().then(()=>{
    console.log('Successfully Connect to the Database');
})

async function main(){
    await mongoose.connect('mongodb://localhost/to-do');
}