//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js"; 

dotenv.config();

console.log("MONGODB_URI =", process.env.MONGODB_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console .log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed !!! ", err);
})







/*
first approach to connect database
import express from "express"

(async () =>{
    try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   application.on("error", (error) =>{
    console.log("ERROR: ", error);
   })
   app.listen(process.env.PORT,() =>{
    console.log(`App is listening on port $ {process.env.PORT}`);
   })
    }catch(error){
    console.error("ERROR: ",error)
    throw err
    }
})() 
    */