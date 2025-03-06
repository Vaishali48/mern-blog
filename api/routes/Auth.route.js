import express from 'express';
import { GoogleLogin, Login, Logout, register } from '../controllers/Auth.controller.js';
import { authenticate } from '../middleware/authenticate.js';

const AuthRoute  = express.Router()

//public
AuthRoute.post('/register', register)
AuthRoute.post('/login', Login)
AuthRoute.post('/google-login', GoogleLogin)

//protected
AuthRoute.get('/logout', authenticate, Logout)


export default AuthRoute;