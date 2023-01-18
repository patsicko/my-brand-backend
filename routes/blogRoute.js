import Express from "express";
import BlogController from "../controller/blogController";
import upload from "../uploader/multer";
import validateBlog from "../middleware/blogValidate";

const BlogRoute=Express.Router();

BlogRoute.post("/createBlog",upload.single('blogImage'),validateBlog,BlogController.createBlog);
BlogRoute.get("/allBlogs",BlogController.retrieveBlogAll);
BlogRoute.get("/singleBlog/:id",BlogController.retrieveBlogSingle);
BlogRoute.get("/deleteBlog/:id",BlogController.deleteBlog);
BlogRoute.put("/updateBlog/:id",upload.single("blogImage"),validateBlog,BlogController.updateBlog);



export default BlogRoute