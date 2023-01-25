import User from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


class adminController {


    static async createAdmin(req, res) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
          try {
            const user = new User({
              fname:req.body.fname,
              lname:req.body.lname,
              email:req.body.email,
              password:hashedPassword,
              role:"admin"
            });
            await user.save();
            res.status(201).json({
              "status":"success",
              "post":user
  
            });
            console.log("user created");
          } catch (error) {
            res.status(401).json({
              "status":"error",
              "message":error.message
            });
          }
        }
}

export default adminController;