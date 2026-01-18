import React from "react";
import { Link } from "react-router-dom";

const MenuBtnLink = ({ to, children }) => {
  return (
    <button
      className="mega-menu__toggle"
      type="button"
      aria-expanded="false"
      aria-haspopup="false"
    >
      {/* ВАЖНО: button остался => CSS ICC продолжит работать */}
      <Link
        to={to}
        className="mega-menu__toggle-link"

      >
        {children}
      </Link>

      {/* Иконки оставляем как было, чтобы визуал не менялся */}
      <svg className="icon icon-down hide-on-mobile" aria-hidden="true" focusable="false">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="images/icons.svg#icon-down" />
      </svg>
      <svg className="icon icon-arrow-r hide-on-desktop" aria-hidden="true" focusable="false">
        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="images/icons.svg#icon-arrow-r" />
      </svg>

      <span className="sr-only aria-expanded-false-text">Open the menu</span>
      <span className="sr-only aria-expanded-true-text">Close the menu</span>
    </button>
  );
};

export default function Navigation() {
  return (
    <div className="header-container">
      <div className="header-container__sticky">
        <header id="header" className="header" role="banner" aria-label="Header">
          <div className="container">
            {/* Logo */}
            <Link className="header__logo-link" to="/">
              <noscript>
                <img
                  src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_FormalLogo_BlackBlue_Digital.png?w=220"
                  className="lazyload header__logo-color"
                  alt=""
                />
              </noscript>

              <picture>
                <source
                  data-srcset="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_FormalLogo_BlackBlue_Digital.png?w=110, https://iccwbo.org/wp-content/uploads/sites/3/2023/03/ICC_FormalLogo_BlackBlue_Digital.png?w=220 2x"
                  srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  data-crop="false"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  className="lazyload header__logo-color"
                  alt=""
                />
              </picture>

              <span className="sr-only">ICC - International Chamber of Commerce</span>
            </Link>

            {/* Mobile actions */}
            <div className="header__mobile-actions only-mobile">
              <button type="button" aria-controls="search-form" className="header__search" id="search-mobile">
                <svg className="icon icon-search" aria-hidden="true" focusable="false">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="images/icons.svg#icon-search" />
                </svg>
                <span className="sr-only">Open/Close the search bar</span>
              </button>

              <button className="header__burger header__burger--main" aria-expanded="false" aria-controls="menu">
                <span aria-hidden="true"></span>
                <span className="sr-only">Open/Close the menu</span>
              </button>
            </div>

            {/* Menu */}
            <nav id="menu" className="header__menu" aria-label="Main navigation" role="navigation">
              <div className="header__menu-wrapper">
                <ul className="header__menu-main">
                  <li><MenuBtnLink to="/">Home</MenuBtnLink></li>
                  <li><MenuBtnLink to="/about">About Us</MenuBtnLink></li>
                  <li><MenuBtnLink to="/winners">Winners</MenuBtnLink></li>
                  <li><MenuBtnLink to="/lastjury">Past Jury</MenuBtnLink></li>
                  <li><MenuBtnLink to="/jury">Jury</MenuBtnLink></li>
                  <li><MenuBtnLink to="/#nominations">Nominations</MenuBtnLink></li>
                  <li><MenuBtnLink to="/position">Regulations</MenuBtnLink></li>
                  <li><MenuBtnLink to="/ratings">Evaluation Criteria</MenuBtnLink></li>
                  <li><MenuBtnLink to="/articles">Articles</MenuBtnLink></li>
                  <li><MenuBtnLink to="/contacts">Contacts</MenuBtnLink></li>
                </ul>

                <div className="header__menu-secondary">
                  <button type="button" aria-controls="search-form" className="header__search only-desktop">
                    <svg className="icon icon-search" aria-hidden="true" focusable="false">
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="images/icons.svg#icon-search" />
                    </svg>
                    <span className="sr-only">Open/Close the search bar</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
