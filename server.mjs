import express from 'express';      
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import student from './model/student.model.mjs'
           

import dotenv from 'dotenv';
//checking if port no is provided by production or not
dotenv.config({silent:process.env.NODE_ENV==='production'});

const app = express(); 

app.use(bodyParser.json({urlencoded:true}));

//connecting to mongoDb
mongoose.connect(process.env.mongoUrl);   
const db = mongoose.connection;
db.on('error',()=>{
    console.log("error while connecting to mongoDb");
});
db.once('open',()=>{
   // init();
    console.log("connected to mongodb");
});

const init =()=>{
student.collection.drop();
}

import route from'./route/student.route.mjs'
route(app)

 //connecting to server 
app.listen(process.env.PORT,()=>{          
    console.log("server has started on port no : ",process.env.PORT);
})
