import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiIcq } from "react-icons/si";
function HeaderSocials() {
  return (
    <div className="header__socails gap animSoc">
      <a
        href="https://www.linkedin.com/in/jeffrey-adakole-452246135/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="fav" />
      </a>
      <a href="https://github.com/Jeff-Ad" target="_blank" rel="noreferrer">
        <FaGithub className="fav" />
      </a>
      <a href="https://twitter.com/techi_jeff" target="_blank" rel="noreferrer">
        <FaTwitter className="fav" />
      </a>
      <a
        href="https://api.icq.com/send?phone=+347066163175"
        target="_blank"
        rel="noreferrer"
      >
        <SiIcq className="fav" />
      </a>
    </div>
  );
}

export default HeaderSocials;
