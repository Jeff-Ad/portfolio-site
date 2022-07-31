import React from "react";
import Resume from "./Resume";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import MyPix from "../../images/jman.jpg";
function Header() {
  return (
    <header className="container head">
      <HeaderSocials />
      <div className="myphoto">
        <div className="about__me">
          <div className="imgh"></div>
          <img className="mg" src={MyPix} alt="mn" />
        </div>
      </div>
      <div className="header__container">
        <h5>Hello, I'm</h5>
        <h1>Jeffrey Adakole</h1>
        <h5 className="text-light">Software Developer</h5>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <Resume />
      </div>
    </header>
  );
}

export default Header;
