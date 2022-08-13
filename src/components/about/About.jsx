import React from "react";
import "./about.css";
import AboutHeader from "./AboutHeader";
import { GiBookshelf } from "react-icons/gi";
// import { BrowserRouter } from "react-router-dom";
import { BsPatchCheckFill } from "react-icons/bs";
// import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  // const { ref: myRef, inView: myElvisi } = useInView();
  // const [miElvisi, setMiElvisi] = React.useState(false);
  // const myRef = React.useRef();
  // console.log("miElvisi", miElvisi);
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     setMiElvisi(entry.isIntersecting);
  //   });
  //   observer.observe(myRef.current);
  // }, []);ref={myRef} className={`sec ${myElvisi ? "show" : ""}`}
  React.useEffect(() => {
    //globalization
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <section id="about">
      <div>
        <h5
          data-aos="fade-down"
          data-aos-offset="50"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Get To Know More
        </h5>
        <h2
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          About me
        </h2>
        {/* <article className="">
          </article> */}
        <AboutHeader />
        <div className="container about__container">
          {/* <div className="about-image-content">
          <div className="about__mee">
            <div className="about__me-image">
              <img src={process.env.PUBLIC_URL + "images/jeff.jpg"} alt="" />
            </div>
          </div>
          <p>
            Hello, I'm JEFFREY ADAKOLE, a graduate of Information and Media
            Technology (B.Tech) from the Federal University of Technology Minna
            who is specialized in building, developing and occasionally
            designing web apps
          </p>
        </div> */}
          <div className="about__content">
            <div className="about__cards">
              <div
                data-aos="fade-right"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
              >
                <article className="about__card">
                  <div className="about__icon-head">
                    <GiBookshelf className="about__icon" />
                    <h3>Software And Tools I've Worked With </h3>
                  </div>
                  <h3>Languages & Library</h3>
                  <div
                    className="lang"
                    data-aos="fade-up"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                  >
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>HTML</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>CSS</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Bootstrap</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>JavaScript</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>React</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>PHP</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Mysql</small>
                    </div>
                  </div>

                  <h3>Tools & Platforms</h3>
                  <div className="tools">
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Git</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Figma</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Netlify</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Heroku</small>
                    </div>
                    <div className="about__icon-heads">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>WordPress</small>
                    </div>
                  </div>
                </article>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <article className="about__card">
                  <div className="about__icon-head">
                    <GiBookshelf className="about__icon" />
                    <h3>Soft Skills </h3>
                  </div>
                  <div className="soft">
                    <div className="about__icon-soft">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>
                        Critical Thinking <span>& Problem Solving</span>
                      </small>
                    </div>
                    <div className="about__icon-soft">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Teamwork & Collaboration</small>
                    </div>
                    <div className="about__icon-soft">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>
                        Interpersonal Comm<span>unication</span>
                      </small>
                    </div>
                    <div className="about__icon-soft">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Leadership</small>
                    </div>
                    <div className="about__icon-soft">
                      <BsPatchCheckFill className="about__skills-icon" />
                      <small>Project Management</small>
                    </div>
                  </div>
                </article>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="20"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-once="true"
              >
                <article className="about__card">
                  <div className="about__icon-head">
                    <GiBookshelf className="about__icon" />
                    <h3>Interests </h3>
                  </div>
                  <div className="about__icon-interest">
                    <BsPatchCheckFill className="about__skills-icon" />
                    <small>Sound Engineering (SRS)</small>
                  </div>
                  <div className="about__icon-interest">
                    <BsPatchCheckFill className="about__skills-icon" />
                    <small>Guitar 🎸</small>
                  </div>
                  <div className="about__icon-interest">
                    <BsPatchCheckFill className="about__skills-icon" />
                    <small>Music (Singing & Writing) </small>
                  </div>
                  <div className="about__icon-interest">
                    <BsPatchCheckFill className="about__skills-icon" />
                    <small>Web 3 🐒 </small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
