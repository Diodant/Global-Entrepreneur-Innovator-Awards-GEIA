import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo" aria-label="Footer">
      <div className="container">
        {/* Baseline */}
        <div className="footer__baseline">
          <a className="footer__logo-link" href="https://iccwbo.org/">
            <noscript>
              {/* data-location="logo" */}
              <img
                src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_LOGO_PRIMARY_1COLOR_WHITE_RGB.png?w=220"
                className="lazyload footer__logo-white"
                alt=""
              />
            </noscript>

            <picture>
              <source
                data-srcset="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_LOGO_PRIMARY_1COLOR_WHITE_RGB.png?w=110, https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_LOGO_PRIMARY_1COLOR_WHITE_RGB.png?w=220 2x"
                srcSet="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_LOGO_PRIMARY_1COLOR_WHITE_RGB.png?w=110, https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_LOGO_PRIMARY_1COLOR_WHITE_RGB.png?w=220 2x"
                data-crop="false"
              />
              <img
                src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                className="footer__logo-white lazyloaded"
                alt=""
              />
            </picture>
          </a>

          <p className="footer__signature">For business. For you.</p>

          <a href="https://iccwbo.org/contact-us/" className="footer__contact-us btn btn--text-reverse">
            Contact us
          </a>
        </div>

        {/* Content */}
        <div className="footer__content">
          <ul id="menu-footer-column-1" className="footer__menu-list footer__menu-column1">
            <li id="menu-item-491696" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491696">
              <a href="https://iccwbo.org/about-icc-2/">Who we are</a>
            </li>
            <li id="menu-item-491697" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491697">
              <a href="https://iccwbo.org/become-a-member/">Become a member</a>
            </li>
            <li id="menu-item-491698" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491698">
              <a href="https://iccwbo.org/governance/">Governance</a>
            </li>
            <li id="menu-item-491699" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491699">
              <a href="https://iccwbo.org/world-chambers-federation/">World chambers</a>
            </li>
            <li id="menu-item-491700" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491700">
              <a href="https://iccwbo.org/careers/">Careers</a>
            </li>
            <li id="menu-item-491766" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491766">
              <a href="https://iccwbo.org/contact-us-online-enquiry/">Online enquiry</a>
            </li>
          </ul>

          <ul id="menu-footer-column-2" className="footer__menu-list footer__menu-column2">
            <li id="menu-item-491705" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-491705">
              <Link to="/news-publications/">News &amp; publications</Link>
            </li>
            <li id="menu-item-491702" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491702">
              <a href="https://iccwbo.org/global-insights/">Global insights</a>
            </li>
            <li id="menu-item-491703" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-491703">
              <a href="https://iccwbo.org/business-solutions/">Business solutions</a>
            </li>
            <li id="menu-item-491704" className="menu-item menu-item-type-post_type menu-item-object-page current-page-ancestor menu-item-491704">
              <a href="https://iccwbo.org/dispute-resolution/">Dispute resolution</a>
            </li>
          </ul>

          <div className="footer__local-contact">
            <p className="footer__local-contact__title">Find a local contact</p>
            <p className="footer__local-contact__text">
              We represent members in more than 170 countries across the world. Find the national committee closest to you.
            </p>

            <a
              href="https://iccwbo.org/national-committees/"
              className="footer__local-contact__button btn btn--rounded"
            >
              Find a national committee
              <svg className="icon icon-external" aria-hidden="true" focusable="false">
                <use
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-external"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <ul id="menu-footer-legal-notice" className="footer__menu-list footer__menu-notice">
            <li id="menu-item-472400" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-472400">
              <a href="https://iccwbo.org/icc-constitution/">ICC Constitution</a>
            </li>
            <li id="menu-item-472399" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-472399">
              <a href="https://iccwbo.org/copyright-and-trademarks/">Copyright and trademarks</a>
            </li>
            <li id="menu-item-472398" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-472398">
              <a href="https://iccwbo.org/terms-and-conditions/">Terms and conditions</a>
            </li>
            <li id="menu-item-472397" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-472397">
              <a rel="privacy-policy" href="https://iccwbo.org/privacy/">
                Privacy
              </a>
            </li>
            <li id="menu-item-519904" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-519904">
              <a href="https://iccwbo.org/icc-whistleblower-policy/">ICC whistleblower policy</a>
            </li>
          </ul>

          <ul className="social-networks">
            <li>
              <a target="_blank" className="button-social" href="https://www.instagram.com/iccwbo/" rel="noopener">
                <span className="sr-only">New window</span>
                <svg className="icon icon-instagram" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-instagram"
                  />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </li>

            <li>
              <a target="_blank" className="button-social" href="https://www.facebook.com/iccwbo/" rel="noopener">
                <span className="sr-only">New window</span>
                <svg className="icon icon-facebook" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-facebook"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
            </li>

            <li>
              <a target="_blank" className="button-social" href="https://twitter.com/iccwbo" rel="noopener">
                <span className="sr-only">New window</span>
                <svg className="icon icon-twitter" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-twitter"
                  />
                </svg>
                <span className="sr-only">Twitter</span>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                className="button-social"
                href="http://www.linkedin.com/company/international-chamber-of-commerce"
                rel="noopener"
              >
                <span className="sr-only">New window</span>
                <svg className="icon icon-linkedin" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-linkedin"
                  />
                </svg>
                <span className="sr-only">Linkedin</span>
              </a>
            </li>

            <li>
              <a target="_blank" className="button-social" href="http://www.youtube.com/user/iccwbo1919" rel="noopener">
                <span className="sr-only">New window</span>
                <svg className="icon icon-youtube" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-youtube"
                  />
                </svg>
                <span className="sr-only">Youtube</span>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                className="button-social"
                href="https://www.flickr.com/photos/international-chamber-of-commerce"
                rel="noopener"
              >
                <span className="sr-only">New window</span>
                <svg className="icon icon-flickr" aria-hidden="true" focusable="false">
                  <use
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xlinkHref="https://iccwbo.org/wp-content/themes/icc/dist/img/icons/icons.svg#icon-flickr"
                  />
                </svg>
                <span className="sr-only">Flickr</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
