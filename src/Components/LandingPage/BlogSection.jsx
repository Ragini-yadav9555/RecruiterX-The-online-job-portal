



function BlogSection(){
    return (
        <>
        <div className="container blog_container">
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-10">
                <p style={{textAlign: "center", paddingTop: 60, color: "#ff2642"}}>OUR LATEST BLOG</p>
       <h1 style={{ textAlign: "center", color:"#2b2b5f"}}>Our recent news</h1>
       <div className="row blog_row">
        <div className="col-sm-6">
            <div className="img_content">24 <br /> Now</div>
            <img src="/home-blog1.jpg" alt="Blog" style={{width: 440}} />
            <br />
            <p style={{paddingTop: 30, paddingLeft: 30, fontSize:12}}>| Properties</p>
            <h2 style={{paddingLeft: 30,fontSize:18}}>Footprints in Time is perfect <br /> House in Kurashiki</h2>
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
                <div className="col-sm-1"></div>
            </div>
       
       </div>
        </>
    )
}

export default BlogSection