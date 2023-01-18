import messageSchema from "../validation/messageValidation";

const validateMessage=(req,res,next)=>{
const { error,value } = messageSchema.validate(req.body,{abortEarly:false});
if(error){
    return res.status(400).json({
            status:400,
            error:error.details[0].message
        })
}

req.validatedData=value;
next();
}

export default validateMessage;