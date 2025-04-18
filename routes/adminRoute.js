const express=require('express')
const adminRouter=express.Router();
const {adminTable}=require('../models/adminModel');
const {seekerTable}=require('../models/seekerModel');
const  {recruiterTable}=require('../models/recruiterModel')
adminRouter.post("/admin-register",async(req,res)=>{
     const {name,email,contact,password,location}=req.body;
     let img=req.files.img;
     img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
   const data=new adminTable({name,email,contact,password,location,img:img.name})  
     const result=await  data.save();
     res.json({
        code:200,
        data:result
     })
   })
 
 adminRouter.post("/admin-login",async (req,res)=>{
    const {email,password}=req.body;
   const result= await adminTable.findOne({email,password});
     if(result){
        res.json({
            code:200,
            message:"Login Successfull...",
            data:result
        })
     }
     else{
        res.json({
            code:404,
            message:"Invailid Email Or Password!!!",
            
        })
     }
 }) 
adminRouter.get("/admin-seekerList",async(req,res)=>{
  try {
    const result=await seekerTable.find();
    res.json({
      code:200,
      message:"Data Found Successfully...",
      data:result

    })

  } catch (err) {
    console.log(err)
  }

}) 
adminRouter.get("/admin-recruiterList",async(req,res)=>{
  try {
    const result=await recruiterTable.find();
    res.json({
      code:200,
      message:"Data Found Successfully...",
      data:result

    })

  } catch (err) {
    console.log(err)
  }

}) 
adminRouter.put("/admin-update/:_id",async(req,res)=>{
  const _id=req.params._id;
  const {name,email,contact,password,location}=req.body
  let img=req.files.img;
     img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
  
const result=await adminTable.findByIdAndUpdate({_id:_id},{
  $set:{name,email,contact,password,location,img:img.name}},
  {new:true}
)
res.json({
  code:200,
  message:"Data Updated Successfully...",
  data:result
})
})
adminRouter.put("/admin-seekerblock/:_id",async(req,res)=>{
  const _id=req.params._id;
  const status=req.body.status;
  const result=await seekerTable.findByIdAndUpdate({_id:_id},{
    $set:{isBlock:status}},
  {new:true}
)
res.json({
  code:200,
  message:"Data Updated Successfully...",
  data:result
})

})
adminRouter.put("/admin-recruiterblock/:_id",async(req,res)=>{
  const _id=req.params._id;
  const status=req.body.status;
  const result=await recruiterTable.findByIdAndUpdate({_id:_id},{
    $set:{isBlock:status}},
  {new:true}
)
res.json({
  code:200,
  message:"Data Updated Successfully...",
  data:result
})

})
module.exports={adminRouter}

