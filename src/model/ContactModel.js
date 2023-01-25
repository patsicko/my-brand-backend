import mongoose from "mongoose";

const ContactMessage=mongoose.Schema({

    names:{
        type:String,
        required:true
    },
   
    email:{
        type:String,
        required:true,
        
    },
    message: {
        type:String,
        required:true
    }

 
});

const Message=mongoose.model('Contact_message',ContactMessage);

export default Message;