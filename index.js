import Express  from "express";
import cors from "cors";
import dotenv from 'dotenv';
import dbConnect from "./database/db";
import mongoose from "mongoose";
import ContactRoute from "./routes/ContactRoute";
import BlogRoute from "./routes/blogRoute";

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

app.use("/api",ContactRoute);
app.use("/api",BlogRoute)