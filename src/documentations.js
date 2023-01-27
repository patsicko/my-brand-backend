import blogRouteDoc from "./helpers/blog.doc"
import userRouteDoc from "./helpers/user.doc";
import { contactRouteDocs } from "./helpers/contact.doc";

const swaggerDocumentations ={
  openapi: "3.0.0",
  info:{
      title: "MY BRAND API",
      version:"0.1.0",
      description:"This is the backend of my brand",
      contact:{
        name:"MANIBAHO Patrick",
        email:"patsicko@gmail.com",
        url:"https://github.com/patsicko"
  },
  },

  servers:[
      {
          url: "http://localhost:3002",
          name:"development server"
      },
  ],
  components: {
      securitySchemes: {
        token: {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name:"token",
          in:"header"
        },
      },
    },


  tags:[
      {
          name:"Blogs",
          description:""
      },
      {
          name:"Contact",
          description:""
      },
      {
          name:"Users",
          description:""
      }
  ],

  paths:{
...userRouteDoc,
...blogRouteDoc,
...contactRouteDocs


  }

}

export default swaggerDocumentations