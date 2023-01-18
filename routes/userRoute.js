import userController from "../controller/userController";
import express from "express";

const userRoute=express.Router();

userRoute.post("/createUser",userController.createUser);
userRoute.get("/allUsers/:id",userController.getUsers);

export default userRoute;