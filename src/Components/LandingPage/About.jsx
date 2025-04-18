function About(){

    const about_arr=[
        {
            img:"job-list1.png",
            name: 'Arlene McCoy',
            title: 'Frontend Devloper',
            location: 'New Yark, US',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list2.png",
            name: 'Floyed Milws',
            title: 'UI/UX designer',
            location: 'Athens, Greece',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list1.png",
            name: 'Devon Lane',
            title: 'Frontend Devloper',
            location: 'Chicago, US',
            review: '$3500 - $4000',
           
        },
        {
            img:"job-list2.png",
            name: 'Jerome Bell',
            title: 'Backend Devloper',
            location: 'Mumbai, India',
            review: '$3500 - $4000',
           
        }
    ]




    return (
        <>
        <div className="container-fluid about_header">
            <div className="row about_header_content pt-5">
                <h1>About Us</h1>
                <h5>Get the latest jobs, updates and tips</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
                <div className="row about_intro pt-4">
                    <span>OUR COMPANY</span>
                    <h2><b>About Our Company</b></h2>
                    <p>TalentHunt Job Portal is a specialized platform designed to connect job seekers with potential employers. It typically 
                        serves as a bridge between professionals looking for new opportunities and companies searching for skilled talent.
                        TalentHunt typically aims to streamline the job search and recruitment process, making it easier for both sides to 
                        find the perfect match efficiently.</p>
                        <br />
                       <div className="about_image"> <img src="/Abo.jpg"/></div>
                       
                </div>
                <div className="row ps-3 pt-3">
            <h2>What we can do?</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, assumenda 
                laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                 Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.</p>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, assumenda 
                laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                 Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.</p>
            <br />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, assumenda 
                laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                 Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.</p>
        </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
        <br />
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 ps-3 team_header">
                <span>OUR COMPANY</span>
                <h2>Meet Our Team</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id voluptas vel voluptatem nobis, quod commodi velit, assumenda 
                laudantium sint quos sapiente, suscipit deleniti laboriosam facilis iste earum alias dicta quo repellat accusamus nemo ipsum!
                 Doloremque quo sapiente accusantium, aut tempora, incidunt nulla iusto magni ex maiores qui nemo consectetur voluptate.</p>

                 <div className="row">
                 { 
             about_arr.map((card)=>{
                return(<>
                <div className="col-sm-5 ms-2 mt-5 team_card"> 
                    <div className="teamchild_div">
                     <div className="team_icon"> <img src={card.img}/></div>
                     <div className="team_name"> {card.name}</div>
                     <div className="team_content"> {card.title}</div>
                     <div className="team_content"> {card.location}</div>
                     <div className="team_review"> {card.review}</div>

                    </div> 
                </div>
              
                </>)
             })
             }
                 </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
        <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8 ps-3 pt-5">
                <h2>News and Blog</h2>
                <p>Get the latest news, update and blogs</p>
                <div className="row blog_row">
        <div className="col-sm-6">
            <div className="img_content">24 <br /> Now</div>
            <img src="/home-blog1.jpg" alt="Blog" style={{width: 440}} />
            <br />
            <p style={{paddingTop: 30, paddingLeft: 30, fontSize:12}}>| Properties</p>
            <h2 style={{paddingLeft: 30, fontSize:18}}>Footprints in Time is perfect <br /> House in Kurashiki</h2>
            <br />
            <button className="blog_btn" type="button">READ MORE</button>
        </div>
        <div className="col-sm-6">
        <div className="img_content">24 <br /> Now</div>
            <img src="/home-blog2.jpg" alt="Blog" style={{width: 440}} />
            <br />
            <p style={{paddingTop: 30, paddingLeft: 30, fontSize:12}}>| Properties</p>
            <h2 style={{paddingLeft: 30,fontSize:18}}>Footprints in Time is perfect <br /> House in Kurashiki</h2>
            <br />
            <button className="blog_btn" type="button">READ MORE</button>
        </div>
       </div>
            </div>
            <div className="col-sm-2"></div>
        </div>
        
        </>
    )
}

export default About