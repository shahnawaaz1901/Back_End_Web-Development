import ContactModel from "../models/contacts.model.js";

export default class ContactController {
  async create(req, res) {
    const newContact = new ContactModel({
      name: req.body.name,
      phone: req.body.phone,
    });
    await newContact.save();
    res.redirect("back");
  }

  async get(req, res) {
    const contacts = await ContactModel.find();
    res.render("index", {
      title: "Contact List App",
      Contact: contacts,
    });
  }

  async delete(req, res) {
    const { id } = req.query;
    await ContactModel.findByIdAndDelete(id);
    res.redirect("back");
  }
}
