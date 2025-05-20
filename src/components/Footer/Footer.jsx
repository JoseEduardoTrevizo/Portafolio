import React from "react";
import git from "../../Images/github-brands.svg";
import linkedin from "../../Images/linkedin-brands.svg";
import instagram from "../../Images/instagram-brands.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <p>Jose Eduardo Trevizo Pizano</p>
        <p>Copyright © 2025 TP</p>
        <div className="footer__social-media">
          <a href="https://www.linkedin.com/in/eduardo-trevizo-pizano/">
            <img src={linkedin} alt="Linked In" className="footer__linked" />{" "}
          </a>
          <a href="https://www.instagram.com/trevizopizano/">
            <img
              src={instagram}
              alt="Instagram"
              className="footer__instagram"
            />{" "}
          </a>
          <a href="https://github.com/JoseEduardoTrevizo">
            {" "}
            <img src={git} alt="Git Hub" className="footer__git" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
