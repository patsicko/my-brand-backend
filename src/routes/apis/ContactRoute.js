
import Express  from "express";
import validateMessage from "../../middleware/messageValidation";
import verifyToken from "../../middleware/authenticate";
import {isAdmin,findUserById} from "../../middleware/isAdmin";


import ContactController from "../../controller/ContactController";
const ContactRouter=Express.Router();

ContactRouter.post("/createMessage",validateMessage,ContactController.createMessage);
ContactRouter.get("/getMessages/",verifyToken,ContactController.getMessages);
ContactRouter.get("/getMessage/:id",verifyToken,ContactController.getSingleMessage);
ContactRouter.get("/deleteMessage/:id",verifyToken,ContactController.deleteMessage);

 export default ContactRouter
