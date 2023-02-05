const createUser = {
    tags:["Users"],
    description: "create a user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        fname:{
                            type:"string",
                            description:" first name of the user",
                            example:"MANIBAHO"
                        },
                        lname:{
                            type:"string",
                            description:"Last name of the user",
                            example:"Patrick",
                        },
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"patsicko@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"123456",
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
                    },
                },
            },
        },
    },
  };



  //logging in a user swagger documentation
const login = {
    tags:["Users"],
    description: "login user",
    requestBody:{
        content:{
            "Application/json":{
                schema:{
                    type:"object",
                    properties:{
                        email:{
                            type:"email",
                            description:"email of the user",
                            example:"patsicko@gmail.com"
                        },
                        password:{
                            type:"string",
                            description:"password of the user",
                            example:"123456",
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
  
                    },
                },
            },
        },
    },
  
  
  };


//get all users swagger documetnation 
const getUsers = {
    
    tags:["Users"],
    description: "list of all users",
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                      

                    },
                },
            },
        },
    },
};



//get single user by id swagger documentation
const getUser ={
    tags:["Users"],
    summary:"get user by id",
    description:"get single user by id",

    parameters:[
        {
            name: "id",
            in : "path",
            description: "user id" ,
            type: "string",
            example: "63d2c7d9f20b9aafd96d197f"
        },
    ],

    security: [
        {
          token: [],
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
                            _id: "63d2c7d9f20b9aafd96d197f",
                            fname: "Manibaho",
                            lname: "Patrick",
                            email: "patsick@gmail.com",
                            password: "$2b$10$OE8r6V3Db6CN3yj9ZUsQZONvrC3hSncyxcT3boLR.JdmYLdkPtOvO",
                            role: "admin",
                            createdAt: "2023-01-26T18:35:05.284Z",
                            updatedAt: "2023-01-26T18:35:05.284Z",
                            __v: 0
                          
                    },
  
                    },
                },
            },
        },
        404:{
            description:"user  not found"
        }
    },
  
  }

  const deleteUser = {
    tags:['Users'],
    description:"Delete the user by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of user",
            type:"string",
            example:"63d2c7d9f20b9aafd96d197f"
        }
    ],
    security: [
        {
          token: [],
        },
      ],
    responses:{
        200:{
            description:"OK",
            content:{
                 "application/json":{
                    type:'object',
                    example:{
                        status:"success",
                        data:[]
                    }
                 }
            }
        }
    }
}




  const userRouteDoc = {
    "/api/createUser": {
        post:createUser
    },

    "/api/login": {
        post:login
    },
    "/api/getUsers": {
        get:getUsers
    },
    "/api/getUser/{id}": {
        get:getUser
    },
    "/api/deleteUser/{id}": {
        delete:deleteUser
    }
}


export default userRouteDoc;