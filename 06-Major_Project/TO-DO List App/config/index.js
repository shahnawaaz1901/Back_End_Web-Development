const mongoose = require('mongoose');

main().then(()=>{
    console.log('Successfully Connect to the Database');
})

main().catch((error)=>{
    console.log(`Error : ${error}`);
    return;
})    


async function main(){
    await mongoose.connect('mongodb://localhost/to-do');
}