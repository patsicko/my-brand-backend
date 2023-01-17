import Express from "express";
import BlogController from "../controller/blogController";

const BlogRoute=Express.Router();

BlogRoute.post("/createBlog",BlogController.createBlog);



export default BlogRoute