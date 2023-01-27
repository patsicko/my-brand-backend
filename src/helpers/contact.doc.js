const getMessages = {
    tags:['Contact'],
    description:"List all contact messages",
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

const getMessage = {
    tags:['Contact'],
    description:"get the contact message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63befa79129bef93ef5ddf47"
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

const createMessage = {
    tags:['Contact'],
    description:"Create a message",
    requestBody:{
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        names:{
                            type:"string",
                            description:"Your name",
                            example:"MANIBAHO Patrick"
                        },
                        email:{
                            type:"string",
                            description:"your email",
                            example:"patsicko@gmail.com"
                        },
                        message:{
                            type:"string",
                            description:"the message you want to send",
                            example:"hi, i want to hire you"
                        },
                    }
                }
            }
        }
    },
    responses:{
        201:{
            description:"OK",
            content:{
                "application/json":{
                    type:"object",
                    example:{
                        status:"success",
                        data:[]
                    }
                }
            }
        }
    }
}

const deleteMessage = {
    tags:['Contact'],
    description:"Delete the contact message by id",
    parameters:[
        {
            name:"id",
            in:"path",
            description:"id of message",
            type:"string",
            example:"63befa79129bef93ef5ddf47"
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


export const contactRouteDocs = {
    "/api/getMessages/":{
        get:getMessages
    },
    "/api/getMessage/{id}":{
        get:getMessage
    },
    "/api/createMessage":{
        post:createMessage,
    },
    "/api/deleteMessage/{id}":{
        delete:deleteMessage
    }
}