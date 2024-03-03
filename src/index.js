// require('dotenv').config({path: './env'})

import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME }  from "./constants";
// import express from "express"
// const app=express()

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

// as early as possible in your application import and configure dotenv : env
//har jagah uska acces mil jaye 










//first approcah is make a if else n then even a function and agar databse kahi aur hei toh uska liya async

// // function connectDB(){}

// ( aysnc () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",()=>{
//             console.log("error:", error);
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("error",error)
//         throw err
//     }
// })() 