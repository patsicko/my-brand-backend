//get all blogs swagger documentation
const getBlogs = {
    
    tags:["Blogs"],
    description: "list of all blogs",
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            

                            _id: "63cd1e3c8495ae5f4a167aa5",
                            blogTitle: "digital signal",
                            blogAuthor: "Patrick",
                            blogImage: "https://res.cloudinary.com/dkgq3at71/image/upload/v1674387004/xxibckgpkea02zwnebbl.jpg",
                            blogText: "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics and analog signals.\n\nDigital electronic circuits are usually made from large assemblies of logic gates, often packaged in integrated circuits. Complex devices may have simple electronic representations of Boolean logic functions.[1]",
                            __v: 0
                              
                        },

                    },
                },
            },
        },
    },
};

//get single blog by id swagger documentation
const getBlog ={
    tags:["Blogs"],
    summary:"get blog by id",
    description:"get single blog by id",
    parameters:[
        {
            name: "id",
            in : "path",
            description: "blog id" ,
            type: "string",
            example: "63cd1e3c8495ae5f4a167aa5"
        },
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{
                            _id: "63cd1e3c8495ae5f4a167aa5",
                            blogTitle: "digital signal",
                            blogAuthor: "Patrick",
                            blogImage: "https://res.cloudinary.com/dkgq3at71/image/upload/v1674387004/xxibckgpkea02zwnebbl.jpg",
                            blogText: "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics and analog signals.\n\nDigital electronic circuits are usually made from large assemblies of logic gates, often packaged in integrated circuits. Complex devices may have simple electronic representations of Boolean logic functions.[1]",
                            __v: 0
                          
                    },
  
                    },
                },
            },
        },
        404:{
            description:"blog not found"
        }
    },
  
  }


  //create a blog swagger documentation 

const createBlog = {
    tags:["Blogs"],
    description: "create a new blog",
    security: [
        {
          token: [],
        },
      ],
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        Blogtitle:{
                            type:"string",
                            description:"title of the blog",
                            example:"digital electronics"
                        },
                        blogAuthor:{
                            type:"string",
                            description:"Author of the blog",
                            example:"MANIBAHO Patrick",
                        },
                        blogImage:{
                            type:"string",
                            description:"image of the blog",
                            example:"https://res.cloudinary.com/dkgq3at71/image/upload/v1674219815/wserb0arxhbque4rxlle.png"
                        },
                        blogText:{
                            type:"string",
                            description:"text of the blog",
                            example:"Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics and analog signals.\n\nDigital electronic circuits are usually made from large assemblies of logic gates, often packaged in integrated circuits. Complex devices may have simple electronic representations of Boolean logic functions.[1]",
                        },
                        
                    },
                },
            },
  
        },
    },
  responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{

                            _id: "63ca91270316137f8b9ff8ed",
                            blogTitle: "digital electronics",
                            blogAuthor: "Patrick",
                            blogImage: "https://res.cloudinary.com/dkgq3at71/image/upload/v1674219815/wserb0arxhbque4rxlle.png",
                            blogText: "Digital electronics is a field of electronics involving the study of digital signals and the engineering of devices that use or produce them. This is in contrast to analog electronics and analog signals.\n\nDigital electronic circuits are usually made from large assemblies of logic gates, often packaged in integrated circuits. Complex devices may have simple electronic representations of Boolean logic functions.[1]",
                            __v: 0
                    },
  
                    },
                },
            },
        },
    },
  
  
  };

//update blog swagger documentation
  const updateBlog = {
    tags: ["Blogs"],
    description: "Update a blog",
    security: [
        {
          token: [],
        },
      ],
    parameters: [
        {
            name: "id",
            in: "path",
            description: "ID of the blog to update",
            required: true,
            type: "string"
        }
    ],
    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        blogTitle: {
                            type: "string",
                            description: "Title of the blog",
                            example: "swagger api documentation"
                        },
                        blogAuthor: {
                            type: "string",
                            description: "Author of the blog",
                            example: "Patrick Manibaho",
                        },
                        blogImage: {
                            type: "string",
                            description: "Image of the blog (url)",
                            example: "https://res.cloudinary.com/dkgq3at71/image/upload/v1674767399/lwzcrdry0xmf8lpwa7k2.png"
                        },
                        blogText: {
                            type: "string",
                            description: "Swagger is a set of open-source tools built around the OpenAPI Specification that can help you design, build, document and consume REST APIs. The major Swagger tools include: Swagger Editor – browser-based editor where you can write OpenAPI definitions.",
                        }
                    }
                }
            }
        },
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            _id: {
                                type: "string",
                                description: "ID of the updated blog"
                            },
                            blogTitle: {
                                type: "string",
                                description: "Title of the updated blog"
                            },
                            blogAuthor: {
                                type: "string",
                                description: "Author of the updated blog"
                            },
                            image: {
                                type: "string",
                                description: "Image of the updated blog (url)"
                            },
                            blogText: {
                                type: "string",
                                description: "Swagger is a set of open-source tools built around the OpenAPI Specification",
                                example: "https://res.cloudinary.com/dkgq3at71/image/upload/v1674767399/lwzcrdry0xmf8lpwa7k2.png"
                            }
                        },
                    },
                },
            },
        },
    },
};

//delete a blog swagger documentation

const deleteBlog = {
    tags: ["Blogs"],
    description: "Delete a blog",

    parameters: [
        {
            name: "id",
            in: "path",
            description: "ID of the blog to delete",
            required: true,
            type: "string"
        }
    ],
    security: [
        {
          token: [],
        },
      ],

    responses: {
        204: {
            description: "No Content"
        },
        401: {
            description: "Unauthorized"
        },
        404: {
            description: "Not Found"
        }
    }
};








const blogRouteDoc ={
    "/api/getBlogs": {
        get:getBlogs
    },
    "/api/getBlog/{id}":{
        get:getBlog
      },
      "/api/createBlog":{
        post:createBlog
      },
      "/api/updateBlog/{id}":{
        put:updateBlog
      },
      "/api/deleteBlog/{id}":{
        delete:deleteBlog
      }
   
};

export default blogRouteDoc;