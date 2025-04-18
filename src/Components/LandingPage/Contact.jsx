


function Contact(){
    return (
        <>
        <div className="row contact_row mb-3">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
                <div className="row contact_container mt-5 pt-2 ">
                    <div className="col-sm-6  ">
                        <img className="contact_img " src="contact.jpg" alt="" />
                    </div>
                    <div className="col-sm-6 ">
                <h2 className="contact_heading">Get in touch</h2>
                <p className="contact_para">The right move at the right time saves your investment.Live in the dream of expending your business.</p>
                <div className="contact_form m-4">
                    <div className="row mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                    </div>
                    <div className="row mt-4">
                    <input type="text" className="form-control" placeholder="Enter Your Company(optional)" />
                    </div>
                    <div className="row mt-4">
                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                    </div>
                    <div className="row mt-4">
                    <input type="number" className="form-control" placeholder="Enter Your Number" />
                    </div>
                    <div className="row mt-4 contact_msg">
                    <textarea type="text" className="form-control" placeholder="Message"></textarea>
                    </div>
                    <div className="row mt-4">
                        <input className="contact_submit form-control " type="submit"  value="Submit"/>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div className="col-sm-1"></div>
        </div>
        </>
    )
}

export default Contact