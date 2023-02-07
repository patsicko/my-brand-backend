import Express from "express";
import BlogController from "../../controller/blogController";
import upload from "../../uploader/multer";
import validateBlog from "../../middleware/blogValidate";
import  verifyToken  from "../../middleware/authenticate";
import isAdmin from "../../middleware/isAdmin";

const BlogRoute=Express.Router();

BlogRoute.post("/createBlog",verifyToken,isAdmin,upload.single('blogImage'),validateBlog,BlogController.createBlog);
BlogRoute.get("/getBlogs",BlogController.retrieveBlogAll);
BlogRoute.get("/getBlog/:id",BlogController.retrieveBlogSingle);
BlogRoute.delete("/deleteBlog/:id",verifyToken,BlogController.deleteBlog);
BlogRoute.put("/updateBlog/:id",verifyToken,upload.single('blogImage'),validateBlog,BlogController.updateBlog);



export default BlogRoute;