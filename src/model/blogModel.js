import mongoose from "mongoose";

const BlogSchema=mongoose.Schema({

blogTitle:{
    type:String,
   
},
blogAuthor:{
    type:String,
   
},
blogImage:{
    type:String,

  
},
blogText:{
    type:String,
   
},
blogComments:{
    type:String
    
}

}) 

const Blog=mongoose.model("Blog",BlogSchema);

export default Blog;