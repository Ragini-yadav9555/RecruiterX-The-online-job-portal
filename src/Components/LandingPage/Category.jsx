import { FaUserSecret } from "react-icons/fa";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { TbDeviceMobileCog } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { GiCircuitry } from "react-icons/gi";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";


function Category(){

    const category_arr=[
        {
            img:<FaUserSecret/>,
            title:"Design & Creative",
            count:"(653)"
        },
        {
            img:<TbDeviceDesktopStar/>,
            title:"Design & Devlopment",
            count:"(658)"
        },
        {
            img:<BsFillFileEarmarkBarGraphFill/>,
            title:"Sales & Marketing",
            count:"(658)"
        },
        {
            img:<TbDeviceMobileCog/>,
            title:"Mobile Application",
            count:"(658)"
        },
        {
            img:<GrUserWorker/>,
            title:"Construction",
            count:"(658)"
        },
        {
            img:<GiCircuitry/>,
            title:"Information Technology",
            count:"(658)"
        },
        {
            img:<BsFillBuildingsFill/>,
            title:"Real Estate",
            count:"(658)"
        },
        {
            img:<MdOutlineLibraryBooks/>,
            title:"Content Writing",
            count:"(658)"
        }
    ]
 return(<>
    <div className="row categoty_outer">
     <div className="col-sm-1"></div>
     <div className="col-sm-10">
        <div className="row child_row pt-3">
            <center>
                <span className="category_feature">FEATURED TOUR PACKAGES</span>
                <h1 className="category_h1">Browse Top Categories</h1>
                <div className="row category_outer_box pt-5">
            { 
             category_arr.map((Category)=>{
                return(<>
                <div className="col-sm-3 mb-0 card_category"> 
                    <div className="child_div">
                     <div className="category_icon"> {Category.img}</div>
                     <div className="category_content"> {Category.title}</div>
                     <div className="category_num"> {Category.count}</div>

                    </div> 
                </div>
              
                </>)
             })
             }
                </div>
            </center>
        </div>
     </div>
     <div className="col-sm-1"></div>
    </div>
 </>)
}

export default Category;