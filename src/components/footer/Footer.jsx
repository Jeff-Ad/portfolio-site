import React from "react";
// import Bit from "../../images/BloodMoneyinTech.pdf";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer__link" id="footer">
      <a href="https://github.com/Jeff-Ad" target="_blank" rel="noreferrer">
        <div className="footer__content">
          <small>&copy; Designe And Built By Jeffrey Adakole</small>
        </div>
      </a>
      {/* <div className="footer__content">
        <a href={Bit} className="btn btn-primary ani">
          Download Gift 🎁🤩
        </a>
      </div> */}
    </footer>
  );
}

export default Footer;
