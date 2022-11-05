const express = require('express');
const { login, createUser } = require('../controllers/userController');
const { permissionValid, userAuthen } = require('../middlewares/auth');
const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/createUser', userAuthen, permissionValid, createUser);

module.exports = userRouter