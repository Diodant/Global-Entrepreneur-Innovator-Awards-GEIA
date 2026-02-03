import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../components/I18nProvider";
import LogoImg from "../images/logo.svg";


const MenuBtnLink = ({ to, children }) => {
  return (
    <button
      className="mega-menu__toggle"
      type="button"
      aria-expanded="false"
      aria-haspopup="false"
    >
      {/* ВАЖНО: button остался => CSS ICC продолжит работать */}
      <Link to={to} className="mega-menu__toggle-link">
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
  const { lang, setLang, t } = useI18n();

  const label = (enText, ruKey) => (lang === "ru" ? t(ruKey) : enText);

  return (
    <div className="header-container">
      <div className="header-container__sticky">
        <header id="header" className="header" role="banner" aria-label="Header">
          <div className="container">
            {/* Logo */}
            <Link className="header__logo-link" to="/">
              <img src={LogoImg} className="header__logo-color" alt="" />
            </Link>

            {/* Mobile actions */}
            <div className="header__mobile-actions only-mobile">
              {/* Language switch (mobile) */}
              <div className="header__lang">
                <button
                  type="button"
                  className={`header__lang-btn ${lang === "en" ? "is-active" : ""}`}
                  onClick={() => setLang("en")}
                  aria-pressed={lang === "en"}
                >
                  EN
                </button>
                <button
                  type="button"
                  className={`header__lang-btn ${lang === "ru" ? "is-active" : ""}`}
                  onClick={() => setLang("ru")}
                  aria-pressed={lang === "ru"}
                >
                  RU
                </button>
              </div>

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
                  <li>
                    <MenuBtnLink to="/">{label("Home", "menu.home")}</MenuBtnLink>
                  </li>

                  <li>
                    <MenuBtnLink to="/winners">{label("Winners", "menu.winners")}</MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/jury">{label("Jury", "menu.jury")}</MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/regulations">{label("Regulations", "menu.regulations")}</MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/nominations">
                      {label("Nominations and Evaluation Criteria", "menu.nominations")}
                    </MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/jurycriteria">{label("Jury selection process", "menu.jurycriteria")}</MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/articles">{label("Articles", "menu.articles")}</MenuBtnLink>
                  </li>
                  <li>
                    <MenuBtnLink to="/contacts">{label("Contacts", "menu.contacts")}</MenuBtnLink>
                  </li>
                </ul>

                <div className="header__menu-secondary">
                  {/* Language switch (desktop) */}
                  <div className="header__lang only-desktop">
                    <button
                      type="button"
                      className={`header__lang-btn ${lang === "en" ? "is-active" : ""}`}
                      onClick={() => setLang("en")}
                      aria-pressed={lang === "en"}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      className={`header__lang-btn ${lang === "ru" ? "is-active" : ""}`}
                      onClick={() => setLang("ru")}
                      aria-pressed={lang === "ru"}
                    >
                      RU
                    </button>
                  </div>

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
