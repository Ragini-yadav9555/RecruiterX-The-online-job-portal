import { useEffect, useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { FaHome} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiUserListFill } from "react-icons/pi";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlinePostAdd } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
// import { BiSolidUserDetail } from "react-icons/bi";
import { IoMdAlert } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { RiUser2Fill } from "react-icons/ri";


function NavBar(){
  const [data,setData]=useState("");
  const [userType,setUserType]=useState("")
  const navigate=useNavigate();
  useEffect(()=>{
    const tempData=JSON.parse(localStorage.getItem("data"))
    setData(tempData)
    const tempUserType=JSON.parse(localStorage.getItem("userType"))
    setUserType(tempUserType)
  },[location.pathname]);

  const adminLogout=()=>{
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
    navigate("/admin/login");
  }
  const seekerLogout=()=>{
      localStorage.removeItem("data");
      localStorage.removeItem("userType");
      navigate("/seeker/login");
  }

      const recruiterLogout=()=>{
        localStorage.removeItem("data");
        localStorage.removeItem("userType");
        navigate("/recruiter/login");

  }
 
  if(userType=="admin") {
    return (
      <> 
     <div className="row navbar_main_row sticky-top nav_menu_blur mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img className='nav_bar_logo' src={`http://localhost:9000/upload/${data.img}`}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin">
                 <FaHome/>&nbsp;Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin/seekerlist">
                  <PiUserListFill/>SeekerList
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/admin/recruiterlist">
                 <PiUserListFill/> RecruiterList
                </Link>
              </li>
              <li className="nav-item" onClick={adminLogout}>
                <Link className="nav-link nav_font" aria-current="page" >
                 <FiLogOut/> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  } else if(userType=="seeker") {
    return (
      <> 
     <div className="row navbar_main_row sticky-top nav_menu_blur mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
          <img className='nav_bar_logo' src={`http://localhost:9000/upload/${data.img}`}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker">
                 <FaHome/>&nbsp; Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker/jobapply">
                <BsPersonWorkspace/> Apply Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/seeker/appliedjob">
                 <AiOutlineFileDone/> Applied Job
                </Link>
              </li>
              <li className="nav-item"  onClick={seekerLogout} >
                <Link className="nav-link nav_font" aria-current="page">
                <FiLogOut/> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  } else if(userType=="recruiter") {
    return (
      <> 
     <div className="row navbar_main_row sticky-top nav_menu_blurmb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
          <img className='nav_bar_logo' src="rrr.jpg"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter">
                <FaHome/> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter/jobpost">
                 <MdOutlinePostAdd/> Job Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="recruiter-postedjob">
                 <MdOutlinePostAdd/> Posted Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/recruiter/appliedjob">
                 <AiOutlineFileDone/> Applied job
                </Link>
              </li>
              <li className="nav-item" onClick={recruiterLogout} >
                <Link className="nav-link nav_font" aria-current="page" >
                  <FiLogOut/>Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  } else {
    return (
      <> 
     <div className="row navbar_main_row sticky-top nav_menu_blur mb-1">
    <div className="col-sm-1"></div>
    <div className="col-sm-10">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="">
            <img src="/logo.png" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav_font" aria-current="page" to="/">
                 <IoHome/>&nbsp;Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" to="/findjob">
                  <MdOutlineScreenSearchDesktop/>&nbsp;Find a Job
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_font" to="/about">
                 <IoMdAlert/>&nbsp;About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav_font"
                  to="/contact"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <PiPhoneCallFill/>&nbsp;Contact
                </Link>
              </li>
            </ul>
  
            {/* First Dropdown */}
            <div className="dropdown ms-auto mt-2">
              <button
                className="btn btn-outline-danger dropdown-toggle custom-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <b>Registration</b>
              </button>
              <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link className="dropdown-item" to="recruiter/register">
                  <RiUser2Fill/>&nbsp;Recriuter 
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/seeker/register">
                  <PiUsersThreeFill/>&nbsp;Job Seeker
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Second Dropdown */}
            <div className="dropdown ms-4 mt-2">
              <button
                className="btn btn-outline-danger dropdown-toggle custom-btn"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               <b> Login</b>
              </button>
              <ul className="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenuButton2">
                <li>
                  <Link className="dropdown-item" to="/admin/login">
                    <RiAdminFill/>&nbsp;Admin Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/recruiter/login">
                 <RiUser2Fill/>&nbsp;Recriuter Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/seeker/login">
                    <PiUsersThreeFill/>&nbsp;Seeker Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    <div className="col-sm-1"></div>
  </div>
      
      </>
   )
  }
  


}

export default NavBar;
