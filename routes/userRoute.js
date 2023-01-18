import userController from "../controller/userController";
import express from "express";
import validateUser from "../middleware/userValidation";

const userRoute=express.Router();

userRoute.post("/createUser",validateUser,userController.createUser);
userRoute.get("/getUsers/",userController.getUsers);
userRoute.get("/getUser/:id",userController.getUser);
userRoute.get("/deleteUser/:id",userController.deleteUser);

export default userRoute;