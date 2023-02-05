import User from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


class userController {

    static async createUser(req, res) {
      const salt = await bcrypt.genSalt(10);
     
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
        try {
          const user = new User({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:hashedPassword
          });
          await user.save();
          res.status(201).json({
            "status":"success",
            "post":user

          });
          console.log("user created");
        } catch (error) {
          res.status(400).json({
            "status":"error",
            "message":error.message
          });
        }
      }


    static async getUsers(req,res) {
        try {
       const users=await User.find();
       res.status(200).json({
        "status":"success",
        "data":users
       })
        }catch (error){
            res.status(404).json({
              "status":"error",
              "message":error.message
            });
        }
    }

   static async getUser(req,res) {
    try {
      const user=await User.findOne({id:req.params.id});
      res.status(200).json({
        "status":
        "success",
        "data":user
      })
    }catch (error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        });
   }

}

static async deleteUser(req,res) {

    try{
        const user=await User.findOneAndDelete({id:req.params.id});
        res.status(204).json({
            "status":"success", "message":"user deleted"})
    }catch (error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        })
    }
}

static async login(req,res){
  try {
    const user=await User.findOne({email:req.body.email});
  
    if(!user){
      res.status(404).json(
        {
          "status":"error",
          "message":"user not found"
        }
      );
    }

    const isMatch=await bcrypt.compare(req.body.password,user.password);
    if(!isMatch){
      res.status(404).json({
        "status":"error",
        "message":"password is incorrect"
      });
    }
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"2h"});
    console.log(token);
    res.status(200).json({
      "status":"success",data:user,token:token})
  } catch (error) {
    res.status(401).json({status:"error",message:error.message})
  }
}
}
export default userController;