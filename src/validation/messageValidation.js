import Joi from "joi";

const messageSchema= Joi.object({
   names:Joi.string().min(4).required(),
   email:Joi.string().email({minDomainSegments:2}).required(),
   message:Joi.string().min(10).required()

})

export default messageSchema;