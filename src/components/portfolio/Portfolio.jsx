import React from "react";
// import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio({ info }) {
  React.useEffect(() => {
    //globalization
    AOS.init({});
    AOS.refresh();
  }, []);
  const str = "<code />";
  return (
    <article className="portfolio__item">
      <div
        data-aos="fade-up-left"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="portfolio__item-image">
          <img className="" src={info.image} alt={info.title} />
        </div>
        <h3>{info.title}</h3>
        <h5>{info.para}</h5>
        <div className="portfolio__item-cta">
          <BrowserRouter>
            <a
              href={info.preV}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              preview
            </a>
            <a
              href={info.code}
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              {str}
            </a>
          </BrowserRouter>
        </div>
      </div>
    </article>
  );
}

export default Portfolio;
