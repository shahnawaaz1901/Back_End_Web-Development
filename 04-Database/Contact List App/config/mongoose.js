// Import Library
import mongoose from "mongoose";
const connectToDB = () => {
  mongoose
    .connect(
      "mongodb+srv://shahnawaaz1901:A5FFC976%40ybl@cluster0.eedd7pm.mongodb.net/contact_list_db"
    )
    .then(() => {
      console.log("Successfully Connected to Database");
    })
    .catch((err) => {
      console.log("Error while Connecting with Database");
    });
};

export default connectToDB;
