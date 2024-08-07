import React from 'react';
import MyPix from '../../images/jeff.png';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';
import './about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutHeader() {
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <div className="container contain">
      <div className="left">
        <div className="imgh"></div>
        <div
          className="im"
          data-aos="fade-right"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <img src={MyPix} alt="jee" />
        </div>
      </div>
      <div className="right">
        <h3
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Hellooo!,
        </h3>
        <p
          data-aos="fade-left"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          I'm JEFFREY ADAKOLE, a graduate of Information and Media Technology
          (B.Tech) who builds, develop and design responsive webpages
        </p>
        <div className="portfolio__item-ctaa">
          <BrowserRouter>
            <Link
              to="#contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Get in Touch
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
