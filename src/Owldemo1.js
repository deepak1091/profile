import React from "react";
import OwlCarousel from 'react-owl-carousel';  

//Owl Carousel Settings
const options = {
  loop:true,
  margin: 30,
  nav: true,
  dots:false,
  autoplay:true,
  responsiveClass: true,  
  responsive: {
      0: {
          items:2,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 3,
      }
  },
};

function Owldemo1(){
    return(              
        <OwlCarousel className="owl-theme"  {...options}>  
           <div className="item">
           <a href="https://www.mydeposits.co.uk/"><img  className="img" src='images/img1.png' alt="MyDeposits"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.mydeposits.co.uk/">MyDeposits</a></div>
           </div>  
           <div className="item">
           <a href="https://www.envisionpharmagroup.com/"><img className="img" src= 'images/envision.png' alt="Envision Pharma Group"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.envisionpharmagroup.com/">Envision Pharma Group</a></div>
           </div>  
           <div className="item">
           <a href="https://www.latrinitaine.com/"><img  className="img" src= 'images/img2.png' alt="La Trinitaine"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.latrinitaine.com/">La Trinitaine</a></div>
           </div>  
           <div className="item">
           <a href="https://www.vincentflooring.co.uk/"><img  className="img" src= 'images/img3.png' alt="Vincent Flooring"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.vincentflooring.co.uk/">Vincent Flooring</a></div>
           </div>  
           <div className="item">
           <a href="https://study-online.sussex.ac.uk/"><img  className="img" src= 'images/sussex.png' alt="sussex"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://study-online.sussex.ac.uk/">University of Sussex</a></div>
           </div>  
           <div className="item">
           <a href="https://www.thebatterystore.com.au/"><img className="img" src='images/thebatterystore.png' alt="thebatterystore"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.thebatterystore.com.au/">The Battery Store</a></div>
           </div>  
           <div className="item">
           <a href="https://www.gerstel.com/"><img className="img" src= 'images/gerstel.png' alt="gerstel"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.gerstel.com/">Gerstel</a></div>
           </div> 
           <div className="item">
           <a href="https://globalonline.mmu.ac.uk/"><img className="img" src= 'images/mmu.png' alt="mmu"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://globalonline.mmu.ac.uk/">Manchester Metropolitan University</a></div>
           </div>  
           <div className="item">
           <a href="https://www.securemeters.com/"><img className="img" src= 'images/secure.png' alt="secure"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.securemeters.com/">Secure Meters</a></div>
           </div> 
            <div className="item">
           <a href="https://dogfender.co.uk/"><img className="img" src= 'images/dogfender.png' alt="dogfender"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://dogfender.co.uk/">Dogfender</a></div>
           </div> 
           <div className="item">
           <a href="https://onlinecourses.bsg.ox.ac.uk/"><img className="img" src= 'images/onlinecourses.png' alt="onlinecourses"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://onlinecourses.bsg.ox.ac.uk/">Online Courses</a></div>
           </div>  
           <div className="item">
           <a href="https://www.specialceramics.in/"><img className="img" src= 'images/special-ceramics.png' alt="special-ceramics"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.specialceramics.in/">Special Ceramics</a></div>
           </div>     
           <div className="item">
           <a href="https://www.aquila-plumbing.com/"><img className="img" src= 'images/aquila-plumbing.png' alt="aquila-plumbing"/></a>
           <div className="port-title"><a target="_blank" rel="noreferrer" href="https://www.aquila-plumbing.com/">Aquila Plumbing</a></div>
           </div> 
                   
      </OwlCarousel>        
    )
}

export default Owldemo1;  
