const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require('./model/userSchema');

dotenv.config({path:'./config.env'});

require('./db/conn');
const cookieParser = require('cookie-parser');
app.use(cookieParser ());
app.use(express.json());

app.use(require('./router/auth'));



//app.get('/',(req,res)=>{

  //  res.send(`Hello from the server`)
//});

// app.get('/about',(req,res)=>{

   // res.send(`about `)
 // });

app.get('/contact',(req,res)=>{

    res.send(` contact`)
});
app.get('/signin',(req,res)=>{

    res.send(`Hello signin`)
});

app.get('/signup',(req,res)=>{

    res.send(`Hsignup`)
});





app.listen(5000, ()=>{
    console.log(`server is running on PORT 5000`);
})