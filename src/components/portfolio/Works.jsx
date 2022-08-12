import React from "react";
import MyPix from "../../images/jeff.jpg";
import { HashLink as Link } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import data from "../../port";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
function Works() {
  React.useEffect(() => {
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <div className="container contain">
      {data.map(
        ({
          id,
          image,
          title,
          para,
          preV,
          code,
          str,
          imagee,
          titlee,
          paraa,
          preVv,
          codee,
          strr,
        }) => {
          return (
            <>
              <div className="leftt">
                <div className="imghh"></div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <div className="imm">
                    <img src={image} alt="jee" />
                  </div>
                </div>
              </div>
              <div className="rightt">
                <h3
                  data-aos="fade-down"
                  data-aos-offset="50"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {title}
                </h3>
                <p
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {para}
                </p>
                <div className="portfolio__item-ctaaa">
                  <BrowserRouter>
                    <a
                      href={preV}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      preview
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {str}
                    </a>
                  </BrowserRouter>
                </div>
              </div>
              <div className="left">
                <div className="imgh"></div>
                <div
                  data-aos="fade-right"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <div className="im">
                    <img src={imagee} alt="jee" />
                  </div>
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
                  {titlee}
                </h3>
                <p
                  data-aos="fade-left"
                  data-aos-offset="50"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  {paraa}
                </p>
                <div className="portfolio__item-ctaaa">
                  <BrowserRouter>
                    <a
                      href={preVv}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      preview
                    </a>
                    <a
                      href={codee}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      {strr}
                    </a>
                  </BrowserRouter>
                </div>
              </div>
            </>
          );
        }
      )}
    </div>
  );
}

export default Works;
