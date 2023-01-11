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


}


export default ContactController;