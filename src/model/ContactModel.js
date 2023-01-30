import mongoose from "mongoose";

const ContactMessage=mongoose.Schema({

    names:{
        type:String,
        
    },
   
    email:{
        type:String,
        
    },
    message: {
        type:String,
        
    }

 
});

const Message=mongoose.model('Contact_message',ContactMessage);

export default Message;