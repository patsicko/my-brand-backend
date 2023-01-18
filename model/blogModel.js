import mongoose from "mongoose";

const BlogSchema=mongoose.Schema({

blogTitle:{
    type:String,
    required:true
},
blogAuthor:{
    type:String,
    required:true
},
blogImage:{
    type:String,
    required:true
},
blogText:{
    type:String,
    required:true
},
blogComments:{
    type:String
    
}

}) 

const Blog=mongoose.model("Blog",BlogSchema);

export default Blog;