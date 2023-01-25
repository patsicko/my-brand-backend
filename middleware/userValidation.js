import userValidationSchema from "../validation/userValidation";

const validateUser=(req,res,next)=>{
 
    const {error,value}=userValidationSchema.validate(req.body,{abortEarly:false});
    if(error){
       return res.status(400).json({
        "status":"error",
        "message":error.details[0].message,
       }) 
    }
  req.validatedUser=value;
  next();
}

export default validateUser