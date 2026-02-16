import React from "react";
import img45 from "../images/multilateral-trade-icc.webp";
import { useI18n } from "../components/I18nProvider";

export default function RegulationsGEIA() {
  const { lang } = useI18n();

  const isRu = lang === "ru";

  return (
    <>
      <header className="hero hero--rich-page mt-60">
        <div className="container">
          <div className="hero__columns">
            <div>
              <h1 className="hero__title" style={{ visibility: "visible" }}>
                {isRu ? "Положение" : "Regulations"}
              </h1>
            </div>
          </div>

          <div className="hero__media">
            <div className="placeholder-media hero-lazyloaded">
              <noscript>
                <img
                  src="https://iccwbo.org/wp-content/uploads/sites/3/2023/01/icc-corporate-headquarter.jpg?w=1500&h=920&crop=1"
                  className="lazyload"
                  alt=""
                />
              </noscript>

              <picture>
                <source media="(max-width: 640px)" srcSet={img45} />
                <source srcSet={img45} />
                <img src={img45} className="lazyloaded" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </header>

      <div className="blocks-container">
        {!isRu ? (
          <>
            {/* ================= EN (ОРИГИНАЛ БЕЗ ИЗМЕНЕНИЙ) ================= */}
            <p className="nom_title">
              Regulations of the Global Entrepreneur & Innovator Awards (GEIA)
            </p>

            <p>
              <strong className="section-heading">1. General Provisions</strong>
            </p>
            <p>
              1.1. The Global Entrepreneur &amp; Innovator Awards (hereinafter —
              “The Award,” “GEIA”) is established as an annual international institute
              for the independent recognition of outstanding achievements by
              entrepreneurs, executives, and innovators whose measurable impact
              influences the development of industries and the global economy.
            </p>
            <p>
              1.2. The Award is conducted within the framework of international
              standards of business ethics, objectivity, and transparency in
              evaluation.
            </p>
            <p>
              1.3. The Award is organized in compliance with international business
              ethics standards and independent evaluation principles applied in the
              global business environment, including approaches promoted by the
              International Chamber of Commerce (ICC) — one of the most authoritative
              international business organizations. Official website:{" "}
              <a href="https://iccwbo.ru/">https://iccwbo.ru/</a>.
            </p>
            <p>
              1.4. These Regulations define the goals, principles, nominations,
              participant requirements, application submission procedures, evaluation
              system, jury rules, confidentiality procedures, announcement of results,
              grounds for disqualification, and other conditions for conducting the
              Award.
            </p>
            <p>
              1.5. Participation in the Award signifies the full and unconditional
              consent of the candidate (or their authorized representative) to these
              Regulations.
            </p>

            <p>
              <strong className="section-heading">2. Goals, Mission, and Principles of the Award</strong>
            </p>
            <p>
              2.1. The mission of GEIA is to identify, evaluate, and publicly honor
              leaders who:
            </p>
            <ul className="wp-block-list">
              <li>
                Create industrial paradigms by implementing breakthrough technologies
                and business models;
              </li>
              <li>
                Demonstrate sustained exceptional results and scaling to international
                markets;
              </li>
              <li>
                Shape the future of the economy through digital transformation,
                sustainable development, and the creation of new markets;
              </li>
              <li>Possess significant independent recognition in the professional community.</li>
            </ul>
            <p>2.2. Core principles of the Award:</p>
            <ul className="wp-block-list">
              <li>Independence and impartiality of evaluation;</li>
              <li>Verifiability and traceability of stated achievements;</li>
              <li>Comparability of decisions based on uniform criteria and scoring scale;</li>
              <li>International scope and relevance of achievements;</li>
              <li>Ethics, confidentiality, and protection of information.</li>
            </ul>

            <p>
              <strong className="section-heading">3. Status, Periodicity, and Geography of the Award</strong>
            </p>
            <p>3.1. The Award is held annually starting from 2018.</p>
            <p>
              3.2. The Award has an international scope and involves candidates from
              various countries and macro-regions.
            </p>
            <p>
              3.3. The Award is aimed at recognizing achievements of a global scale,
              comparable in scale and impact between different countries and industries.
            </p>
            <p>
              3.4. The international nature of the Award is confirmed by the
              participation of candidates and Jury members from different countries and
              macro-regions, as well as the use of uniform criteria and a comparable
              evaluation methodology.
            </p>
            <p>
              3.5. To ensure international representation, GEIA aims to form the Jury
              each year with experts from at least 10 (ten) countries, ensuring
              interregional balance of expertise across key evaluation areas (strategy,
              innovation, investments, industry contribution, operational efficiency,
              business development).
            </p>

            <p>
              <strong className="section-heading">4. Organization and Governance of the Award</strong>
            </p>
            <p>
              4.1. The organizational support for the Award is provided by the GEIA
              Secretariat (hereinafter — “the Secretariat”).
            </p>
            <p>4.2. The Secretariat is responsible for:</p>
            <ul className="wp-block-list">
              <li>Accepting and administering applications through a secure online portal;</li>
              <li>Formal verification of the completeness of materials;</li>
              <li>Organizing the work of the International Jury;</li>
              <li>Ensuring confidentiality, storage, and access to materials;</li>
              <li>Communication with candidates on procedural matters.</li>
            </ul>
            <p>
              4.3. The evaluation of applications is carried out by the GEIA
              International Jury (hereinafter — “the Jury”), operating based on these
              Regulations, the Jury’s Code of Ethics, and the conflict of interest policy.
            </p>

            <p>
              <strong className="section-heading">5. Award Nominations</strong>
            </p>
            <p>5.1. List of nominations for the competition cycle:</p>
            <ul className="wp-block-list">
              <li>Business Leadership Award</li>
              <li>Entrepreneur of the Year Award</li>
              <li>Excellence in Business Development Award</li>
              <li>Outstanding Industry Achievement Award</li>
              <li>Strategic Vision Award</li>
              <li>Innovation Achievement Award</li>
            </ul>
            <p>
              5.2. The Secretariat may refine the wording of nominations and
              sub-nominations within a specific competition cycle while maintaining the
              essence of the criteria and methodology.
            </p>

            <p>
              <strong className="section-heading">6. Requirements for Candidates and General Conditions of Admission</strong>
            </p>
            <p>
              6.1. Participation in the Global Entrepreneur &amp; Innovator Awards (GEIA)
              is open to entrepreneurs and executives whose documented achievements
              confirm their outstanding status and significant impact on the global
              business environment. Eligible candidates include:
            </p>
            <ul className="wp-block-list">
              <li>Founders (Founder/Co-Founder) and executives of companies.</li>
              <li>Top-level executives (C-level: CEO, CTO, CFO, and equivalents).</li>
              <li>Heads of key business areas and functional units.</li>
              <li>Innovation leaders and entrepreneurs whose activities directly impacted the development of the industry.</li>
            </ul>
            <p>Key criteria for assessing eligibility:</p>
            <p>
              Participation is possible with evidence demonstrating measurable and
              verifiable impact on the industry in one or more of the following areas:
            </p>
            <ul className="wp-block-list">
              <li>Transformation of industry standards: Implementation of technologies, products, or management models that have changed or significantly improved industry-wide processes and practices.</li>
              <li>Creation of innovative solutions: Development and implementation of new approaches solving key industry challenges: improving efficiency, reducing risks, speeding up operations, enhancing quality and safety.</li>
              <li>Scalable and recognized implementation: Documented instances of solution implementation and scaling in industry companies across multiple markets, including international markets, with verified positive impact.</li>
              <li>Expert leadership and community recognition: Active expert involvement confirmed by participation in the development of professional communities: developing methodologies, working in industry associations, boards, and committees.</li>
              <li>Independent recognition of contributions: Public recognition from authoritative sources: publications in leading industry and business media, analytical mentions, previous professional awards, recommendation letters from clients, partners, or recognized experts.</li>
            </ul>

            <p><strong className="section-heading">6.2. Documentation Requirements for Application</strong></p>
            <p>
              The candidate must submit a comprehensive dossier that documents
              compliance with the highest award criteria and provides a comprehensive
              evidentiary base for expert evaluation. The documentation requirements are
              designed to ensure objectivity, transparency, and compliance with
              international standards for documenting professional achievements.
            </p>

            <p><strong className="section-heading">6.2.1. Absolute Accuracy and Verifiability Requirement:</strong></p>
            <p>
              All statements in the application, particularly regarding personal
              contribution, scale of achievements, and impact, must be supported by
              primary documents or authoritative independent sources. Key indicators
              (growth volumes, market share, financial results, number of implementations)
              require documentary evidence. General rule: every significant claim must be
              verifiable.
            </p>

            <p><strong className="section-heading">6.2.2. Evidence of Measurable Results and Industry Impact:</strong></p>
            <p>The application must provide not descriptions, but proven impact. This requires submission of:</p>
            <ul className="wp-block-list">
              <li>Quantitative metrics: Financial metrics (revenue, profit, capitalization before and after projects led by the candidate), data on scaling (expansion to X new countries, growth of the user base from Y to Z), key operational KPIs.</li>
              <li>Qualitative evidence of transformation: Documents demonstrating changes in industry standards or practices due to the candidate’s activities (e.g., implementation of their technology as an industry standard, changes in regulation following their initiatives).</li>
              <li>Link between personal actions and outcomes: Clear description of the role and specific decisions of the candidate that directly led to the presented results.</li>
            </ul>

            <p><strong className="section-heading">6.2.3. Mandatory Amount of Independent Confirmations (Third-Party Evidence):</strong></p>
            <p>External recognition, independent of the candidate, is a critical component of the application. A combination of the following materials must be provided:</p>
            <ul className="wp-block-list">
              <li>Confirmation of commercial implementation: Contracts, licensing agreements, client cases, publicly available on their websites, confirming the use of solutions or methodologies developed under the candidate’s leadership.</li>
              <li>Evidence of professional recognition: Certificates of participation in industry committees, invitations to speak at prestigious conferences, mentions in authoritative industry reports.</li>
              <li>Publications in authoritative national and international media: Articles, interviews, analytical reviews in leading business and industry publications where the candidate’s achievements and role are directly mentioned.</li>
            </ul>

            <p><strong className="section-heading">6.2.4. Compliance with Business Ethics and Legislation:</strong></p>
            <p>
              The candidate must confirm that there are no violations in their professional
              activity. The application may require a declaration of good business conduct,
              absence of criminal convictions related to economic crimes, and consent for
              information verification. The activities of the candidate and the business
              they represent must comply with the legislation of the countries where they
              operate and international business practice standards.
            </p>

            <p><strong className="section-heading">7. Application Procedure and Requirements for the Competition Dossier</strong></p>
            <p>
              To ensure objectivity and compliance with the highest international recognition
              standards, the competition dossier must be formed in strict accordance with the
              following procedure and requirements.
            </p>

            <p><strong className="section-heading">7.1. Application Submission</strong></p>
            <p>
              The application is submitted exclusively through the protected online portal of
              the award within the specified deadlines. The system ensures cryptographic data
              protection, identity authentication, and control over the integrity of the
              provided materials.
            </p>

            <p><strong className="section-heading">7.2. Required Components of the Application</strong></p>
            <p>
              A complete application includes the following components, each of which serves to
              document and prove the candidate’s outstanding achievements:
            </p>
            <ul className="wp-block-list">
              <li>Official candidate form (to be filled out in the system).</li>
              <li>
                Detailed description of achievements, with clear justification for compliance
                with the criteria of the chosen nomination and EB-1 requirements, with an
                emphasis on personal contribution, transformational impact, and international
                recognition.
              </li>
              <li>Full set of supporting documents (evidentiary base), structured according to Section 8 of these rules.</li>
              <li>Clear division of materials into those allowed for publication and confidential ones (to be used exclusively for jury evaluation).</li>
              <li>Declaration of no conflict of interest with members of the international jury (if applicable).</li>
            </ul>

            <p><strong className="section-heading">7.3. Confidentiality of Commercial Information</strong></p>
            <p>
              Editing (concealing) specific commercially sensitive data (exact amounts, rates,
              client personal data) in the provided documents is allowed, provided that the
              fact of achievement, its scale, and impact remain fully verifiable and subject
              to objective evaluation.
            </p>

            <p><strong className="section-heading">7.4. Language of Submission</strong></p>
            <p>
              All key materials of the application, including descriptions of achievements and
              key supporting documents, must be submitted in English. Documents in other
              languages are accepted only if they have a certified translation into English
              that ensures full understanding of their content by the international jury.
            </p>

            <p><strong className="section-heading">8. Competition Stages and Timelines (Standard Regulations)</strong></p>
            <p>
              The application review procedure in GEIA is a strictly regulated, multi-stage
              process ensuring maximum objectivity, transparency, and compliance with
              international standards.
            </p>
            <p>
              8.1. Application Submission (February 15 – March 15): Participants submit a
              comprehensive dossier via the secure online portal. The application includes a
              detailed description of achievements, supporting documents (financial metrics,
              patents, reviews, publications), demonstrating exceptionality and international
              impact.
            </p>
            <p>
              8.2. Formal Verification (March 16-20): The Secretariat of the award conducts a
              technical check of document completeness and compliance with formal criteria.
            </p>
            <p>
              8.3. Expert Evaluation by the International Jury (March 21-25): Verified
              applications are submitted for review by the independent International Jury.
              Each application is evaluated by multiple jury members according to established
              criteria in a secret voting process.
            </p>
            <p>
              8.4. Shortlist Formation and Final Selection (March 26-29): Based on the jury’s
              evaluations, a shortlist of finalists (top 15%) is formed. In some nominations,
              an online interview with finalists may be conducted to clarify details. The final
              decision on the winners (top 1%) is made by the jury in a closed session.
            </p>
            <p>
              8.5. Announcement of Winners (March 30): The award ceremony is held during the
              Gala Dinner in Brussels.
            </p>
            <p>8.6. The Award Ceremony is held as part of the Gala Dinner in Brussels.</p>
            <p>
              8.7. The Secretariat may adjust the dates of the competition cycle while
              maintaining the sequence of stages and publicly notifying participants.
            </p>

            <p><strong className="section-heading">Procedure for Forming and Working Principles of the International Jury GEIA</strong></p>
            <p>
              The International Jury of the Global Entrepreneur &amp; Innovator Awards (GEIA) is
              formed in accordance with a multi-step procedure designed to guarantee the highest
              professional authority, impartiality, and compliance with the standards of objective
              evaluation required when reviewing outstanding achievement statements.
            </p>

            <p><strong className="section-heading">9. Stages of Jury Formation:</strong></p>
            <p>
              9.1. Preliminary List Formation (Long List): The Secretariat of GEIA forms an extended
              list of potential judges based on their recognized international authority in
              entrepreneurship, venture investments, management, technology, and academic research.
            </p>
            <p>
              9.2. Reputation and Expertise Check: Candidates undergo thorough checks of their
              professional biography, public achievements, and expert recognition. Preference is
              given to individuals whose contribution to industry development is documented and
              recognized internationally.
            </p>
            <p>
              9.3. Competency Evaluation and Composition Balance: The final composition of the jury
              is balanced according to key parameters: geographical representation (to ensure a
              global perspective), industry expertise, and professional background. This eliminates
              the dominance of any single country or narrow group of interests, ensuring pluralism
              of opinions.
            </p>
            <p>
              9.4. Signing of Ethical Commitments: Each approved jury member signs a strict code of
              ethics, committing to principles of objectivity, confidentiality, and disclosure of
              any potential conflicts of interest related to candidates for the award.
            </p>

            <p><strong className="section-heading">Principles of Operation and Guarantees of Objectivity:</strong></p>
            <p>
              Disclosure of Conflicts of Interest and Self-Exclusion: Before evaluation begins, each
              jury member must disclose any potential business, personal, or professional connections
              with any of the candidates. If such a connection is identified, the judge immediately
              recuses themselves from evaluating that particular application, and this is documented
              by the Secretariat.
            </p>
            <p>
              Standardized Evaluation Methodology: All jury members are required to evaluate
              applications strictly within the approved methodology, using unified, documented
              criteria and scoring scales. This ensures comparability of decisions made by different
              experts.
            </p>
            <p>
              Collegiality and Multiple Checks: Each application is evaluated by several jury members
              independently. The final decision is the result of aggregating these independent
              evaluations, which eliminates the influence of any one person’s subjective opinion.
            </p>
            <p>
              Confidentiality of the Process: All discussions, interim evaluations, and personal data
              of candidates remain strictly confidential within the working group of the jury.
            </p>

            <p><strong className="section-heading">10. Confidentiality and Information Security</strong></p>
            <p>
              10.1. All application materials are confidential. Access is provided only to authorized
              individuals and appointed jury members on a need-to-know basis.
            </p>
            <p>
              10.2. The Secretariat ensures secure storage of materials, control over access, and
              tracking of actions with documents.
            </p>
            <p>10.3. Materials cannot be copied, transmitted to third parties, or used outside the evaluation process.</p>

            <p><strong className="section-heading">11. Determining Results, Shortlist, and Winners</strong></p>
            <p>
              11.1. After the evaluation, a shortlist of finalists is formed, usually around the top
              15% of the total number of applications (the target for the competition cycle),
              depending on the number of applications and final distribution of points.
            </p>
            <p>
              11.2. Winners are the candidates with the highest final scores and confirmed compliance
              with the criteria, usually the top 1% (the target for the competition cycle), depending
              on the number of applications and final distribution of points.
            </p>
            <p>
              11.3. In some nominations, additional online interviews may be conducted with finalists
              to clarify information and verify the role/contribution.
            </p>

            <p><strong className="section-heading">11.4. Annual Summary of the Competition Cycle</strong></p>
            <p>
              11.4.1. GEIA forms an annual summary of the competition cycle, reflecting the aggregated
              results of the competition, including the number of submitted applications, the number
              of applications admitted for expert evaluation, the number of finalists on the shortlist,
              and the number of winners in each nomination.
            </p>
            <p>
              11.4.2. The Annual Summary may be published on the official GEIA resources in the form of
              aggregated data without disclosing confidential information, personal data of participants,
              and internal documentation of the Jury.
            </p>
            <p>
              11.4.3. The publication of the Annual Summary serves as an additional tool for confirming
              the transparency and comparability of the competition process.
            </p>

            <p><strong className="section-heading">12. Awards, Supporting Documents, and Ceremony</strong></p>
            <p>12.1. Winners and finalists receive:</p>
            <ul className="wp-block-list">
              <li>Official certificate/diploma specifying the nomination, status, and date;</li>
              <li>The right to use status labels (Winner/Finalist/Shortlisted) in accordance with the Award’s brand rules;</li>
              <li>Placement on official GEIA resources in the volume agreed upon by the candidate.</li>
            </ul>
            <p>12.2. The award ceremony takes place during the Gala Dinner in Brussels.</p>

            <p><strong className="section-heading">13. Final Provisions</strong></p>
            <p>
              13.1. The Secretariat may make changes to these Regulations while maintaining the key
              principles of the Award and publicly notifying participants.
            </p>
            <p>
              13.2. In matters not covered by these Regulations, the Secretariat is guided by the
              goals of the Award, the principles of objectivity, and business ethics.
            </p>
            <p>13.3. These Regulations are the official document of GEIA and are subject to publication on the Award’s website.</p>
          </>
        ) : (
          <>
            {/* ================= RU (ТВОЙ ТЕКСТ) ================= */}
            <p className="nom_title">
              ПОЛОЖЕНИЕ О МЕЖДУНАРОДНОЙ ПРЕМИИ GLOBAL ENTREPRENEUR &amp; INNOVATOR AWARDS (GEIA)
            </p>

            <p><strong className="section-heading">1. Общие положения</strong></p>
            <p>
              1.1. Международная премия Global Entrepreneur &amp; Innovator Awards (далее — «Премия», «GEIA»)
              учреждена как ежегодный международный институт независимого признания выдающихся достижений
              предпринимателей, руководителей и инноваторов, оказывающих измеримое влияние на развитие отраслей
              и глобальной экономики.
            </p>
            <p>
              1.2. Премия проводится в рамках международных стандартов деловой этики, объективности и прозрачности оценивания.
            </p>
            <p>
              1.3. Премия проводится с учетом международных стандартов деловой этики и принципов независимой оценки,
              применяемых в международной бизнес-среде, включая подходы, продвигаемые International Chamber of Commerce (ICC)
              — одной из наиболее авторитетных международных бизнес-организаций. Официальный сайт:{" "}
              <a href="https://iccwbo.ru/">https://iccwbo.ru/</a>.
            </p>
            <p>
              1.4. Настоящее Положение определяет цели, принципы, номинации, требования к участникам, порядок подачи заявок,
              систему оценки, регламент работы жюри, правила конфиденциальности, порядок объявления результатов, основания для
              дисквалификации и иные условия проведения Премии.
            </p>
            <p>
              1.5. Участие в Премии означает полное и безусловное согласие кандидата (или его уполномоченного представителя)
              с настоящим Положением.
            </p>

            <p><strong className="section-heading">2. Цели, миссия и принципы Премии</strong></p>
            <p>2.1. Миссия GEIA — выявлять, оценивать и публично чествовать лидеров, которые:</p>
            <ul className="wp-block-list">
              <li>создают индустриальные парадигмы, внедряя прорывные технологии и бизнес-модели;</li>
              <li>демонстрируют устойчивые исключительные результаты и масштабирование на международные рынки;</li>
              <li>формируют будущее экономики через цифровую трансформацию, устойчивое развитие, создание новых рынков;</li>
              <li>обладают значительным независимым признанием в профессиональной среде.</li>
            </ul>
            <p>2.2. Основные принципы Премии:</p>
            <ul className="wp-block-list">
              <li>независимость и беспристрастность оценки;</li>
              <li>доказательность и проверяемость заявленных достижений;</li>
              <li>сопоставимость решений по единым критериям и шкале баллов;</li>
              <li>международный масштаб и релевантность достижений;</li>
              <li>этика, конфиденциальность и защита информации.</li>
            </ul>

            <p><strong className="section-heading">3. Статус, периодичность и география Премии</strong></p>
            <p>3.1. Премия проводится ежегодно с 2018 года.</p>
            <p>3.2. Премия носит международный характер и предполагает участие кандидатов из различных стран и макрорегионов.</p>
            <p>
              3.3. Премия ориентирована на признание достижений мирового уровня, сопоставимых по масштабу и влиянию между разными
              странами и индустриями.
            </p>
            <p>
              3.4. Международный характер Премии подтверждается участием кандидатов и членов Жюри из разных стран и макрорегионов,
              а также применением единых критериев и сопоставимой методологии оценки.
            </p>
            <p>
              3.5. В целях обеспечения международного представительства GEIA стремится ежегодно формировать состав Жюри с участием
              экспертов не менее чем из 10 (десяти) стран, а также обеспечивать межрегиональный баланс компетенций по ключевым
              направлениям оценки (стратегия, инновации, инвестиции, отраслевой вклад, операционная эффективность, развитие бизнеса).
            </p>

            <p><strong className="section-heading">4. Организация и органы управления Премией</strong></p>
            <p>4.1. Организационное сопровождение Премии осуществляет Секретариат GEIA (далее — «Секретариат»).</p>
            <p>4.2. Секретариат отвечает за:</p>
            <ul className="wp-block-list">
              <li>прием и администрирование заявок через защищенный онлайн-портал;</li>
              <li>формальную верификацию комплектности материалов;</li>
              <li>организацию работы Международного Жюри;</li>
              <li>обеспечение конфиденциальности, хранения и доступа к материалам;</li>
              <li>коммуникацию с кандидатами по процедурным вопросам.</li>
            </ul>
            <p>
              4.3. Оценивание заявок осуществляет Международное Жюри GEIA (далее — «Жюри»), действующее на основании настоящего
              Положения, Кодекса этики жюри и политики конфликта интересов.
            </p>

            <p><strong className="section-heading">5. Номинации Премии</strong></p>
            <p>5.1. Перечень номинаций конкурсного цикла:</p>
            <ul className="wp-block-list">
              <li>Business Leadership Award (За лидерство в бизнесе)</li>
              <li>Entrepreneur of the Year Award (Предприниматель года)</li>
              <li>Excellence in Business Development Award (За достижения в развитии бизнеса)</li>
              <li>Outstanding Industry Achievement Award (За выдающиеся достижения в отрасли)</li>
              <li>Strategic Vision Award (За стратегическое видение)</li>
              <li>Innovation Achievement Award (За достижения в области инноваций)</li>
            </ul>
            <p>
              5.2. Секретариат вправе уточнять формулировки номинаций и подноминаций в рамках конкретного конкурсного цикла при
              сохранении существа критериев и методологии.
            </p>

            <p><strong className="section-heading">6. Требования к кандидатам и общие условия допуска</strong></p>
            <p>
              6.1. К участию в Global Entrepreneur &amp; Innovator Awards (GEIA) допускаются предприниматели и руководители, чьи
              документально подтвержденные достижения подтверждают их выдающийся статус и значимое влияние на глобальную бизнес-среду.
            </p>

            <p><strong className="section-heading">Круг лиц, соответствующих требованиям:</strong></p>
            <ul className="wp-block-list">
              <li>Основатели (Founder/Co-Founder) и руководители компаний.</li>
              <li>Топ-менеджеры высшего звена (C-level: CEO, CTO, CFO и аналоги).</li>
              <li>Руководители ключевых бизнес-направлений и функциональных блоков.</li>
              <li>Лидеры инноваций и частные предприниматели, чья деятельность напрямую повлияла на развитие отрасли.</li>
            </ul>

            <p><strong className="section-heading">Ключевые критерии оценки соответствия кандидата:</strong></p>
            <p>
              Участие возможно при наличии доказательств, подтверждающих измеримое и доказуемое влияние на отрасль в одной или
              нескольких из следующих областей:
            </p>
            <ul className="wp-block-list">
              <li>
                Трансформация отраслевых стандартов: Внедрение технологий, продуктов или управленческих моделей, которые изменили
                или кардинально улучшили общепринятые в отрасли процессы и практики.
              </li>
              <li>
                Создание инновационных решений: Разработка и внедрение новых подходов, решающих ключевые отраслевые задачи:
                повышение эффективности, снижение рисков, ускорение операций, улучшение качества и безопасности.
              </li>
              <li>
                Масштабируемое и признанное внедрение: Наличие подтвержденных случаев внедрения и масштабирования разработанных решений
                в компаниях отрасли на нескольких рынках, включая международные, с документально зафиксированным положительным эффектом.
              </li>
              <li>
                Экспертное лидерство и признание сообществом: Активная экспертная деятельность, подтвержденная участием в развитии
                профессионального сообщества: разработка методологий, работа в отраслевых ассоциациях, советах, комитетах.
              </li>
              <li>
                Независимое признание вклада: Наличие публичного признания со стороны авторитетных источников: публикации в ведущих
                отраслевых и деловых СМИ, аналитические упоминания, предыдущие профессиональные награды, рекомендательные письма от
                клиентов, партнеров или признанных экспертов.
              </li>
            </ul>

            <p><strong className="section-heading">6.2. Требования к документальному оформлению заявки</strong></p>
            <p>
              Кандидат должен представить комплексное досье, документально подтверждающее соответствие высшим критериям премии и
              предоставляющее исчерпывающую доказательную базу для экспертной оценки. Требования к материалам направлены на обеспечение
              объективности, прозрачности и соответствия международным стандартам документирования профессиональных достижений.
            </p>

            <p><strong className="section-heading">6.2.1. Требование абсолютной достоверности и подтверждаемости:</strong></p>
            <p>
              Все утверждения в заявке, особенно касающиеся личного вклада, масштаба достижений и влияния, должны сопровождаться
              первичными документами или авторитетными независимыми источниками. Ключевые показатели (объемы роста, рыночная доля,
              финансовые результаты, количество внедрений) требуют документального подтверждения. Общее правило: каждое значимое
              утверждение должно быть верифицируемым.
            </p>

            <p><strong className="section-heading">6.2.2. Доказательства измеримых результатов и влияния на отрасль:</strong></p>
            <p>Заявка должна содержать не описания, а доказанное влияние. Это требует предоставления:</p>
            <ul className="wp-block-list">
              <li>
                Количественных показателей: Финансовые метрики (выручка, прибыль, капитализация до и после реализации проектов под
                руководством кандидата), данные о масштабировании (выход на X новых стран, рост пользовательской базы с Y до Z),
                ключевые операционные KPI.
              </li>
              <li>
                Качественных свидетельств трансформации: Документы, демонстрирующие изменение отраслевых стандартов или практик в
                результате деятельности кандидата (например, внедрение его технологии как отраслевого стандарта, изменения в
                регулировании, последовавшие за его инициативами).
              </li>
              <li>
                Связи между личными действиями и результатом: Четкое описание роли и конкретных решений кандидата, которые напрямую
                привели к представленным результатам.
              </li>
            </ul>

            <p><strong className="section-heading">6.2.3. Обязательный объем независимых подтверждений (Third-Party Evidence):</strong></p>
            <p>
              Наличие внешнего, неподконтрольного кандидату признания является критическим компонентом заявки. Требуется предоставить
              комбинацию из следующих материалов:
            </p>
            <ul className="wp-block-list">
              <li>
                Подтверждения коммерческого внедрения: Контракты, лицензионные соглашения, кейсы клиентов, публично доступные на их
                сайтах, подтверждающие использование решений или методологий, разработанных под руководством кандидат
              </li>
              <li>
                Доказательства профессионального признания: Сертификаты об участии в отраслевых комитетах, приглашения выступить в
                качестве спикера на престижных конференциях, упоминания в авторитетных отраслевых отчетах.
              </li>
              <li>
                Публикации в авторитетных национальных и международных СМИ: Статьи, интервью, аналитические обзоры в ведущих деловых
                и профильных отраслевых изданиях, где напрямую упоминаются достижения кандидата и его роль.
              </li>
            </ul>

            <p><strong className="section-heading">6.2.4. Соблюдение норм деловой этики и законодательства:</strong></p>
            <p>
              Кандидат должен подтвердить отсутствие нарушений в своей профессиональной деятельности. Заявка может потребовать
              декларации о добросовестном ведении бизнеса, отсутствии судимостей, связанных с экономическими преступлениями, и согласия
              на проверку предоставленной информации. Деятельность кандидата и представляемого им бизнеса должна соответствовать
              законодательству стран их операционной деятельности и международным нормам деловой практики.
            </p>

            <p><strong className="section-heading">7. Процедура подачи заявки и требования к конкурсному досье</strong></p>
            <p>
              Для обеспечения объективности и соответствия высшим стандартам международного признания, конкурсное досье кандидата
              должно формироваться в строгом соответствии со следующей процедурой и требованиями.
            </p>

            <p><strong className="section-heading">7.1. Подача заявки</strong></p>
            <p>
              Заявка подается исключительно через защищенный онлайн-портал премии в установленные сроки. Система обеспечивает
              криптографическую защиту данных, аутентификацию личности и контроль целостности предоставленных материалов.
            </p>

            <p><strong className="section-heading">7.2. Обязательный состав заявки</strong></p>
            <p>
              Полная заявка включает следующие компоненты, каждый из которых служит для документирования и доказательства выдающихся
              достижений кандидата:
            </p>
            <ul className="wp-block-list">
              <li>Официальная анкета кандидата (заполняется в системе).</li>
              <li>
                Детальное описание достижений, с четкой аргументацией соответствия критериям выбранной номинации и требований EB-1, с
                акцентом на личный вклад, трансформационное влияние и международное признание.
              </li>
              <li>Полный комплект подтверждающих документов (доказательная база), структурированный в соответствии с Разделом 8 настоящих правил.</li>
              <li>Четкое разделение материалов на разрешенные к публикации и конфиденциальные (подлежащие использованию исключительно для оценки жюри).</li>
              <li>Декларация об отсутствии конфликта интересов с членами международного жюри (при наличии такой информации).</li>
            </ul>

            <p><strong className="section-heading">7.3. Конфиденциальность коммерческой информации</strong></p>
            <p>
              Допускается редактирование (сокрытие) конкретных коммерчески чувствительных данных (точные суммы, тарифы, персональные
              данные клиентов) в предоставляемых документах при обязательном условии, что факт достижения, его масштаб и влияние
              остаются полностью доказуемыми и поддающимися объективной оценке.
            </p>

            <p><strong className="section-heading">7.4. Язык предоставления материалов</strong></p>
            <p>
              Все основные материалы заявки, включая описание достижений и ключевые доказательные документы, должны быть представлены
              на английском языке. Документы на иных языках принимаются только при наличии заверенного перевода на английский,
              обеспечивающего полное понимание их содержания международным жюри.
            </p>

            <p><strong className="section-heading">8. Этапы конкурса и сроки (типовой регламент)</strong></p>
            <p>
              Процедура рассмотрения заявок в GEIA представляет собой строго регламентированный, многоэтапный процесс, обеспечивающий
              максимальную объективность, прозрачность и соответствие международным стандартам.
            </p>
            <p>
              8.1.Прием заявок (15 февраля – 15 марта): Участники подают комплексное досье через защищенный онлайн-портал. Заявка
              включает детальное описание достижений, подтверждающие документы (финансовые показатели, патенты, отзывы, публикации),
              демонстрирующие исключительность и международное влияние.
            </p>
            <p>
              8.2.Формальная верификация (16-20 марта): Секретариат премии проводит техническую проверку полноты документов и
              соответствия формальным критериям.
            </p>
            <p>
              8.3. Экспертная оценка Международным Жюри (21-25 марта): Верифицированные заявки поступают на рассмотрение независимого
              Международного Жюри. Каждая заявка оценивается несколькими членами жюри по установленным критериям в рамках тайного
              голосования.
            </p>
            <p>
              8.4. Формирование шорт-листа и финальный отбор (26-29 марта): На основе оценок жюри формируется шорт-лист финалистов
              (top 15%). В ряде номинаций может проводиться онлайн-интервью с финалистами для уточнения деталей. Финальное решение о
              победителях (top 1%) принимается жюри на закрытом заседании.
            </p>
            <p>
              8.5. Объявление победителей (30 марта): Торжественная церемония награждения в рамках Gala Dinner в Брюсселе.
            </p>
            <p>8.6. Торжественная церемония награждения проводится в рамках Gala Dinner в Брюсселе.</p>
            <p>
              8.7. Секретариат вправе корректировать даты конкурсного цикла при сохранении последовательности этапов и публичном уведомлении.
            </p>

            <p><strong className="section-heading">9. Процедура формирования и принципы работы Международного Жюри GEIA</strong></p>
            <p>
              Международное Жюри Global Entrepreneur &amp; Innovator Awards (GEIA) формируется в соответствии с многоступенчатой процедурой,
              призванной гарантировать его высочайший профессиональный авторитет, беспристрастность и соответствие стандартам объективной оценки,
              требуемым при рассмотрении заявлений о выдающихся достижениях.
            </p>

            <p><strong className="section-heading">Этапы формирования жюри:</strong></p>
            <p>
              9.1. Составление предварительного списка (Long List): Секретариат GEIA составляет расширенный список потенциальных судей на основе их
              признанного международного авторитета в сферах предпринимательства, венчурных инвестиций, управления, технологий и академических исследований.
            </p>
            <p>
              9.2. Проверка репутации и экспертизы: Кандидаты проходят тщательную проверку профессиональной биографии, публичных достижений и экспертного
              признания. Предпочтение отдается лицам, чей собственный вклад в развитие отрасли документально подтвержден и признан на международном уровне.
            </p>
            <p>
              9.3.Оценка компетенций и балансировка состава: Окончательный состав жюри балансируется по ключевым параметрам: географическое представительство
              (для обеспечения глобальной перспективы), отраслевая экспертиза и профессиональный бэкграунд. Это исключает доминирование какой-либо одной страны
              или узкой группы интересов, обеспечивая плюрализм мнений.
            </p>
            <p>
              9.4. Подписание этических обязательств: Каждый утвержденный член жюри подписывает строгий кодекс этики, обязуясь соблюдать принципы объективности,
              конфиденциальности и раскрывать любые потенциальные конфликты интересов, связанные с кандидатами на премию.
            </p>

            <p><strong className="section-heading">Принципы работы и гарантии объективности:</strong></p>
            <p>
              Раскрытие конфликтов интересов и самоустранение: Перед началом оценки каждый член жюри обязан раскрыть все потенциальные связи (деловые, личные,
              профессиональные) с любым из кандидатов. При выявлении подобной связи судья незамедлительно самоустраняется от оценки данной конкретной заявки,
              что документируется Секретариатом.
            </p>
            <p>
              Стандартизированная методология оценки: Все члены жюри обязаны проводить оценку исключительно в рамках утвержденной методологии, используя единые,
              документально зафиксированные критерии и шкалы баллов. Это обеспечивает сопоставимость решений, принятых разными экспертами.
            </p>
            <p>
              Коллегиальность и многократная проверка: Каждая заявка оценивается несколькими членами жюри независимо друг от друга. Итоговое решение является
              результатом агрегирования этих независимых оценок, что исключает влияние субъективного мнения одного человека.
            </p>
            <p>
              Конфиденциальность процесса: Все обсуждения, промежуточные оценки и персональные данные кандидатов остаются строго конфиденциальными в рамках рабочей группы жюри.
            </p>

            <p><strong className="section-heading">10. Конфиденциальность и информационная безопасность</strong></p>
            <p>10.1. Все материалы заявок являются конфиденциальными. Доступ предоставляется только уполномоченным лицам и назначенным членам Жюри по принципу необходимости.</p>
            <p>10.2. Секретариат обеспечивает защищенное хранение материалов, контроль доступа и учет действий с документами.</p>
            <p>10.3. Материалы не подлежат копированию, передаче третьим лицам и использованию вне процедуры оценки.</p>

            <p><strong className="section-heading">11. Определение результатов, шорт-лист и победители</strong></p>
            <p>
              11.1. По итогам оценки формируется шорт-лист финалистов, как правило, около top 15% от общего числа заявок (ориентир конкурсного цикла) в зависимости
              от количества заявок и итогового распределения баллов.
            </p>
            <p>
              11.2. Победителями становятся кандидаты с наивысшими итоговыми баллами и подтвержденным соответствием критериям, как правило, top 1% (ориентир
              конкурсного цикла) в зависимости от количества заявок и итогового распределения баллов.
            </p>
            <p>11.3. В отдельных номинациях может проводиться дополнительное онлайн-интервью с финалистами для уточнения информации и верификации роли/вклада.</p>

            <p><strong className="section-heading">11.4. Годовой итоговый обзор конкурсного цикла (Annual Summary)</strong></p>
            <p>
              11.4.1. GEIA формирует ежегодный итоговый обзор конкурсного цикла, отражающий обобщенные результаты проведения конкурса, включая количество поданных
              заявок, количество заявок, допущенных к экспертной оценке, число финалистов шорт-листа, а также количество победителей по каждой номинации.
            </p>
            <p>
              11.4.2. Annual Summary может быть опубликован на официальных ресурсах GEIA в форме агрегированных данных без раскрытия конфиденциальной информации,
              персональных данных участников, а также внутренней документации Жюри.
            </p>
            <p>11.4.3. Публикация Annual Summary является дополнительным инструментом подтверждения прозрачности и сопоставимости конкурсной процедуры.</p>

            <p><strong className="section-heading">12. Награды, подтверждающие документы и церемония</strong></p>
            <p>12.1. Победители и финалисты получают:</p>
            <ul className="wp-block-list">
              <li>официальный сертификат/диплом с указанием номинации, статуса и даты;</li>
              <li>право использования обозначений статуса (Winner/Finalist/Shortlisted) в соответствии с правилами бренда Премии;</li>
              <li>размещение на официальных ресурсах GEIA в объеме, согласованном кандидатом.</li>
            </ul>
            <p>12.2. Церемония награждения проводится в рамках Gala Dinner в Брюсселе.</p>

            <p><strong className="section-heading">13. Заключительные положения</strong></p>
            <p>13.1. Секретариат вправе вносить изменения в настоящее Положение при сохранении ключевых принципов Премии и публичном уведомлении участников.</p>
            <p>13.2. Во всем, что не урегулировано настоящим Положением, Секретариат руководствуется целями Премии, принципами объективности и деловой этики.</p>
            <p>13.3. Настоящее Положение является официальным документом GEIA и подлежит размещению на сайте Премии.</p>
          </>
        )}
      </div>
    </>
  );
}
