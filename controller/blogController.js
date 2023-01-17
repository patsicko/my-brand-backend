import Blog from "../model/blogModel";

class BlogController{

static async createBlog(req,res){
 try{
    const blog=new Blog({
        blogTitle:req.body.blogTitle,
        blogAuthor:req.body.blogAuthor,
        blogImage:req.body.blogImage,
        blogText:req.body.blogText
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

    const blog=await Blog.findOne(req.param.id);

        blog.blogTitle=req.body.blogTitle;
        blog.blogAuthor=req.body.blogAuthor;
        blog.blogImage=req.body.blogImage;
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