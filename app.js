const express = require('express');
const userRouter = require('./routes/login');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000000 }
  }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter);

module.exports = {app};