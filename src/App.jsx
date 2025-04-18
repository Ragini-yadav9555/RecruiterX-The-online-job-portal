import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import "./App.css";
import About from "./Components/LandingPage/About";
import Contact from "./Components/LandingPage/Contact";
import Footer from "./Components/LandingPage/Footer";
import Home from "./Components/LandingPage/Home";
import NavBar from "./Components/LandingPage/NavBar";
import RecruiterRegister from "./Components/Recruiter/RecruiterRegiter";
import SeekerRegister from "./Components/JobSeeker/SeekerRegister";
import AdminLogin from "./Components/Admin/AdminLogin"
import SeekerLogin from "./Components/JobSeeker/SeekerLogin";
import RecruiterLogin from "./Components/Recruiter/RecruiterLogin";
import AdminSeeker from "./Components/Admin/AdminSeekerList";
import Postjob from "./Components/Recruiter/PostJob";
import RecruiterPostedJobs from "./Components/Recruiter/PostedJobs"
import AdminRecruiter from "./Components/Admin/AdminRecruiterList";
import SeekerApplyJobList from "./Components/JobSeeker/SeekerApplyJobList";
import RecruiterProfile from "./Components/Recruiter/RecruiterProfile";
import SeekerProfile from "./Components/JobSeeker/SeekerProfile";
import AdminProfile from "./Components/Admin/AdminProfile";
import SeekerAppliedJob from "./Components/JobSeeker/SeekerAppliedJob"
import RecruiterAppliedJob from "./Components/Recruiter/RecruiterAppliedJob";
import { useEffect, useState } from "react";
import RecentJobs from "./Components/LandingPage/RecentJobs";
function App(){
  const [role,setRole]=useState('');
  const location=useLocation();
  useEffect(()=>{
    const userType=JSON.parse(localStorage.getItem("userType"));
    setRole(userType);
  },[role,location])


 return (
  <> 
<NavBar />
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/findjob" element={<RecentJobs/>} />
<Route path="/about" element={<><About/></>}/>
<Route path="/contact" element={<><Contact/></>} />
<Route path="/admin/login" element={<AdminLogin/>}/>
<Route path="/seeker/register" element={<><SeekerRegister/></>}/> 
<Route path="/seeker/login" element={<><SeekerLogin/></>} />
<Route  path="/recruiter/register" element={<RecruiterRegister/>}/>  
<Route  path="/recruiter/login" element={<><RecruiterLogin/></>}/>
{/* admin routes */}
{role=="admin" && (<>
<Route path="/admin" element={<><AdminProfile/></>} />
<Route path="/admin/seekerlist" element={<><AdminSeeker/></>} />
<Route path="/admin/recruiterlist" element={<><AdminRecruiter/></>} />
 </>)}

{/* <Route path="/recruiter/postedjob" element={<><RecruiterPostedJobs/></>}/> */}
  {/* Seeker */}
{role=="seeker" && (<>
  <Route path="/seeker" element={<><SeekerProfile/></>}/>
 <Route path="/seeker/jobapply" element={<><SeekerApplyJobList/></>} />
 <Route path="/seeker/appliedjob" element={<><SeekerAppliedJob/></>} />
</>)}
 
   {/* Recruiter */}
{role=="recruiter" && (<>
  <Route  path="/recruiter" element={<><RecruiterProfile/></>}/>  
 <Route  path="/recruiter/jobpost" element={<Postjob/>}/>
 <Route  path="/recruiter/appliedjob" element={<><RecruiterAppliedJob/></>}/>
 <Route  path="recruiter-postedjob" element={<><RecruiterPostedJobs/></>}/>

</>)}
 
 
<Route path="*" element={<h1>404 Page not found</h1>}/>    
</Routes>
<Footer/>
  </>
 )
}

function WrapperRouter(){
  return (
  <BrowserRouter>
  <App/>
  </BrowserRouter>
  )
}
export default WrapperRouter;