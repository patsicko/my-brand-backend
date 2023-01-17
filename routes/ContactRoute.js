import express from "express";

import ContactController from "../controller/ContactController";
const ContactRoute=express.Router();

ContactRoute.post("/createMessage",ContactController.createMessage);
ContactRoute.get("/getMessages/",ContactController.getMessages);
ContactRoute.get("/getSingleMessage/:id",ContactController.getSingleMessage);
ContactRoute.get("/deleteMessage/:id",ContactController.deleteMessage);

 export default ContactRoute
