import React from "react";
import PortData from "../../portData";
import Portfolio from "./Portfolio";
// import { useInView } from "react-intersection-observer";
// import Works from "./Works";
import AOS from "aos";
import "aos/dist/aos.css";
function PortfolioHead() {
  const dataPort = PortData.map((data, index) => {
    return <Portfolio key={data.id} info={data} index={index} />;
  });
  React.useEffect(() => {
    //globalization
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <section id="portfolio">
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
          Few Things I've Built
        </h5>
        <h2
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Portfolio
        </h2>
        {/* <Works /> */}
        {/* <Works /> */}
        <br />
        <div className="container portfolio__container">{dataPort}</div>
      </div>
    </section>
  );
}

export default PortfolioHead;
