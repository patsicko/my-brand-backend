import express from "express";

import ContactController from "../controller/ContactController";
const ContactRoute=express.Router();

ContactRoute.post("/createMessage",ContactController.createMessage);


 export default ContactRoute
