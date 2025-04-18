import React, { useEffect, useState } from "react"
import axios from "axios"
function AdminRecruiter(){
    const [recruiter, setRecruiter] = useState([])
    useEffect(()=>{
        fetchData()

    },[])
    const fetchData=async()=>{
      const response= await axios.get("http://localhost:9000/api/admin-recruiterList",{
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.data.code==200) {
            setRecruiter(response.data.data)

        }
    }
    const handleBlock=async(item)=>{
        const payload={
            status:item.isBlock?false:true
        }
        const response=await axios.put(`http://localhost:9000/api/admin-recruiterblock/${item._id}`,payload,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        if(response.data.code==200) {
            fetchData()
            alert("Status Updated Successfully...")
        }
    }
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                {
                    recruiter.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4 seeker_list my-2 mx-2" key={index}>
                            <div className="card p-2 h-100">
                                <div className="text-center">
                                    <img className=" img-fluid rounded-circle" height="10px" src={`http://localhost:9000/upload/${item.logo}`} alt={item.name} style={{ maxWidth: '100px', height: '100px' }} />
                                </div>
                                <div className="seeker_name text-center mt-2  ">{item.name}</div>
                                <table className="table table-borderless mt-3">
                                    <tbody>
                                        <tr>
                                            <td className="text-right font-weight-bold">Email:</td>
                                            <td className="text-left">{item.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Contact:</td>
                                            <td className="text-left">{item.contact}</td>
                                        </tr>
                                        <tr>
                                            <td className="text-right font-weight-bold">Location:</td>
                                            <td className="text-left">{item.jobLocation}</td>
                                        </tr>
                                        <tr>
                                            <div className="row">
                                                <td className="text-right font-weight-bold">
                                                    <center>
                                                        <div style={{transform:"translateX(90px)"}}className="btn btn_block_unblock" onClick={()=>handleBlock(item)}>
                                                            {item.isBlock?"Unblock":"Block"}
                                                        </div>
                                                    </center>
                                                </td>
                                            </div>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default AdminRecruiter
