import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIcq } from "react-icons/si";
function HeaderSocials() {
  return (
    <div className="header__socails animSoc">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin className="fav" />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub className="fav" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">
        <FaTwitter className="fav" />
      </a>
      <a href="https://icq.com" target="_blank" rel="noreferrer">
        <SiIcq className="fav" />
      </a>
    </div>
  );
}

export default HeaderSocials;
