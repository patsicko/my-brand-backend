import userController from "../../controller/userController";
import express from "express";
import validateUser from "../../middleware/userValidation";
import verifyToken  from "../../middleware/authenticate";
import {isAdmin,findUserById} from "../../middleware/isAdmin";


const userRoute=express.Router();






userRoute.post("/createUser",validateUser,userController.createUser);

userRoute.get("/getUsers/",verifyToken,userController.getUsers);
userRoute.get("/getUser/:id",verifyToken,userController.getUser);
userRoute.get("/deleteUser/:id",userController.deleteUser);
userRoute.post("/login",userController.login);


export default userRoute;
