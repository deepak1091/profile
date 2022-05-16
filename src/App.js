import React from "react";
import Banner from "./Banner";
import Bannerdata from "./Bannerdata";
import Headers from "./Header";
import headerdata from "./Headerdata";
import Abouts from "./About";
import aboutdata from "./Aboutdata";
import Skillsdata from "./Skilldata";
import Skills from "./Skill";
import Experiences from "./Experience";
import Experiencedata from "./Experiencedata";
import Educations from "./Education";
import Educationdata from "./Educationdata";
import Contactdata from "./Contactdata";
import Contacts from "./Contact";
import Owldemo1 from './Owldemo1'  
import Footers from "./Footer";


const skillh = "Skills";
const experienceh = "Experiences";
const educationh = "Education";
const portfolioh = "Portfolio";
const contacth = "Contact Us";

const App = () =>{
  return (
    <>
    <div className="App">
      <header className="fixed-top "> 
          <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="images/logo.png"  alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                {headerdata.map((val2) => {
                        return (
                            <Headers
                                key={val2.navid}
                                navtitle={val2.navtitle}
                                navlink={val2.navlink}
                            />
                        );
                    })}
                </ul>
            </div>
         </div>
        </nav>
      </header>
<section id="Main" className="main-banner">
  <div className="container">
    <div className="row">
      <div className="col-md-6 m-auto">
        {Bannerdata.map((val2) => { 
        return(
          <Banner
            key={val2.bannerid}
            bannertitle={val2.bannertitle}
            bannersubtitle={val2.bannersubtitle}
            bannerbutton={val2.bannerbutton}
          />
           );
        })}
      </div>
        <div className="col-md-6">
       <div className="profile-banner"> <img className="img-fluid" src="images/profile.png"  alt="profile" /></div>
        </div>
    </div>
  </div>
</section>
    
<section id="About" className="about bg-white ptb">
  <div className="container">
    <div className="row">
    <div className="col-md-6">
        <img className="img-fluid" src="images/about.png"  alt="aboutimage" />
        </div>
      <div className="col-md-6 m-auto">
        {aboutdata.map((val2) => { 
        return(
          <Abouts
            key={val2.aboutid}
            aboutsubtitle={val2.aboutsubtitle}
            abouttitle={val2.abouttitle}
            aboutdes = {val2.aboutdes}
            aboutdes2 = {val2.aboutdes2}
          />
           );
        })}
      </div>       
    </div>
  </div>
</section>

  <section className="skills-sec pb-5 pt150 text-white">
    <div className="container">
      <div className="row">
    <div className="col-sm-12 text-center"> <h2 className="text-white">{skillh}</h2></div>
    <ul className="skill-data">
      {Skillsdata.map((val2) => {
        return(
        <Skills
         key={val2.skillid}
         skillicon={val2.skillicon}
         skillname={val2.skillname} 
        />
        );
      })}
    </ul>
      </div>
 <div className="py-5 experience-sec">
      <div className="row">
        <div className="col-sm-12 text-center"> <h2 className="text-white">{experienceh}</h2></div>
        <ul>
          {Experiencedata.map((val2) => {
            return(
            <Experiences
            key={val2.expid}
            compname={val2.compname}
            comppost={val2.comppost} 
            compyear={val2.compyear} 
            />
            );
          })}
        </ul>
      </div>
</div>
 <div className="pt-5 pb150 experience-sec education-sec">
      <div className="row">
        <div className="col-sm-12 text-center"> <h2 className="text-white">{educationh}</h2></div>
        <ul>
          {Educationdata.map((val2) => {
            return(
            <Educations
            key={val2.eduid}
            eduname={val2.eduname}
            edupost={val2.edupost} 
            eduyear={val2.eduyear} 
            />
            );
          })}
        </ul>
      </div>
</div>
      </div> 
  </section>

      <section id="Portfolio" className="portfolio-sec ptb bg-white">
        <div className="container">
          <div className="row">
          <div className="col-sm-12"> <h2>{portfolioh}</h2></div>
          <div className="col-sm-12">
          <Owldemo1/>  
          </div>
          </div>
          </div> 
      </section>


      <section id="Contact" className="contact-sec ptb text-white text-center">
        <div className="container">
          <div className="row">
          <div className="col-sm-12"> <h2 className="text-white">{contacth}</h2></div>
         
          {Contactdata.map((val2) => {
            return(
                <Contacts
                key={val2.cotid}
                coticon={val2.coticon}
                cotname={val2.cotname}               
                />
                );
          })}
          </div>
          </div> 
      </section>

<footer>
<div className="container">
<div className="row">
  <Footers/>
  </div>

</div>

</footer>


    </div>
    </>
  );
}

export default App;
