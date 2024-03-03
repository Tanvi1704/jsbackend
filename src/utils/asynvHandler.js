const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler};


// const asyncHandler=(fn)=>()=>{}
// //iss function ka bhi function bana ka it is liek const asyncHandler=(fn)=>{()=>{}}


// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         console.log("error code :", err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }