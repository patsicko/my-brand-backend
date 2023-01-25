
import Express  from "express";
import validateMessage from "../../middleware/messageValidation";
import verifyToken from "../../middleware/authenticate";
import {isAdmin,findUserById} from "../../middleware/isAdmin";


import ContactController from "../../controller/ContactController";
const ContactRoute=Express.Router();

ContactRoute.post("/createMessage",validateMessage,ContactController.createMessage);
ContactRoute.get("/getMessages/",verifyToken,findUserById,isAdmin,ContactController.getMessages);
ContactRoute.get("/getMessage/:id",verifyToken,findUserById,isAdmin,ContactController.getSingleMessage);
ContactRoute.get("/deleteMessage/:id",verifyToken,findUserById,isAdmin,ContactController.deleteMessage);

 export default ContactRoute
