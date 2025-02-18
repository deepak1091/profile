import React from "react";

function Skills(skill) {
  return(
      <>
          <li>
          <div className="skill-box">
          <span className="skill-icon"><img src={skill.skillicon} alt=""></img></span>
          <span className="skill-name">{skill.skillname}</span> 
          </div>
          </li>
      </>
  )

}


export default Skills;