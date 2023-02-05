import chai from 'chai';
import request from 'supertest';
import app from "../index"
import bcrypt from 'bcrypt';
import chaiHttp from 'chai-http';
import User from '../model/userModel';
import Message from '../model/ContactModel';
import Blog from '../model/blogModel';

import dotenv from "dotenv";

dotenv.config();

chai.should();
chai.use(chaiHttp);


let token;
let id;
const expect=chai.expect;

const user = {
  fname: 'patrick',
  lname: 'curry',
  email: 'paticurry@gmail.com',
  password: 'musanze',
};



const updateUser = {
    fname: 'patsick',
    lname: 'curry2',
    email: 'paticurry2@gmail.com',
    password: '1234567',
};



  beforeEach(async()=>{

    await  User.deleteMany({})
    
   
       const admin=await new User({
   
           fname:"Manibaho",
           lname:"Patrick",
           email:"patsick@gmail.com",
           password: await bcrypt.hash("admincreated",10),
           role:"admin"
           
         
   
       });
   
       await admin.save();
      console.log(admin)
       const log=await request(app).post('/api/login').send({email:"patsick@gmail.com",password:"admincreated"});
       token=log.body.token;
      

      
   })
   


describe('users endpoints', () => {


    it('it should create a user', (done) => {
        request(app)
        .post('/api/createUser')
        .send(user)
        .end((error, res) => {
            
          chai.expect(res).to.have.status(201);
          chai.expect(res.body.post).to.be.a('object');
          done();
        });
    })


      it('it should get all users', (done) => {
          request(app)
          .get('/api/getUsers')
          .set('token', `Bearer ${token}`)
          .end((error, res) => {
            
            expect(res).to.have.status(200);
            expect(res.body.data).to.be.a('array');
            done();
          });
      });





  it('it should get user by id', (done) => {


    const user= new User({
   
      fname:"Manibaho",
      lname:"Patrick",
      email:"patsick@gmail.com",
      password:bcrypt.hash("admincreated",10),
      role:"admin"
      
  });

   user.save();
   id=user._id;
  request(app).get(`/api/getUser/${id}`)
  .set('token', `Bearer ${token}`)
  .end((error, res) => {
            
    chai.expect(res).to.have.status(200);
    chai.expect(res.body.data).to.be.a('object');
    done();
  });

  });




  it('it should delete a user', (done) => {


    const user= new User({
   
      fname:"Manibaho",
      lname:"Patrick",
      email:"patsick@gmail.com",
      password:bcrypt.hash("admincreated",10),
      role:"admin"
      
  });

  user.save();
   id=user._id;
  request(app).delete(`/api/deleteUser/${id}`)
  .set('token', `Bearer ${token}`)
  .end((error, res) => {
            
    chai.expect(res).to.have.status(204);
    
    done();
  });


  })


});




 const message={
  names:'Patsicko',
  email:'patsicko@gmail.com',
  message:'This is a contact message',
 }


describe('Contact messages API'  ,()=>{

  it("It should create a contact message",(done)=>{

 
   request(app).post("/api/createMessage").send(message).end((error,res)=>{
  console.log(res.body)
   chai.expect(res).to.have.status(201);
   chai.expect(res.body.post).to.be.a('object');
   done();
   console.log(message);

   });


  })



it("It should get all contact messages",(done)=>{


  const message=new Message({
    names:'Patsicko',
    email:'patsicko@gmail.com',
    message:'This is a contact message',
  })


  message.save()
request(app).get("/api/getMessages").set('token',`Bearer ${token}`)
.end((error,res)=>{

expect(res).to.have.status(200);
expect(res.body.data.posts).to.be.a('array');
done()

})

})


it("should get a single message by id",(done)=>{
  const message=new Message({
    names:'Patsicko',
    email:'patsicko@gmail.com',
    message:'This is a contact message',
  })

  message.save();

  id=message._id;

request(app).get(`/api/getMessage/${id}`).set("token",`Bearer ${token}`).end((error,res)=>{

expect(res).to.have.status(200);
expect(res.body.data.post).to.be.a('object');
expect(res.body.data.post).to.have.a.property('names')
done()
})

})


it('should delete single message by id',(done)=>{

  const message=new Message({
    names:'Patsicko',
    email:'patsicko@gmail.com',
    message:'This is a contact message',
  })

  message.save();

  id=message._id;

  request(app).delete(`/api/deleteMessage/${id}`).set('token',`Bearer ${token}`).end((error,res)=>{
    expect(res).to.have.status(204);
    done();
  })
})




const blog={

  blogTitle:"API testing with mocha and chai",
  blogAuthor:'MANIBAHO Patrick',
  blogImage:'test.jpg',
  blogText:'Chaiis a BDD (Behaviour-Driven Development) / TDD (Test-Driven Development) assertion library for nodejs and the browser that can be delightfully paired with any javascript testing framework.',
  

}

describe('Blog apis',()=>{

it('shoul get all blogs',(done)=>{

  request(app).get('/api/getBlogs').end((error,res)=>{

    expect(res).to.have.status(200);
    expect(res.body.data.posts).to.be.a('array');
    done()
  })



});

it("should get a single blog",(done)=>{

  const blog= new Blog({

    blogTitle:"API testing with mocha and chai",
    blogAuthor:'MANIBAHO Patrick',
    blogImage:'test.jpg',
    blogText:'Chaiis a BDD (Behaviour-Driven Development) / TDD (Test-Driven Development) assertion library for nodejs and the browser that can be delightfully paired with any javascript testing framework.',
    
  
  })
 
  blog.save();

  id=blog._id;

  request(app).get(`/api/getBlog/${id}`).set('token',`Bearer ${token}`).end((error,res)=>{

    expect(res).to.have.status(200);
    expect(res.body.data.post).to.be.an('object');
    expect(res.body.data).to.be.an('object');
    expect(res.body.data.post).to.have.a.property('_id')
    done()
  })


})


it("should delete a blog",(done)=>{

  const blog= new Blog({

    blogTitle:"API testing with mocha and chai",
    blogAuthor:'MANIBAHO Patrick',
    blogImage:'test.jpg',
    blogText:'Chaiis a BDD (Behaviour-Driven Development) / TDD (Test-Driven Development) assertion library for nodejs and the browser that can be delightfully paired with any javascript testing framework.',
 
  
  })
 
  blog.save();

  id=blog._id;
console.log(id);
console.log("this is token:",token)
request(app).delete(`/api/deleteBlog/${id}`).set('token',`Bearer ${token}`).end((error,res)=>{

  expect(res).to.have.status(204);
  done()
})

})


})


})