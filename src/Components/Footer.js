import React from "react";
import "./Styles/Index.css";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="socials">
          <p className="copyright">©2022 L-Night</p>
          <div className="icons">
            <a
              className="links"
              href="https://www.facebook.com/groups/322950981168488"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div className="icons">
            <a
              className="links"
              href="https://www.meetup.com/Lnightberlin/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-meetup"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
