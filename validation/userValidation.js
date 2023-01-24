import Joi from "joi";

const userValidationSchema=Joi.object({
    fname:Joi.string().required(),
    lname:Joi.string().required(),
    email:Joi.string().email({minDomainSegments:2}).required(),
    password:Joi.string().min(6).required()
})

export default userValidationSchema;