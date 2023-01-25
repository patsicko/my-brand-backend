import blogValidationSchema from "../validation/blogValidation";

const validateBlog=(req,res,next)=>{

const {error,value}=blogValidationSchema.validate(req.body,{abortEarly:false});

if(error){
    return res.status(400).json({
        status:400,
        error:error.details[0].message
    })
}
req.validateBlog=value;
next();
}

export default validateBlog;