import User from "../model/userModel";

class userController {

    static async createUser(req, res) {
        try {
          const user = new User({
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            password:req.body.password
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


    static async getUsers(req,res) {
        try {
       const users=await User.find();
       res.status(200).json(users)
        }catch (error){
            res.status(404).json(error.message);
        }
    }

   static async getUser(req,res) {
    try {
      const user=await User.findOne({title:req.params.id});
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
        const user=await User.findOneAndDelete({title:req.params.id});
        res.status(200).json({
            "status":"success", "message":"user deleted"})
    }catch (error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        })
    }
}
}
export default userController;