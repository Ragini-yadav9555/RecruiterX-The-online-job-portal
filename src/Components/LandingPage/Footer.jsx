import { BsFillSendFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaBehance } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";




function Footer(){
    return (
        <>
        <div className="container-fluid top_footer-container">
        <div className="container" style={{paddingTop: 150}}>
        <div className="row">
            <div className="col-sm-3 topFooter_content">
                <h2 style={{fontSize:30,color:"white"}}>ABOUT US</h2>
                <p>Heaven frucvitful doesn't <br /> cover lesser dvsays appear <br /> creeping seasons so behold.</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2 style={{fontSize:30,color:"white"}}>CONTACT INFO</h2>
            <p>Address: Lucknow, <br /> Uttar Pradesh, 226022. <br /> <br /> Phone: +91-xx-xxxx-xxxx <br />Email: abc123@gmail.com</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2 style={{fontSize:30,color:"white"}}>IMPORTANT LINK</h2>
            <p>View Project <br /> Contact us <br /> Testimoniol <br /> Propertise <br /> Support</p>
            </div>
            <div className="col-sm-3 topFooter_content">
            <h2 style={{fontSize:30,color:"white"}}>NEWSLETTER</h2>
            <p>Heaven frucvitful doesn't cover lesser in <br />  days appear creeping.</p>
            <div className="input-group flex-nowrap">
  
  <input
    type="email"
    className="form-control"
    placeholder="Email Address"
    aria-label="Email Address"
    aria-describedby="addon-wrapping"
  />
  <span className="footer_btn" id="addon-wrapping">
    <BsFillSendFill/>
  </span>
</div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        
        <div className="row">
            <div className="col-sm-3">
                <img src="/logo2_footer.png" alt="Logo" />
            </div>
            <div className="col-sm-3 foot_content">
                <h3>5000+ <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
            <div className="col-sm-3 foot_content">
            <h3>451 <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
            <div className="col-sm-3 foot_content">
            <h3>568 <span style={{fontSize: 20}}>Talented Hunter</span></h3>
            </div>
        </div>
        </div>
        <hr style={{color: "gray"}} />
        <div className="footer_bottom">
        <div className="row text-secondary text-center">
            <p>Copyright &copy; 2024 All rights reserved | This template is made with <FaHeart style={{color:"#ff2642"}}/>  by <span style={{color:"#ff2642"}}>Ragini Yadav</span> ...</p>
        </div>
        <div className="footer_icon">
            <FaFacebookF style={{paddingRight:10,fontSize:22}}/>
            <FaTwitter style={{paddingRight:10}}/>
            <TbWorld style={{paddingRight:10}}/>
            <FaBehance style={{paddingRight:10}}/>
        </div>
        </div>
       </div>
        </>
    )
}


export default Footer