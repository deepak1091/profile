import React from "react";

function Banner(bannercont) {
    return(
        <>
              <h1>{bannercont.bannertitle}</h1>
              <h3>{bannercont.bannersubtitle}</h3>
              <a className="btn btn-primary" href='#'>{bannercont.bannerbutton}</a>
              <img src="{bannercont.bannerimage}" alt=""/>
        </>
    )
};

export default Banner;