import chai from 'chai';
import request from 'supertest';
import app from "../index"
import bcrypt from 'bcrypt';
import chaiHttp from 'chai-http';
import User from '../model/userModel';
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
            
            chai.expect(res).to.have.status(200);
            chai.expect(res.body.data).to.be.a('array');
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




  it('it should update a user', (done) => {


    const user= new User({
   
      fname:"Manibaho",
      lname:"Patrick",
      email:"patsick@gmail.com",
      password:bcrypt.hash("admincreated",10),
      role:"admin"
      
  });

  user.save();
   id=user._id;
  request(app).get(`/api/deleteUser/${id}`)
  .set('token', `Bearer ${token}`)
  .end((error, res) => {
            
    chai.expect(res).to.have.status(200);
    
    done();
  });


  })


});