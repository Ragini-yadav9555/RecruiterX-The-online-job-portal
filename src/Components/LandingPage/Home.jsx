  import Typewriter from 'typewriter-effect';
  import Category from './Category';
  import Resumes from './Resumes';
  import  Apply from './Apply'; 
  import Testimonial from './Testimonial';
  import Support from './Support';
  import BlogSection from './BlogSection';
  import RecentJobs from './RecentJobs';
function Home(){
  

    return (<>
     <div className="container-fluid">
      {/* start of hero section */}
        <div className="row  hero_section" >
             <div className="col-sm-2"></div>
             <div className="col-sm-5 pt-5">
<h1 className='typewriter_hero'> 
<Typewriter
  options={{
    strings: ['Find the most exciting startup jobs'],
    autoStart: true,
    loop: true,
  }}
/>
</h1>
             </div>
             <div className="col-sm-5"></div>
        </div>
      {/* category section */}
       <Category/>
       <Resumes/>
       <Apply/>
       <RecentJobs/>
       {/* <About/> */}
       <Testimonial/>
       <Support/>
       <BlogSection/>
     </div>
    </>)
}

export default Home;