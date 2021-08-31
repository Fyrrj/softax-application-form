import React from "react";
import "../styles/Footer.css";
import { logoSrc } from "../utils/links";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoSrc} alt="softax logo" className="footer__logo" />
      <p className="footer__p">
        Softax application form | created with <i className="fas fa-heart"></i>{" "}
        by{" "}
        <a
          className="footer__a"
          href="https://github.com/Fyrrj"
          target="_blank"
          rel="noreferrer"
        >
          Fyrrj
        </a>
      </p>
      <div className="footer__socials">
        <a
          className="socials__a"
          href="https://www.facebook.com/softaxpl"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook-square"></i>
        </a>
        <a
          className="socials__a"
          href="https://www.linkedin.com/in/klaudiusz-florek-b4a407167/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
