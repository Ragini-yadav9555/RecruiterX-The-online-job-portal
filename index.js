const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const expressFileupload=require('express-fileupload');
const {recruiterRoute} =require('./routes/recruiterRoute')
const {seekerRoute}=require('./routes/seekerRoute')
const {adminRouter}=require("./routes/adminRoute")
const app=express(); 
app.use(express.json());
app.use(cors())
app.use("/upload",express.static("./uploads"));
//http://localhost:9000/upload/filename (for acccess the file which were stored on the server)
app.use(expressFileupload())
const DbConnect=async()=>{ 
        const con=await mongoose.connect("mongodb://localhost:27017/recruitex");
        if(con){
            console.log("Connected to MongoDB...");
        }
} 
DbConnect();
 app.use("/api",recruiterRoute);
 app.use("/api",seekerRoute);
app.use("/api",adminRouter);
app.listen(9000,()=>{
    console.log("Server is Running at 9000 port")
})