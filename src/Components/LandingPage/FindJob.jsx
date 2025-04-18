function FindJob(){

    const jobs_arr=[
        {
            img:"job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list3.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list4.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list1.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        },
        {
            img:"job-list2.png",
            jobTitle: 'Digital Marketer',
            companyName: 'Creative Agency',
            location: 'Athens, Greece',
            salary: '$3500 - $4000',
            jobBtn: 'Full Time',
            postedTime: '7 hours ago',
        }
    ]
    return (
        <>
        <div className="container-fluid findjob_header">
        <div className="row blur">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div className=" pt-5">
                <h2>Many jobs Available Here</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil rerum sunt nemo at natus voluptates voluptatibus voluptatem similique deleniti?</p>
                <h5>Select your Prefrenced Job</h5>
                </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
        </div>
        <div className="row">
            <div className="col-sm-3"></div>    
            <div className="col-sm-8">    
        <div className="row job_outer_box pt-3">
            { 
             jobs_arr.map((item)=>{
                return(<>
                <div className=" mb-0 jobcard_category pb-3"> 
                    <div className="jobchild_div ps-3">
                        <div className="row">
                        <div className="col-sm-2 content_col">
                     <div className="jobs_icon me-3"> <img src={item.img}/></div>
                     
                     </div>
                     <div className="col-sm-8 content_col">
                     <div className="jobs_title"> <h3>{item.jobTitle}</h3></div>
                     <div className="jobs_name me-5"> {item.companyName}</div>
                     <div className="jobs_location me-5"> {item.location}</div>
                     <div className="jobs_salary me-5"> {item.salary}</div>
                     
                     
                     </div>
                     <div className="col-sm-2 content_col">
                     <div className="jobs_btn mt-4 ms-4 btn">{item.jobBtn}</div>
                     <div className="jobs_time mt-2 ms-4"> {item.postedTime}</div>
                     </div>
                     </div>
                    </div> 
                </div>
              
                </>)
             })
             }
        </div>
        </div>
        <div className="col-sm-1"></div>
        </div>
        </>
    )
}

export default FindJob