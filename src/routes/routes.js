
import ContactRouter from "./apis/ContactRoute";
import BlogRoute from "./apis/blogRoute";
import userRoute from "./apis/userRoute";
import adminRoute from "./apis/adminRoute";
import swaggerUi  from "swagger-ui-express";
import express  from "express";
import docs from "../documentations"


const Router = express.Router();

Router.use(express.json());



Router.use("/api",ContactRouter);
Router.use("/api",BlogRoute);
Router.use("/api",userRoute);
Router.use("/admin",adminRoute);
// Router.use("/swaggerDocs",swaggerUi.serve,swaggerUi.setup(docs));

export default Router;