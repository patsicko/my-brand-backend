import Express  from "express";
import cors from "cors";
import dotenv from 'dotenv';
import dbConnect from "./database/db";
import mongoose from "mongoose";
import Router from "./routes/routes";
import  {serve,setup} from "swagger-ui-express";
import swaggerDocumentations from "./documentations";


import swaggerDoc from "swagger-ui-express";


mongoose.set('strictQuery',true)


const app=Express();

app.use(cors({origin:'*',methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']}));

app.use(Express.json());

dotenv.config();

const port=process.env.PORT ? process.env.PORT:5001;

app.listen(port,()=>{
    console.log(`app is listening on port : ${port}`)
})

dbConnect();
// app.use('/api-docs', serve, setup(swaggerSpecs));
app.use("/",Router)

app.use("/documentations" ,swaggerDoc.serve)
app.use("/documentations" ,swaggerDoc.setup(swaggerDocumentations))


export default app
