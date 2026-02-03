import React from "react";
import img45 from "../images/45.png";

export default function InternationalJuryCriteria() {
  return (
    <>
      <header className="hero hero--rich-page mt-60">
        <div className="container">
          <div className="hero__columns">
            <div>
              <h1 className="hero__title" style={{ visibility: "visible" }}>
                Jury selection process
              </h1>
            </div>
          </div>

          <div className="hero__media">
            <div className="placeholder-media hero-lazyloaded">
              <noscript>
                {/* data-location="hero-rich" */}
                <img
                  src="https://iccwbo.org/wp-content/uploads/sites/3/2023/01/icc-corporate-headquarter.jpg?w=1500&h=920&crop=1"
                  className="lazyload"
                  alt=""
                />
              </noscript>

<picture>
  <source media="(max-width: 640px)" srcSet={img45} />
  <source srcSet={img45} />

  <img
    src={img45}
    className="lazyloaded"
    alt=""
  />
</picture>
            </div>
          </div>
        </div>
      </header>

      <div className="blocks-container">
        <p className="nom_title">Criteria for Selection and Composition of the International Jury of GEIA</p>

        <p>
          The International Jury of the Global Entrepreneur &amp; Innovator Awards (GEIA) is exclusively composed of individuals with internationally recognized exceptional achievements and professional authority. The selection procedure ensures that the candidates are evaluated by authoritative experts whose status aligns with the highest standards, ensuring the weight and objectivity of the award as evidence of the laureate’s exceptional merits.
        </p>

        <p>
          Composition and Qualification Requirements for Jury Members:
        </p>

        <p>
          The members of the GEIA International Jury represent the elite of the global business and expert community. They include:
        </p>

        <ul className="wp-block-list">
          <li>
            Leaders of global companies: Active or former CEOs, Presidents, and C-level executives of companies included in international rankings or leaders in their countries, with confirmed experience in business transformation and international expansion.
          </li>
          <li>
            Partners of leading international investment funds and banks: Partners of venture capital (VC), private equity (PE) funds, and investment banks, whose portfolios include deals with companies across multiple countries and who are recognized authorities in evaluating business models and growth.
          </li>
          <li>
            Recognized visionary entrepreneurs: Founders and creators of companies who have successfully scaled their business to international markets, with their personal contributions and innovations widely recognized.
          </li>
          <li>
            Academic leaders from top global business schools: Professors and deans of internationally ranked schools, with publications in peer-reviewed journals and experience in researching global business trends.
          </li>
          <li>
            Technological leaders and innovators: Executives in technology and patent holders whose developments have had a measurable impact on the market and industry standards.
          </li>
        </ul>

        <p>
          To ensure the highest authority and impartiality of the evaluation, each jury member must meet the following criteria, documented as follows:
        </p>

        <p>
          Documented International Recognition and Reputation
        </p>

        <p>
          A candidate for the jury must have a reputation that extends beyond their home country, confirmed by a combination of the following evidence:
        </p>

        <p>
          Recognition in professional and business circles:
        </p>

        <ul className="wp-block-list">
          <li>
            Experience in senior executive positions in multinational corporations or their foreign subsidiaries, where the candidate had direct responsibility for managing and growing business in one or more regions/countries outside their country of residence.
          </li>
          <li>
            Regular invitations as a key speaker or expert at prestigious industry conferences and forums held in various countries and regions (North America, Europe, Asia, etc.).
          </li>
          <li>
            Membership in international boards of directors, advisory boards, or supervisory boards of companies, associations, or non-profit organizations with a cross-border focus.
          </li>
        </ul>

        <p>
          Confirmation of reputation by independent authoritative sources:
        </p>

        <ul className="wp-block-list">
          <li>
            Profile publications: Presence of personal profiles, interviews, or citations in leading international or national business publications.
          </li>
          <li>
            Inclusion in professional rankings and lists: Recognition by being included in authoritative industry rankings (e.g., “Top-100 Investors”, “Best Technology Leaders”), award lists (e.g., “Entrepreneur of the Year” by EY), or similar recognitions.
          </li>
          <li>
            Expert activity: Publication of analytical articles, research, or white papers that are cited or mentioned by international professional communities or academic institutions.
          </li>
        </ul>

        <p>
          Demonstrated Professional Experience at the Highest Level
        </p>

        <p>
          Minimum experience: At least 5 years of continuous experience in a position that involves strategic influence and decision-making authority.
        </p>

        <p>
          Evidence of direct impact: The candidate must provide specific examples (cases) demonstrating their direct and measurable impact on industry standards or practices.
        </p>

        <p>
          Impeccable Business Reputation and Ethical Suitability
        </p>

        <p>
          This requirement is verified during the Due Diligence stage (vetting process) and is mandatory for admission.
        </p>

        <ul className="wp-block-list">
          <li>
            No criminal convictions or legal violations: Confirmation that the candidate has no convictions or serious administrative penalties related to economic crimes, fraud, corruption, or violations of corporate law.
          </li>
          <li>
            No confirmed reputational scandals: The candidate should not be publicly involved in scandals related to serious breaches of business ethics, discrimination, cartel formation, or other actions undermining trust in their objectivity as an arbitrator.
          </li>
          <li>
            Adherence to professional ethics: Willingness and unconditional consent to follow the GEIA Jury Code of Ethics, particularly the rules regarding conflicts of interest and confidentiality.
          </li>
        </ul>
      </div>
    </>
  );
}
