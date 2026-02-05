import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../images/logo2.svg";

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo" aria-label="Footer">
      <div className="container">

        {/* Baseline */}
        <div className="footer__baseline">
 

            <Link className="footer__logo-link" to="/">
              <img src={LogoImg} className="header__logo-color" alt="" />
            </Link>
          

          <p className="footer__signature">For business. For you.</p>

          <Link to="/contact-us/" className="footer__contact-us btn btn--text-reverse">
            Contact us
          </Link>
        </div>

        {/* Content */}
        <div className="footer__content">
          <ul className="footer__menu-list footer__menu-column1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/winners">Winners</Link>
            </li>
            <li>
              <Link to="/jury">Jury</Link>
            </li>
            <li>
              <Link to="/regulations">Regulations</Link>
            </li>
            <li>
              <Link to="/nominations">Nominations and Evaluation Criteria</Link>
            </li>
            <li>
              <Link to="/jurycriteria">Jury selection process</Link>
            </li>
                        <li>
              <Link to="/news">News</Link>
            </li>
          </ul>

          <div className="footer__local-contact">
            <p className="footer__local-contact__title">Find a local contact</p>
            <p className="footer__local-contact__text">
              We represent members in more than 170 countries across the world.
              Find the national committee closest to you.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <ul className="footer__menu-list footer__menu-notice">
            <li>
              <Link to="/copyright-and-trademarks/">
                Copyright and trademarks
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/">Terms and conditions</Link>
            </li>
            <li>
              <Link to="/privacy/">Privacy</Link>
            </li>
          </ul>

         
        </div>

      </div>
    </footer>
  );
}
