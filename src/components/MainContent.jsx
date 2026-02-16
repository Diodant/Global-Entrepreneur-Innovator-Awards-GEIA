import React from "react";
import Conector from "./Conector";
import { useI18n } from "../components/I18nProvider";
import HomeNewsPreview from "../components/HomeNewsPreview";

export default function GEIAPage() {
  const { lang, t } = useI18n();
  const isRu = lang === "ru";

  const renderParas = (arrKey, fallbackSingle) => {
    if (!isRu) return <p>{fallbackSingle}</p>;
    const arr = t(arrKey);
    return Array.isArray(arr) ? arr.map((p, i) => <p key={i}>{p}</p>) : <p>{arr}</p>;
  };

  return (
    <>
      <header className="hero hero--rich-page mt-60">
        <div className="container" style={{ maxWidth: "100rem" }}>
          <div className="hero__columns">
            <div>
              <h1 className="is-style-h1" style={{ visibility: "visible" }}>
                {isRu ? t("geia.hero.h1") : "Global Entrepreneur & Innovator Awards (GEIA)"}
              </h1>
            </div>
          </div>

          {/* media оставляем как есть */}
          <div className="hero__media">
            <div className="placeholder-media hero-lazyloaded">
              <picture>
                <source
                  media="(max-width: 640px)"
                  srcSet="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-business-network.jpg?w=312&h=109&crop=1, https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-business-network.jpg?w=614&h=214&crop=1 2x"
                />
                <source
                  srcSet="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-business-network.jpg?w=1320&h=460&crop=1, https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-business-network.jpg?w=1920&h=920&crop=1 2x"
                />
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                  className="lazyloaded"
                  alt=""
                />
              </picture>
            </div>
          </div>
        </div>
      </header>

      <main className="blocks-container" role="main">
        <div className="blocks-container">
          <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
            <h2 className="wp-block-heading has-dark-color has-text-color">
              {isRu ? (
                <>
                  {/** ВСТАВКА mark внутри заголовка */}
                  Добро пожаловать на официальный ресурс премии{" "}
                  <mark className="has-inline-color has-blue-700-color">
                    Global Entrepreneur & Innovator Awards (GEIA)
                  </mark>
                </>
              ) : (
                <>
                  Welcome to the official resource of the{" "}
                  <mark className="has-inline-color has-blue-700-color">
                    Global Entrepreneur & Innovator Awards (GEIA)
                  </mark>
                </>
              )}
            </h2>

            {/* EN = твои p (как есть). RU = массив p из JSON */}
            {isRu ? (
              t("geia.welcome.p").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>
                  The Global Entrepreneur & Innovator Awards (GEIA) was established, curated, and conducted under the
                  highest leadership and auspices of the International Chamber of Commerce (ICC) in a hybrid format —
                  both offline and online.
                </p>
                <p>
                  The highest international award given to entrepreneurs and innovators whose outstanding achievements
                  and leadership have a transformative impact on the global economy.
                </p>
                <p>
                  The Global Entrepreneur & Innovator Awards (GEIA) is established, curated, and conducted under the
                  highest leadership and auspices of the International Chamber of Commerce (ICC).
                </p>
                <p>
                  The International Chamber of Commerce (ICC) is the oldest, largest, and most authoritative global
                  business organization, founded in 1919. Its mission is to serve the global business community by
                  advocating for the private sector’s interests and establishing international standards of business
                  practice. The ICC holds a unique status as an observer organization at the United Nations General
                  Assembly and maintains working relationships with key institutions, including the World Trade
                  Organization (WTO) and the Group of Twenty (G20).
                </p>
                <p>
                  The ICC represents the interests of more than 45 million companies from a wide range of industries
                  worldwide, with official national committees and offices in over 170 countries. The ICC’s expert
                  network includes thousands of leading specialists from the corporate sector, law, and academia, who
                  jointly develop international business rules (e.g., Incoterms, ICC Arbitration Rules).
                </p>
              </>
            )}
          </div>
        </div>

        {/* MISSION block структура 1-в-1 */}
        <div className="wp-block-group alignfull wp-block-group--page-presentation-wrapper-new has-background is-layout-constrained wp-block-group-is-layout-constrained">
          <div className="wp-block-group alignwide wp-block-container is-layout-constrained wp-block-group-is-layout-constrained">
            <h2 className="wp-block-heading no-margin-bottom">
              {isRu ? t("geia.mission.h2") : "Mission of the Global Entrepreneur & Innovator Awards"}
            </h2>

            {isRu ? (
              <p className="mt-24">{t("geia.mission.lead")}</p>
            ) : (
              <p className="mt-24">
                to identify and honor leaders whose achievements meet international standards of excellence. The criteria
                for selecting winners directly confirm their outstanding status in the global business community
              </p>
            )}

            {/* Row 1 */}
            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
              {/* Card 1 */}
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-group wp-block-group--page-presentation-half-new wp-block-group--no-inner-margin is-layout-flow wp-block-group-is-layout-flow">
                    <figure className="wp-block-image size-large">
                      <img
                        fetchPriority="high"
                        decoding="async"
                        height="683"
                        width="1024"
                        src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-drs-arbitration-expedited-procedure.jpg?w=1024"
                        alt=""
                        className="wp-image-491915"
                      />
                    </figure>

                    <div className="wp-block-group wp-block-content is-layout-constrained wp-block-group-is-layout-constrained">
                      <h2 className="wp-block-heading">
                        {isRu ? t("geia.mission.card1.h2") : "Leadership in Innovation and Industry Transformation"}
                      </h2>
                      <p>
                        {isRu
                          ? t("geia.mission.card1.p")
                          : "Proven creation of breakthrough technologies or business models that radically change industry paradigms at a global level."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-group wp-block-group--page-presentation-half-new wp-block-group--no-inner-margin is-layout-flow wp-block-group-is-layout-flow">
                    <figure className="wp-block-image size-large">
                      <img
                        decoding="async"
                        height="683"
                        width="1024"
                        src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-mediation-drs-arbitration.jpg?w=1024"
                        alt=""
                        className="wp-image-492210"
                      />
                    </figure>

                    <div className="wp-block-group wp-block-content is-layout-constrained wp-block-group-is-layout-constrained">
                      <h2 className="wp-block-heading">
                        {isRu ? t("geia.mission.card2.h2") : "Outstanding Commercial and Managerial Results"}
                      </h2>
                      <p>
                        {isRu
                          ? t("geia.mission.card2.p")
                          : "Demonstration of exceptional business growth, profitability, and scaling across international markets, reflecting the highest level of managerial expertise."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="wp-block-columns alignwide is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
              {/* Card 3 */}
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-group wp-block-group--page-presentation-half-new wp-block-group--no-inner-margin is-layout-flow wp-block-group-is-layout-flow">
                    <figure className="wp-block-image size-large">
                      <img
                        loading="lazy"
                        decoding="async"
                        height="683"
                        width="1024"
                        src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-governance-meeting-room.jpg?w=1024"
                        alt=""
                        className="wp-image-491455"
                      />
                    </figure>

                    <div className="wp-block-group wp-block-content is-layout-constrained wp-block-group-is-layout-constrained">
                      <h2 className="wp-block-heading">
                        {isRu ? t("geia.mission.card3.h2") : "Significant Contribution to the Global Economy"}
                      </h2>
                      <p>
                        {isRu
                          ? t("geia.mission.card3.p")
                          : "Contribution to the formation of key global trends (digital transformation, sustainable development), creating new markets and jobs."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-group wp-block-group--page-presentation-half-new wp-block-group--no-inner-margin is-layout-flow wp-block-group-is-layout-flow">
                    <figure className="wp-block-image size-large">
                      <img
                        loading="lazy"
                        decoding="async"
                        height="684"
                        width="1024"
                        src="https://iccwbo.org/wp-content/uploads/sites/3/2023/03/icc-cost-and-payment-mediation.jpg?w=1024"
                        alt=""
                        className="wp-image-492211"
                      />
                    </figure>

                    <div className="wp-block-group wp-block-content is-layout-constrained wp-block-group-is-layout-constrained">
                      <h2 className="wp-block-heading">
                        {isRu ? t("geia.mission.card4.h2") : "Preliminary International Recognition"}
                      </h2>
                      <p>
                        {isRu
                          ? t("geia.mission.card4.p")
                          : "Candidates typically already have significant public recognition from authoritative industry publications, professional associations, or other international institutions."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Participation block структура 1-в-1 */}
        <div className="blocks-container">
          <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
            <h2 className="wp-block-heading has-dark-color has-text-color">
              {isRu ? (
                <>
                  Участие и, в особенности, победа в премии{" "}
                  <mark className="has-inline-color has-blue-700-color">GEIA</mark>
                </>
              ) : (
                <>
                  Participation and, particularly, winning the{" "}
                  <mark className="has-inline-color has-blue-700-color">GEIA award</mark>
                </>
              )}
            </h2>

            {isRu ? (
              <>
                {t("geia.participation.p").map((p, i) => <p key={i}>{p}</p>)}
                <p>{t("geia.participation.listIntro")}</p>
                <ul>
                  <li>
                    <b>{t("geia.participation.li1.bold")}</b>: {t("geia.participation.li1.text")}
                  </li>
                  <li>
                    <b>{t("geia.participation.li2.bold")}</b>: {t("geia.participation.li2.text")}
                  </li>
                  <li>
                    <b>{t("geia.participation.li3.bold")}</b>: {t("geia.participation.li3.text")}
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p>
                  Is an independent and weighty testimony to belonging to the global business elite. The award serves as
                  an objective confirmation that the winner’s achievements have been subject to rigorous expert
                  evaluation by an international jury and are recognized as meeting the highest global standards.
                </p>
                <p>
                  The Global Entrepreneur & Innovator Awards (GEIA) was established in 2018 as a permanent and
                  authoritative institution for identifying world-class achievements. Our history is one of
                  establishing a sustainable global standard in assessing entrepreneurial and managerial excellence.
                </p>
                <p>
                  The annual cycle of the award has allowed us to create a rigorous and objective selection methodology
                  recognized by the international business community, form a jury from leading global experts, and build
                  an elite community of winners — a global network of individuals whose proven achievements have already
                  had a transformative impact on international markets.
                </p>
                <p>
                  Each new season of the award confirms its status as a platform for recognizing world-scale results. We
                  assess those whose work has a measurable and recognized impact on the global economy, the innovation
                  landscape, and business practices. The history of GEIA is the story of legitimizing the outstanding
                  status of its winners through a mechanism of consistent and professional international recognition.
                </p>
                <p>The award participants are distinguished entrepreneurs and architects of industry change. Candidates are invited from:</p>
                <ul>
                  <li><b>Leaders who transformed their markets</b>: Founders of companies whose technologies or business models changed the competitive landscape and business standards in their sector.</li>
                  <li><b>Innovators who set new standards</b>: Creators of patented solutions in fields such as AI, fintech, biotech, and green tech that have become a new benchmark for the industry.</li>
                  <li><b>Strategists of global scaling</b>: Executives who not only grew their businesses but expanded them internationally, creating global value chains in e-commerce, logistics, and manufacturing.</li>
                </ul>
              </>
            )}
          </div>
        </div>

        

        {/* Selectivity block структура 1-в-1 */}
        <div className="blocks-container">
          <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
            <h2 className="wp-block-heading has-dark-color has-text-color">
              {isRu ? (
                <>
                  Исключительный уровень{" "}
                  <mark className="has-inline-color has-blue-700-color">селективности</mark>
                </>
              ) : (
                <>
                  Exceptional Level of{" "}
                  <mark className="has-inline-color has-blue-700-color">Selectivity</mark>
                </>
              )}
            </h2>

            {isRu ? (
              t("geia.selectivity.p").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>
                  The high competition serves as a filter, ensuring that the award is given for real, world-class
                  industry impact. Annually, out of more than 2,000 submissions, only about 15% make it to the shortlist,
                  and only the top 1% wins. This level of competition guarantees that the award is given only for
                  world-class achievements.
                </p>
                <p>
                  The evaluation of the achievements of GEIA nominees is entrusted to the International Jury, formed
                  from recognized global leaders in business and innovation. Each jury member undergoes a stringent
                  multi-step selection process and meets exceptional criteria: documented outstanding achievements and
                  international awards, experience in strategic leadership of global-scale companies, membership in
                  prestigious international councils, and impeccable business reputation. A key requirement is absolute
                  objectivity: all judges sign a strict code of ethics and are required to recuse themselves from
                  evaluating candidates if there is any potential conflict of interest, ensuring that decisions are
                  based solely on evidence and merit.
                </p>
              </>
            )}
          </div>
        </div>

        <Conector />

        {/* Nominations — структура та же (твой layout 3+3) */}
        <div className="wp-block-group alignwide is-layout-flow wp-block-group-is-layout-flow">
          <h2 className="wp-block-heading alignwide">
            {isRu ? t("geia.nominations.h2") : "Nominations"}
          </h2>

          <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure is-style-default">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.1") : "Business Leadership Award"}
                  </span>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.2") : "Entrepreneur of the Year Award"}
                  </span>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.3") : "Excellence in Business Development Award"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.4") : "Outstanding Industry Achievement Award"}
                  </span>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.5") : "Strategic Vision Award"}
                  </span>
                </div>
              </div>
            </div>

            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
              <div className="wp-block-beapi-key-figure">
                <div className="wp-block-beapi-key-figure__key">
                  <span className="wp-block-beapi-key-figure__number">
                    {isRu ? t("geia.nominations.6") : "Innovation Achievement Award"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <HomeNewsPreview />
        </div>

        {/* Partners block структура 1-в-1 */}
        <div className="blocks-container">
          <div className="wp-block-group is-layout-flow wp-block-group-is-layout-flow">
<h2 className="wp-block-heading has-dark-color has-text-color">
  {isRu ? (
    <>
      {t("geia.partners.h2.before")}{" "}
      <mark className="has-inline-color has-blue-700-color">
        {t("geia.partners.h2.mark")}
      </mark>
    </>
  ) : (
    <>
      Partners and Media Presence: Confirmation of Leading Positions in the{" "}
      <mark className="has-inline-color has-blue-700-color">
        Global Business Community
      </mark>
    </>
  )}
</h2>

            {isRu ? (
              t("geia.partners.p").map((p, i) => <p key={i}>{p}</p>)
            ) : (
              <>
                <p>GEIA is conducted with the strategic support and partnership of world-class corporations and institutions such as Microsoft, Mastercard, EY, and Emirates. This partnership confirms the integration of the award into the global business ecosystem.</p>
                <p>The victory is widely covered by leading global business media, including Forbes, RIA Novosti, Euronews, Bloomberg, Entrepreneur, Financial Times, CNBC, and global news agencies. Such media recognition serves as an additional, public testimony of the international status of the award recipient.</p>
                <p>Global Entrepreneur & Innovator Awards (GEIA) is not just an award; it is the highest form of international certification of business achievements, confirming the recipient’s status as an individual of exceptional ability. Winning GEIA is the result of a multi-stage objective evaluation process, where each step complies with the highest global standards: from rigorous document examination by an authoritative jury to final approval under the auspices of the International Chamber of Commerce.</p>
                <p>For business and innovation leaders whose achievements have had a significant and documented impact on the global economy, the GEIA award serves as one of the most substantial and independent forms of recognition. It legally substantiates that your contribution has been recognized by leading global experts, your results are exceptional at the global level, and your reputation meets the standards of the international business elite.</p>
                <p>This is your opportunity not just to gain recognition, but to cement your status in the history of global business. If your achievements are shaping the future of industries — start the recognition process today.</p>
              </>
            )}
          </div>
        </div>

      </main>
    </>
  );
}
