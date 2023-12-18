import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const ContactModel = mongoose.model("Contacts", contactSchema);

export default ContactModel;
