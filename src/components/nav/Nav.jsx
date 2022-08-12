import React from "react";
import "./nav.css";
import { FcHome } from "react-icons/fc";
import { BsPersonBoundingBox } from "react-icons/bs";
// import { GiBookshelf } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { FcBusinessContact } from "react-icons/fc";
import { Link } from "react-scroll";
// import { BrowserRouter } from "react-router-dom";
// import { HashLink as NavLink } from "react-router-hash-link";

function Nav() {
  // const navLinks = ({ isActive }) => {
  //   return {
  //     fontweight: isActive ? "active" : "",
  //   };
  // };
  const [activeNav, setActiveNav] = React.useState(false);
  // setActiveNav("");
  return (
    <div>
      <nav
        className={`navbar ${activeNav ? "active" : ""}
               `}
      >
        <Link to="hder" spy={true} smooth={true} offset={-5} duration={200}>
          <FcHome />
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-10} duration={200}>
          <BsPersonBoundingBox />
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-10}
          duration={100}
          onClick={() => setActiveNav(true)}
        >
          <RiServiceLine />
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={200}>
          <FcBusinessContact />
        </Link>
      </nav>
    </div>
  );

  // return (
  //   <BrowserRouter>
  //     <nav className="navbar">
  //       <NavLink
  //         to="#"
  //         onClick={() => setActiveNav("#")}
  //         className={`${activeNav === "#" ? "active" : ""}
  //         `}
  //       >
  //         <FcHome />
  //       </NavLink>
  //       <NavLink
  //         to="#about"
  //         onClick={() => setActiveNav("#about")}
  //         className={`
  //         ${activeNav === "#about" ? "active" : ""}`}
  //       >
  //         <BsPersonBoundingBox />
  //       </NavLink>

  //       <NavLink
  //         to="#portfolio"
  //         onClick={() => setActiveNav("#portfolio")}
  //         className={activeNav === "#portfolio" ? "active" : ""}
  //       >
  //         <RiServiceLine />
  //       </NavLink>
  //       <NavLink
  //         to="#contact"
  //         onClick={() => setActiveNav("#contact")}
  //         className={activeNav === "#contact" ? "active" : ""}
  //       >
  //         <FcBusinessContact />
  //       </NavLink>
  //     </nav>
  //   </BrowserRouter>
  // );
}

export default Nav;
