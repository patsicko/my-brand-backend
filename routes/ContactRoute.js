
import Express  from "express";
import validateMessage from "../middleware/messageValidation";
import verifyToken from "../middleware/authenticate";


import ContactController from "../controller/ContactController";
const ContactRoute=Express.Router();

ContactRoute.post("/createMessage",validateMessage,ContactController.createMessage);
ContactRoute.get("/getMessages/",verifyToken,ContactController.getMessages);
ContactRoute.get("/getMessage/:id",verifyToken,ContactController.getSingleMessage);
ContactRoute.get("/deleteMessage/:id",verifyToken,ContactController.deleteMessage);

 export default ContactRoute
