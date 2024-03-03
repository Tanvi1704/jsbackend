import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

//db is in another continent 

const connectDB=async()=>{
    try{
        const conectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected on port ${process.env.PORT} !! db host:${conectionInstance.connection.host}`)
    }
    catch(error){
        console.log("mongodb connection error ",error)
        process.exit(1)
    }
}
export default connectDB

//MONGOOSE GIVE A RETURN OBJECT 

