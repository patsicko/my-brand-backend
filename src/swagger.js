import swaggerJSDoc from "swagger-jsdoc";

const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'MY BRAND API',
        version:"1.0.0",
        description:
          "This is the documentation of my capstone backend api. GET, POST, PATCH, DELETE API'S for Blogs, contact messages, users, admin",
          contact:{
            name:"MANIBAHO Patrick",
            email:"patsicko@gmail.com",
            url:"https://github.com/patsicko"
          }
      },
    
      components: {
        securitySchemes: {
          token: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: [
       "./src/routes/apis/*.js",
       "../src/routes/routes.js",
       "../src/model/*.js",
    ],
  };
  
  const docs = swaggerJSDoc(options);
  
  export default docs;
