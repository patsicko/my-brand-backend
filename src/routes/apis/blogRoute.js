import Express from "express";
import BlogController from "../../controller/blogController";
import upload from "../../uploader/multer";
import validateBlog from "../../middleware/blogValidate";
import  verifyToken  from "../../middleware/authenticate";
import {isAdmin,findUserById} from "../../middleware/isAdmin";

const BlogRoute=Express.Router();

BlogRoute.post("/createBlog/:id",verifyToken,findUserById,isAdmin,upload.single('blogImage'),validateBlog,BlogController.createBlog);
BlogRoute.get("/getBlogs",verifyToken,verifyToken,BlogController.retrieveBlogAll);
BlogRoute.get("/getBlog/:id",verifyToken,BlogController.retrieveBlogSingle);
BlogRoute.get("/deleteBlog/:id",verifyToken,BlogController.deleteBlog);
BlogRoute.put("/updateBlog/:id",upload.single('blogImage'),validateBlog,BlogController.updateBlog);



export default BlogRoute