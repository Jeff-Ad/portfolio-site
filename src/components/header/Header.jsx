import React from "react";
import Resume from "./Resume";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
import MyPix from "../../images/jman.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);

  return (
    <header className="container head" id="hder">
      <HeaderSocials />
      <div
        className="myphoto"
        data-aos="fade-right"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
      >
        <div className="about__me">
          <div className="imgh"></div>
          <img className="mg" src={MyPix} alt="mn" />
        </div>
      </div>
      <div className="header__container">
        <h5
          data-aos="fade-down"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Hello, I'm
        </h5>
        <h1
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Jeffrey Adakole
        </h1>
        <h5
          className="text-light"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Software Developer
        </h5>
        <a href="#contact" className="scroll__down fav">
          Scroll Down
        </a>
        <Resume />
      </div>
    </header>
  );
}

export default Header;
