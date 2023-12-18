import express from "express";
import ContactController from "../controllers/contacts.controller.js";

const contactRouter = express.Router();
const contactController = new ContactController();

contactRouter.get("/", contactController.get);
contactRouter.post("/", contactController.create);
contactRouter.get("/delete", contactController.delete);

export default contactRouter;
