import React from "react";
import PortData from "../../portData";
import Portfolio from "./Portfolio";
// import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
function PortfolioHead() {
  const dataPort = PortData.map((data) => {
    return <Portfolio key={data.id} info={data} />;
  });
  React.useEffect(() => {
    //globalization
    AOS.init({});
    AOS.refresh();
  }, []);
  return (
    <section id="portfolio">
      <div
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <h5>Few Things I've Built</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">{dataPort}</div>
      </div>
    </section>
  );
}

export default PortfolioHead;
