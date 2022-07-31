import React from "react";
import "./nav.css";
import { FcHome } from "react-icons/fc";
import { BsPersonBoundingBox } from "react-icons/bs";
// import { GiBookshelf } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { FcBusinessContact } from "react-icons/fc";
import { BrowserRouter } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

function Nav() {
  // const navLinks = ({ isActive }) => {
  //   return {
  //     fontweight: isActive ? "active" : "",
  //   };
  // };
  const [activeNav, setActiveNav] = React.useState("#");

  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink
          to="#"
          onClick={() => setActiveNav("#")}
          className={`${activeNav === "#" ? "active" : ""}
          `}
        >
          <FcHome />
        </NavLink>
        <NavLink
          to="#about"
          onClick={() => setActiveNav("#about")}
          className={` 
          ${activeNav === "#about" ? "active" : ""}`}
        >
          <BsPersonBoundingBox />
        </NavLink>
        {/* <NavLink
          to="#exp"
          onClick={() => setActiveNav("#exp")}
          className={activeNav === "#exp" ? "active" : ""}
        >
          <GiBookshelf />
        </NavLink> */}
        <NavLink
          to="#portfolio"
          onClick={() => setActiveNav("#portfolio")}
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <RiServiceLine />
        </NavLink>
        <NavLink
          to="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <FcBusinessContact />
        </NavLink>
      </nav>
    </BrowserRouter>
  );
}

export default Nav;
