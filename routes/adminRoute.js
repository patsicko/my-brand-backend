import express from "express";
import validateUser from "../middleware/userValidation";
import verifyToken  from "../middleware/authenticate";
import adminController from "../controller/adminController";
import isAdmin from "../middleware/isAdmin";

const adminRoute=express.Router();

adminRoute.post("/createAdmin",validateUser,adminController.createAdmin);

export default adminRoute;