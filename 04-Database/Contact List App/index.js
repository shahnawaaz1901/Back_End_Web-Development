// Including Modules or Require Libraries
import express from "express";
import path from "path";
import ejs from "ejs";
import contactRouter from "./src/routers/contacts.routes.js";
import connectToDB from "./config/mongoose.js";
// Set Port
const port = 8000;

// Start the Server
const app = express();

// For Decode Encoded Form Data
// Use Function is Used to Set MiddleWare
app.use(express.urlencoded({ extended: true }));

// Set Path of Other Require Files Using MiddleWare
// This is Address of Files other then ejs like css, javaScript
app.use(express.static("asset"));

// Set EJS for View Engine
app.set("view engine", "ejs");
// Set Path Where our ejs File is Stored
app.set("views", path.join("src", "views"));

// Server Request URL
app.use("/", contactRouter);
// app.get("/", function (request, response) {
//   // Function Callback is Only Support Till Previous Version of MongoDB
//   Contact.find({}, function (error, contact) {
//     if (error) {
//       console.log("Error", error);
//       return;
//     }
//     return response.render("index", {
//       title: "Contact List App",
//       Contact: contact,
//     });
//   });
// });
// // Send Data to the Server and Render It On Browser
// app.post("/create-contact", function (request, response) {
//   // For Instead of Storing Contact into the Array Let's Directly Store into the Database

//   Contact.create(
//     {
//       // Create Object IntoDataBase
//       name: request.body.name, // Store Name as Schema which mention in Database
//       phone: request.body.phone, // Store Phone as Schema which mention in Database
//     },
//     function (error, newContact) {
//       if (error) {
//         console.log("Error", error);
//         return;
//       }
//       // Here NewContact is Created By DataBase So it Have 2 Extra Keys __id and versionKey
//       // id is the id which is given by database when object is created to store into database
//       // v is version key which records how many time you change in schema
//       console.log("******", newContact);
//       return response.redirect("back");
//     }
//   );
// });

// app.get("/delete-contact", function (request, response) {
//   // Getting Id Using Query
//   let id = request.query.id;
//   console.log(id);
//   Contact.findByIdAndDelete(id, function (err) { `
//     if (err) {
//       console.log("error in deleting the object");
//       return;
//     }
//     return response.redirect("back");
//   });
// });

app.use((req, res)=>{
  res.send("Please Go to Right ");
})

// Server Status
app.listen(port, function (error) {
  if (error) {
    console.log("Error", error);
    return;
  }
  console.log("Server is up And Run SuccessFully");
  connectToDB();
});
