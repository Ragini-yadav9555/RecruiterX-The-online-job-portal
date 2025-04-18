const mongoose=require("mongoose");
  let adminSchema=new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,required:true},
    contact:{type:Number,required:true},
    password:{type:String,required:true},
    location:{type:String,required:true},
    img:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}

  })

   const adminTable= mongoose.model("admins",adminSchema);
   module.exports={adminTable}