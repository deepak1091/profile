import React from "react";

function Experiences(experience) {
  return(
      <>
          <li>
            <div className="company-details">            
            <h4>{experience.compname}</h4>
            <span className="company-post">{experience.comppost}</span> 
            </div>
            <div className="year-box">
            <span className="year">{experience.compyear}</span>         
            </div>
          </li>
      </>
  )

}


export default Experiences;