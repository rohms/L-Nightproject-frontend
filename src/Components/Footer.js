import React from "react";
import "./Styles/Index.css";
import "./Styles/Style.css";
import { NavLink } from "react-router-dom";
import { Seo } from "./Seo";

const Footer = () => {
  return (
    <>
      <Seo
        title="L-Night | Berlin"
        description="L-Night Website Footer"
        type="footer"
      />
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
        <p className="footer__copyright">Copyright © 2023 L-Night</p>
        <div className="legal-stuff">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
