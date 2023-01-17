import Express from "express";
import BlogController from "../controller/blogController";

const BlogRoute=Express.Router();

BlogRoute.post("/createBlog",BlogController.createBlog);
BlogRoute.get("/allBlogs",BlogController.retrieveBlogAll);
BlogRoute.get("/singleBlog/:id",BlogController.retrieveBlogSingle)



export default BlogRoute