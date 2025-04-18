import { AiOutlineFileSearch } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";


function Apply() {
    return (
        <>
            <div className="row apply_image text-center mt-2">
                <p className="text_color mt-4">APPLY PROCESS</p>
                <h1 className="child_div_apply">How it works</h1>

                <div className="row mt-4">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="row ">
                            <div className="col-sm-4 box_border">
                                <div className="job_search">
                                    <h1 className="child_div_apply_icon mt-5"><AiOutlineFileSearch /></h1>
                                    <h4 className="child_div_apply">1.Search a job</h4>
                                    <p className="tex p-3">Text editing and text formatting  etc.), fonts, and sizes. It was developed to integrate the features included</p>
                                </div>
                            </div>

                            <div className="col-sm-4 box_border">
                                <div className="job_search">
                                    <h1 className="child_div_apply_icon mt-5"><BsPersonWorkspace/></h1>
                                    <h4 className="child_div_apply">2.Apply for job</h4>
                                    <p className="tex p-3">Text editing and text formatting  etc.), fonts, and sizes. It was developed to integrate the features included</p>
                                </div>
                            </div>
                            <div className="col-sm-4 box_border">
                                <div className="job_search">
                                    <h1 className="child_div_apply_icon mt-5"><FaUserSecret/></h1>
                                    <h4 className="child_div_apply">3.Get your job</h4>
                                    <p className="tex p-3">Text editing and text formatting  etc.), fonts, and sizes. It was developed to integrate the features included</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-sm-2"></div>

                </div>
            </div>
        </>
    )
}
export default Apply;