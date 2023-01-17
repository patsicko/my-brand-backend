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
    res.status(401).json(error.message)
 }
}


}

export default BlogController