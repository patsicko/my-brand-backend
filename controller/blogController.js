import Blog from "../model/blogModel";
import cloudinary from "../uploader/cloudinary";



class BlogController{

static async createBlog(req,res){
 try{

    const result= await cloudinary.uploader.upload(req.file.path)
    const blog=new Blog({
        blogTitle:req.body.blogTitle,
        blogAuthor:req.body.blogAuthor,
        blogImage:result.secure_url,
        blogText:req.body.blogText,
        blogComments:req.body.blogComments,
    });

    await blog.save();;
    res.status(201).json(blog); 
    console.log('blog created successully');
 }catch(error){
    res.status(401).json({
        "status":"error",
        "message":error.message
    })
 }
}



static async retrieveBlogAll(req,res){
    
try{

const blogs=await Blog.find();
res.status(200).json({
    "status":"success",
    "data":{
        "post":blogs
    }

})

}catch(error){
  res.status(404).json({
    "status":"error",
    "message":error.message
  })
}

}


static async retrieveBlogSingle(req,res){
    try{
        
        const blog=await Blog.findOne(req.param.id);

        res.status(200).json({
            "status":"success",
            "data":{
                "post":blog
            }
        })

    }catch(error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        })
    }
}



static async deleteBlog(req,res){
    try{

        await Blog.findByIdAndDelete(req.param.id);
        res.status(200).json({
            "status":"success",
            "message":"blog deleted successfully"
        })

    }catch(error){
        res.status(404).json({
            "status":"error",
            "message":error.message
        })
    }
}


static async updateBlog(req,res){
    try{
    await cloudinary.uploader.destroy(blog.blogImage)
    const blog=await Blog.findOne(req.param.id);
    const result=cloudinary.uploader.upload(req.file.path)
        blog.blogTitle=req.body.blogTitle;
        blog.blogAuthor=req.body.blogAuthor;
        blog.blogImage=result.secure_url;
        blog.blogText=req.body.blogText;

        const updated=await blog.save();

        res.status(200).json({
            "status":"success",
            "message":"blog updated successfully",
            "data":updated
        })

    }catch(error){
     res.status(404).json({
        "status":"error",
        "message":error.message
     })
    }
}





}

export default BlogController