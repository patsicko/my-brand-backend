
import Express  from "express";
import validateMessage from "../middleware/messageValidation";


import ContactController from "../controller/ContactController";
const ContactRoute=Express.Router();

ContactRoute.post("/createMessage",validateMessage,ContactController.createMessage);
ContactRoute.get("/getMessages/",ContactController.getMessages);
ContactRoute.get("/getSingleMessage/:id",ContactController.getSingleMessage);
ContactRoute.get("/deleteMessage/:id",ContactController.deleteMessage);

 export default ContactRoute
