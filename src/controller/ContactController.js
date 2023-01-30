import Message from "../model/ContactModel";

class ContactController {

    static async createMessage(req, res) {
        try {
          const message = new Message({
            names:req.body.names,
            email:req.body.email,
            message:req.body.message,
          });
          await message.save();
          res.status(201).json({
            "status":"success",
            "post":message
          });
          console.log("message created");
        } catch (error) {
          res.status(401).json({
            "status":"error",
            "message":error.message
          });
        }
      }
      
    static async getMessages(req,res) {
      try {
     const messages=await Message.find();
     res.status(200).json({
      status:"success",
      data:{
        "posts":messages
      }
    })
      }catch (error){
          res.status(404).json({
            "status":"error",
            "message":error.message
          });
      }
  }


  static async getSingleMessage(req,res) {
    try {
   const message=await Message.findOne(req.param.id);

   res.status(200).json({
    "status":"success",
    "data":{
      "post":message
    }
   })
    }catch (error){
        res.status(404).json({
          "status":"error",
          "message":error.message
        });
    }
}


  static async deleteMessage(req,res){
    try{
     
      await Message.findByIdAndDelete(req.params.id);
        res.status(204).json({
          "status":"success",
          "message":"message deleted"
        })
      
      
    }catch(error){
      res.status(404).json({
        "status":"error",
        "message":error.message
      })
    }
  }


}




export default ContactController;

