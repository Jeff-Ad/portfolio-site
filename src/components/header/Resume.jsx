import React from "react";

import { Link } from "react-scroll";
import Rse from "../../images/cv.pdf";
function Resume() {
  return (
    <div className="resume">
      {/* <a href="#contact" className="btn btn-primary ani">
        Contact me
      </a> */}
      <Link
        className="btn btn-primary ani"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={200}
      >
        Contact me
      </Link>
      <a href={Rse} className="btn">
        Download Resumé
      </a>
    </div>
  );
}

export default Resume;
