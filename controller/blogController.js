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


}

export default BlogController