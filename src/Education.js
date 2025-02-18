import React from "react";

function Educations(education) {
  return(
      <>
          <li>
            <div className="company-details">            
            <h4>{education.eduname}</h4>
            <span className="company-post">{education.edupost}</span> 
            </div>
            <div className="year-box">
            <span className="year">{education.eduyear}</span>         
            </div>
          </li>
      </>
  )

}


export default Educations;