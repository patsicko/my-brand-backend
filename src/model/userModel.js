import mongoose from "mongoose";



/**
*  @swagger
*  components:
*   schema:
*      users:
*          type: object
*          properties:
*             fname:
*                 type: string
*                 default: MANIBAHO
*                 required: true    
*             lname:
*                 type: string
*                 default: Patrick
*                 required: true
*      
*              email:
*                 type: string
*                 default: patsicko@gmail.com
*                 required: true
*              password:
*                 type: string
*                 default: 123456
*                 required: true
*   responses:
*         type: object
*         properties:
*             _id:
*                 type: objectId
*                 default: 63d0f230b574bacc35c56c70
*             fname:
*                 type: string
*                 default: MANIBAHO
*             lname:
*                 type: string
*                 default: Patrick
*             email:
*                 type: string
*                 default: patsicko@gmail.com
*             password:
*                 type: string
*                 default: $2b$10$cZVTLBCXsOxYNyxWIoCCGOcmt2APiJBl4kevA5PpQ5V/2l3SV3JHC
*             role:
*                 type: string
*                 default: user
*             createdAt: 
*                  type: string
*                  default: 2023-01-25T09:17:28.283Z
*             updatedAt: 
*                  type: string
*                  default: 2023-01-25T09:17:28.283Z
*             __v:
*                  type: number
*                  default: 0
*/



const userSchema=mongoose.Schema({
    fname:{
        type:String,
       
    },
    lname:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    password: {
        type:String,
        
    },
   
    role:{
        type:String,
        default:"user"
    },  
 
},
{timestamps:true});

const User=mongoose.model('User',userSchema);

export default User;