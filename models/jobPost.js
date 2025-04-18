const mongoose=require("mongoose");
  let jobPostSchema=new mongoose.Schema({
    companyId:{type:String},
    category:{type:String},
    jobTitle:{type:String},
    experience:{type:String},
    jobType:{type:String},
    vacancies:{type:String},
    jobLocation:{type:String},
    salary:{type:String},
    applyDate:{type:String},
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}

  })

   const jobPostTable= mongoose.model("jobpost",jobPostSchema);
   module.exports={jobPostTable}