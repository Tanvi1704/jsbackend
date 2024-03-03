require('dotenv').config()

const express=  require("express") //common js
// import express from "express" //module js
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/routes',(req,res)=>{
    res.send("<h1> tanvi here </h1>")
})

// app.listen(port,()=>{
//     console.log("i m running")
// })

app.listen(process.env.PORT,()=>{
    console.log("i m running")
})