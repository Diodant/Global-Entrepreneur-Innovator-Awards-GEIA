import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../components/I18nProvider";
import LogoImg from "../images/logo2.svg";

export default function Footer() {
  const { t } = useI18n();

  // fallback: если ключа нет — показываем EN
  const tr = (key, fallback) => {
    const v = t(key);
    return v === key ? fallback : v;
  };

  return (
    <footer id="footer" className="footer" role="contentinfo" aria-label="Footer">
      <div className="container">
        {/* Baseline */}
        <div className="footer__baseline">
          <Link className="footer__logo-link" to="/">
            <img src={LogoImg} className="header__logo-color" alt="" />
          </Link>

          <p className="footer__signature">{tr("footer.signature", "For business. For you.")}</p>

          {/* <Link to="/contact-us/" className="footer__contact-us btn btn--text-reverse">
            {tr("footer.contactUs", "Contact us")}
          </Link> */}
        </div>

        {/* Content */}
        <div className="footer__content">
          <ul className="footer__menu-list footer__menu-column1">
            <li>
              <Link to="/">{tr("footer.menu.home", "Home")}</Link>
            </li>
            <li>
              <Link to="/winners">{tr("footer.menu.winners", "Winners")}</Link>
            </li>
            <li>
              <Link to="/jury">{tr("footer.menu.jury", "Jury")}</Link>
            </li>
            <li>
              <Link to="/regulations">{tr("footer.menu.regulations", "Regulations")}</Link>
            </li>
            <li>
              <Link to="/nominations">
                {tr("footer.menu.nominations", "Nominations and Evaluation Criteria")}
              </Link>
            </li>
            <li>
              <Link to="/jurycriteria">
                {tr("footer.menu.juryCriteria", "Jury selection process")}
              </Link>
            </li>
            <li>
              <Link to="/news">{tr("footer.menu.news", "News")}</Link>
            </li>
          </ul>

          <div className="footer__local-contact">
            <p className="footer__local-contact__title">
              {tr("footer.contact.title", "Сontact")}
            </p>

            <p className="footer__local-contact__text">
              <strong>{tr("footer.contact.addressLabel", "Address:")}</strong>
              <br />
              {tr("footer.contact.addressLine1", "36 Kutuzovsky Ave., Bldg. 3")}
              <br />
              {tr("footer.contact.addressLine2", "Moscow, 121170, Russia")}
              <br />
              <br />

              <strong>{tr("footer.contact.hoursLabel", "Business hours:")}</strong>
              <br />
              {tr("footer.contact.hoursValue", "Monday – Friday: 10:00 AM – 7:00 PM")}
              <br />
              <br />

              <strong>{tr("footer.contact.phoneLabel", "Phone:")}</strong>
              <br />
              {tr("footer.contact.phone1", "+7 (495) 720-50-80")}
              <br />
              {tr("footer.contact.phone2", "+7 (495) 730-08-55")}
              <br />
              <br />

              <strong>{tr("footer.contact.emailLabel", "E-mail:")}</strong>
              <br />
              <a href="mailto:office@iccwbo.ru">{tr("footer.contact.email", "office@iccwbo.ru")}</a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <ul className="footer__menu-list footer__menu-notice">
            <li>
              <Link to="/copyright-and-trademarks/">
                {tr("footer.notice.copyright", "Copyright and trademarks")}
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions/">
                {tr("footer.notice.terms", "Terms and conditions")}
              </Link>
            </li>
            <li>
              <Link to="/privacy/">{tr("footer.notice.privacy", "Privacy")}</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
