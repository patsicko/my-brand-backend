import chai from 'chai';
import request from 'supertest';
import app from '../../src/app';
import bcrypt from 'bcryptjs';
import chaiHttp from 'chai-http';
import User from '../model/userModel';