import React from "react";
import { FaAccessibleIcon } from "react-icons/fa";

function Contacts(contact) {
  return(
    <>
      <div className="col-lg-4">
        <div className="contact-info">
            <span className="contacticon">
            <i className={`fa-solid ${contact.coticon}`}></i>            
            </span>
            <h4>{contact.cotname}</h4> 
        </div>
    </div>
    </>
  )
} 

export default Contacts;
