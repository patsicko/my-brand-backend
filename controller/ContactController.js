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
          res.status(201).json(message);
          console.log("message created");
        } catch (error) {
          res.status(401).json(error.message);
        }
      }



    static async getMessages(req,res) {
      try {
     const messages=await Message.find();
     res.status(200).json(messages)
      }catch (error){
          res.status(404).json(error.message);
      }
  }


  static async getSingleMessage(req,res) {
    try {
   const message=await Message.findById(req.param.id);
   res.status(200).json(message)
    }catch (error){
        res.status(404).json(error.message);
    }
}


  static async deleteMessage(req,res){
    try{
     
      await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({
          message:"message deleted"
        })
      
      
    }catch(error){
      res.status(404).json(error.message)
    }
  }


}


export default ContactController;