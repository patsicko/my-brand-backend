import userController from "../../controller/userController";
import express from "express";
import validateUser from "../../middleware/userValidation";
import verifyToken  from "../../middleware/authenticate";


const userRoute=express.Router();


/**
 * @swagger
 * /createUser:
 *   post:
 *     tags:
 *       - USER APIs
 *     summary: Create a new user
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/users'
 *     responses:
 *       200:
 *         description: User Created
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schema/responses'
 *       400:
 *         description: bad request
 *       405:
 *         description: Method not allowed
 */



userRoute.post("/createUser",validateUser,userController.createUser);

userRoute.get("/getUsers/",verifyToken,userController.getUsers);
userRoute.get("/getUser/:id",userController.getUser);
userRoute.get("/deleteUser/:id",verifyToken,userController.deleteUser);
userRoute.post("/login",userController.login);


export default userRoute;
