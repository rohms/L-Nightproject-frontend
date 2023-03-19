import React from "react";
import "./Styles/Index.css";
import "./Styles/Style.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="footer__socials">
          <div className="footer__icons">
            <a
              className="footer__links"
              href="https://www.facebook.com/groups/322950981168488"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="footer__icons">
            <a
              className="footer__links"
              href="https://www.meetup.com/Lnightberlin/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-meetup"></i>
            </a>
          </div>
          <div className="footer__icons">
            <a
              className="footer__links"
              href="https://instagram.com/lnightberlin?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <p className="footer__copyright">©2022 L-Night</p>
      </footer>
    </div>
  );
};

export default Footer;
