import express from "express"
import cors from  "cors"
import cookieParser from "cookie-parser"

const app=express()

app.use(cors({
    origin:processenv.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './router/user.routes.js'

//routes declartaion
//pehla hum get post karte tha aur aab kya hua ki hum uska alag leka chala gay ehi toh aab humko usko using middleware declare karne k hoga 
app.use("/api/v1/user",userRouter)
//http://localhost:8000/api/v1/users/login

export {app}


