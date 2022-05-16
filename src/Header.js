import React from "react";

function Headers(header) {
    return(
        <>
              <li className="nav-item">
                    <a className="nav-link" href={header.navlink}>{header.navtitle}</a>
              </li>
        </>
    )
};

export default Headers;