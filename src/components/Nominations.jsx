import React from "react";
import { useI18n } from "../components/I18nProvider";
import img45 from "../images/45.png";

export default function Nominations() {
  const { t } = useI18n();

  // fallback: если ключа нет — показываем EN
  const tr = (key, fallback) => {
    const v = t(key);
    return v === key ? fallback : v;
  };

  // для списков (массив строк)
  const trList = (key, fallbackArr) => {
    const v = t(key);
    return v === key ? fallbackArr : v;
  };

  return (
    <>
      <header className="hero hero--rich-page mt-60">
        <div className="container">
          <div className="hero__columns">
            <div>
              <h1 className="hero__title" style={{ visibility: "visible" }}>
                {tr("nominations.page.title", "Terms and conditions")}
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
        <p className="nom_title">
          {tr("nominations.title", "Nominations and Evaluation Criteria for Winners")}
        </p>

        {/* ===================== Business Leadership Award ===================== */}
        <p className="nom_title">{tr("nominations.bl.title", "Business Leadership Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.bl.purpose.text",
            "Recognition of current or former top-level executives whose documented strategic leadership has led to sustainable and significant business results with international impact. The nomination directly confirms the candidate's status as a \"manager/executive of exceptional ability.\""
          )}
        </p>

        <p>
          <strong className="section-heading">
            {tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}
          </strong>{" "}
          {tr(
            "nominations.bl.eligibility.text",
            "Individuals eligible for nomination are those who have held or currently hold one of the following positions with confirmed strategic and operational responsibility over the past 3-5 years:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.bl.eligibility.list", [
            "Founder or Co-Founder, defining the company strategy.",
            "CEO, President, Managing Partner.",
            "C-level executive: CFO, CTO, COO, CMO and equivalents.",
            "Head of a key business unit or division, responsible for P&L and market entry.",
          ]).map((item, idx) => (
            <li key={`bl-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.bl.c1.title",
              "Proven Strategic Leadership and Critical Role (Leadership Role & Critical Capacity – 25 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.c1.list", [
            "Provision of documents confirming the authority to make key decisions affecting strategy, finances (P&L), investments, and operations.",
            "Clear demonstration of the cause-and-effect relationship between the candidate's specific decisions/initiatives and the achieved business results.",
            "Description of the management team and the scope of accountability (budget, staff size, geographic coverage).",
          ]).map((item, idx) => (
            <li key={`bl-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.bl.c2.title",
              "Measurable and Significant Business Results (Measured Business Outcomes – 25 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.c2.list", [
            "Provision of quantitative indicators of sustainable growth over several years (minimum 2-3 periods of \"before/after\" comparison): revenue, profit (EBITDA, Net Profit), Annual Recurring Revenue (ARR), market share, profitability.",
            "Use of audited financial reports, investor dashboards, internal reports with verifiable data.",
            "Proof of the stability and scale of results exceeding average market indicators.",
          ]).map((item, idx) => (
            <li key={`bl-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.bl.c3.title",
              "International Influence and Scale (International Impact – 20 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.c3.list", [
            "Confirmation of activity in international markets: contracts with foreign clients, establishment of legal entities abroad, partnerships with global companies, export revenue.",
            "Proof of the measurable effect of international expansion (growth in export revenue, international market share).",
            "Presence of cross-cultural management practices and adaptation of the business model.",
          ]).map((item, idx) => (
            <li key={`bl-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.bl.c4.title",
              "Independent Recognition of Leadership (Independent Recognition – 20 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.c4.list", [
            "Publications in authoritative international or national business media (Forbes, Bloomberg, FT, RBC, Kommersant, etc.) where the candidate is mentioned as a leader and expert.",
            "Inclusion in industry or professional rankings (ratings of best CEOs, top managers).",
            "Invitations to speak as a keynote speaker at major industry forums or to join expert councils, supervisory boards of other companies, or award juries.",
          ]).map((item, idx) => (
            <li key={`bl-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.bl.c5.title",
              "Corporate Governance and Ethics (Governance & Ethics – 10 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.c5.list", [
            "Declaration of compliance with legal norms and absence of convictions related to economic crimes.",
            "Confirmation of business transparency (audit reports, if available).",
            "Disclosure of potential conflicts of interest.",
          ]).map((item, idx) => (
            <li key={`bl-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.common.required.label",
              "Minimum Required Document Package (Required Evidence):"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.required.list", [
            "Documents confirming the position and authority (employment contract, extract from an order, organizational structure description).",
            "Financial and operational metrics confirming growth (reporting, KPI dashboards).",
            "Evidence of international scale (contracts, invoices, recommendations from international partners).",
            "At least 2-3 independent sources of recognition (articles, awards, recommendation letters from recognized industry leaders not affiliated with the candidate's company).",
          ]).map((item, idx) => (
            <li key={`bl-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bl.disq.list", [
            "Provision of unreliable or falsified documents.",
            "Concealment of a material conflict of interest.",
            "Absence of documentary confirmation of the leadership role or measurable performance results.",
          ]).map((item, idx) => (
            <li key={`bl-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Entrepreneur of the Year Award ===================== */}
        <p className="nom_title">{tr("nominations.eoy.title", "Entrepreneur of the Year Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.eoy.purpose.text",
            "Recognition of outstanding founders and co-founders who not only created but also scaled a company or product, demonstrating sustainable growth, proven market uniqueness, and significant impact. The nomination serves as direct evidence of \"extraordinary ability\" in the field of entrepreneurship, requiring confirmation of original contribution and exceptional results."
          )}
        </p>

        <p>
          <strong className="section-heading">
            {tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}
          </strong>{" "}
          {tr(
            "nominations.eoy.eligibility.text",
            "Individuals eligible for nomination must meet the following requirements:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.eoy.eligibility.list", [
            "Founder or Co-Founder, whose personal and decisive role in the creation, development, and strategic leadership of the company is documented.",
            "The candidate must be the key person responsible for the company achieving significant commercial and market results.",
            "The company/product must be in a stage of active growth and scaling (not a seed-stage startup without market results).",
          ]).map((item, idx) => (
            <li key={`eoy-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">
            {tr("nominations.eoy.c1.title", "Founder's Influence and Decisive Role (Founder Impact – 25 points)")}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.c1.list", [
            "Documentary confirmation of authorship of the initial idea, key decisions on product-market fit, strategic \"pivots,\" and go-to-market strategy.",
            "Provision of evidence that the company's success directly depends on the candidate's unique vision, management, and actions, not just market conditions or the team.",
            "History of the company's development under the candidate's leadership, demonstrating their sustained involvement and control.",
          ]).map((item, idx) => (
            <li key={`eoy-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.eoy.c2.title", "Scalable and Sustainable Growth (Scalable Growth – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.c2.list", [
            "Provision of quantitative data confirming sustainable growth over at least 2-3 years: revenue growth (preferably multiple), expansion of the client base, entry into new segments or geographic markets.",
            "Proof of healthy unit economics (LTV/CAC, margin) for technology and product companies.",
            "Demonstration of the repeatability of the business model and results, not one-time or random successes.",
          ]).map((item, idx) => (
            <li key={`eoy-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.eoy.c3.title",
              "Originality of Business Model / Creation of a New Category (Original Business Model / Category Creation – 20 points)"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.c3.list", [
            "Proof of the novelty and innovativeness of the offering: a new monetization, distribution, or customer value creation model.",
            "Availability of independent analytical reviews, competitor comparisons, or market reports confirming the company's unique position.",
            "Evidence that the company created or redefined a market category.",
          ]).map((item, idx) => (
            <li key={`eoy-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.eoy.c4.title", "Market Validation and Recognition (Market Validation – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.c4.list", [
            "For funded companies: confirmation of funding rounds from well-known funds, strategic partnerships, M&A deals as evidence of professional market trust.",
            "For bootstrapped companies: confirmed profitability, positive cash flow, successful export operations.",
            "Presence of large contracts with known clients or government entities as proof of market acceptance.",
          ]).map((item, idx) => (
            <li key={`eoy-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.eoy.c5.title", "Global Visibility and Recognition (Global Visibility & Recognition – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.c5.list", [
            "Publications in international business and industry media where the candidate and their company are presented as thought leaders.",
            "Invitations for the candidate to speak at prestigious international industry forums or to join global associations.",
            "Receipt of professional industry awards at the national or international level.",
          ]).map((item, idx) => (
            <li key={`eoy-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">
            {tr(
              "nominations.common.required.label",
              "Minimum Required Document Package (Required Evidence):"
            )}
          </strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.required.list", [
            "Company founding documents clearly confirming the founder/co-founder status and share.",
            "Detailed growth metrics for recent years: financial reports (or dashboards), data on client base, geographic reach, retention rates.",
            "Copies of key contracts, implementation case studies, or recommendation letters from major clients.",
            "At least 3-5 independent publications in media, analytical reports, or recommendation letters from recognized industry experts, venture investors, or partners.",
          ]).map((item, idx) => (
            <li key={`eoy-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.eoy.disq.list", [
            "Emphasis on \"vanity metrics\" (metrics for PR, such as number of media mentions or app downloads) without providing confirmed data on real income, profitability, or sustainable growth of the client base.",
            "Lack of documentary evidence of the candidate's decisive role as a founder.",
            "Inability to prove the company's sustainable growth (e.g., providing data for only one successful year).",
          ]).map((item, idx) => (
            <li key={`eoy-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Excellence in Business Development Award ===================== */}
        <p className="nom_title">{tr("nominations.bd.title", "Excellence in Business Development Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.bd.purpose.text",
            "Recognition of outstanding achievements of executives in business development, commerce, and strategic partnerships, whose personal initiative and managerial competence directly led to the company's structural growth through closing major deals, creating new channels, and market development. The nomination confirms the candidate's status as a specialist with \"extraordinary ability\" in the field of sales management, business development, and commercial expansion."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}</strong>{" "}
          {tr(
            "nominations.bd.eligibility.text",
            "Individuals eligible for nomination are those who have held or currently hold leadership positions related to revenue generation and business development over the past 3 years:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.bd.eligibility.list", [
            "Head of Business Development",
            "Chief Revenue Officer, VP Sales, Sales Director",
            "Head/VP of Strategic Partnerships",
            "Commercial Director, Market Expansion Director",
          ]).map((item, idx) => (
            <li key={`bd-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.bd.c1.title", "Impact and Volume of Closed Deals (Deal Impact – 30 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.c1.list", [
            "Documented volume of deals closed under the candidate's leadership: Total Contract Value (TCV), Annual Contract Value (ACV), margin.",
            "Performance indicators: sales funnel conversion from first contact to closure, average cycle time.",
            "Presence of repeat and expanded deals (upsell/cross-sell) with key clients, confirming long-term business relationships built by the candidate.",
          ]).map((item, idx) => (
            <li key={`bd-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.bd.c2.title", "Creation of Strategic Partnerships (Strategic Partnerships – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.c2.list", [
            "Proof of initiating and concluding partnerships that opened new markets, product categories, or distribution channels for the company.",
            "Confirmed joint results: presence of shared clients, revenue under a revenue share model, successful technological integrations.",
            "Documents (agreements, memoranda) confirming the candidate's role as the architect of the partnership.",
          ]).map((item, idx) => (
            <li key={`bd-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.bd.c3.title", "Execution of Expansion into New Markets (Market Expansion Execution – 20 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.c3.list", [
            "Proof of successful launch of the company's products/services in new countries or regions under the candidate's leadership.",
            "Confirmation of completion of necessary tasks: localization, compliance, building a local distributor or partner network, hiring and managing a local team.",
            "Measurable business results in the new market (revenue, market share) within established deadlines.",
          ]).map((item, idx) => (
            <li key={`bd-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.bd.c4.title", "Creation of a Scalable Commercial System (Repeatable Commercial System – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.c4.list", [
            "Proof of personal contribution to the creation and optimization of systemic processes: sales methodologies (playbooks), CRM processes, revenue forecasting systems.",
            "Confirmation of increased efficiency of the commercial team as a result of methodologies implemented by the candidate (growth in productivity per employee, reduced cycle time).",
            "Documents confirming authorship or leadership in the implementation of these systems (models, presentations, internal regulations).",
          ]).map((item, idx) => (
            <li key={`bd-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.bd.c5.title", "Independent Verification of Achievements (Independent Verifiability – 10 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.c5.list", [
            "Presence of confirmations from counterparties: recommendation letters from key clients or partners on official letterhead with contacts for verification.",
            "Mention of the candidate or their projects in public sources (news about partnerships, client case studies).",
            "Priority is given to external evidence over internal reports.",
          ]).map((item, idx) => (
            <li key={`bd-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.required.label", "Minimum Required Document Package (Required Evidence):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.required.list", [
            "Extracts from key contracts, invoices, acts of completion, or confirmation letters from clients (editing of specific amounts is allowed, but not the fact and scale of the deal).",
            "Analytical report showing sales funnel dynamics (pipeline) and conversion to closed deals (close), revenue dynamics for the area the candidate was responsible for.",
            "Materials confirming process building: examples of playbooks, team KPI model, process diagrams.",
            "At least 2-3 recommendation letters from partners or key clients specifically describing the candidate's role and contribution.",
          ]).map((item, idx) => (
            <li key={`bd-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.bd.disq.list", [
            "Presentation of deals whose closure and terms cannot be confirmed by an independent party (client or partner).",
            "Inability to prove the \"critical role\" of the candidate: if the presented results are a consequence of general market conditions or the work of the entire team without a clearly defined personal managerial contribution.",
            "Absence of measurable, quantitative results confirmed by documents.",
          ]).map((item, idx) => (
            <li key={`bd-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Outstanding Industry Achievement Award ===================== */}
        <p className="nom_title">{tr("nominations.oia.title", "Outstanding Industry Achievement Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.oia.purpose.text",
            "Recognition of the exceptional contribution of leaders whose professional achievements have had a transformational impact not only on their own organization but on the entire industry as a whole. The nomination serves as direct evidence of the candidate's \"extraordinary ability,\" confirmed by broad industry recognition of their role in establishing new standards, methodologies, infrastructure, or regulatory approaches."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}</strong>{" "}
          {tr(
            "nominations.oia.eligibility.text",
            "Individuals eligible for nomination are those whose professional activity has led to documented changes in their industry at the national or international level:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.oia.eligibility.list", [
            "Technical, product, and innovation leaders (CTO, Chief Product Officer, Head of R&D) whose developments have become an industry benchmark.",
            "Industry strategists and consultants whose methodologies and approaches have been adopted by the professional community.",
            "Experts involved in developing standards, regulatory norms, or professional certification.",
            "Founders or heads of infrastructure projects/platforms that have changed the industry ecosystem.",
          ]).map((item, idx) => (
            <li key={`oia-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.oia.c1.title", "Impact at the Industry Level (Industry-Level Impact – 30 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.c1.list", [
            "Irrefutable evidence that the results of the candidate's work have been adapted, implemented, or cited by other industry players (competitors, partners, regulators).",
            "Documentary confirmation of changes in general industry processes, efficiency indicators (benchmarks), technical or ethical standards as a result of the candidate's activity.",
            "Scale of impact: number of companies affected by the changes, or geographic reach of new standards.",
          ]).map((item, idx) => (
            <li key={`oia-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.oia.c2.title", "Originality and Novelty of Contribution (Original Contribution – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.c2.list", [
            "An evidentiary base confirming the innovative nature of the method, system, technology, or approach proposed by the candidate.",
            "Presence of formal signs of originality: patents, certificates of authorship, publications in peer-reviewed professional journals.",
            "Conclusions from independent expert organizations or industry associations confirming the uniqueness and breakthrough nature of the contribution.",
          ]).map((item, idx) => (
            <li key={`oia-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.oia.c3.title", "Broad Independent Recognition (Broad Independent Recognition – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.c3.list", [
            "Systematic mention of the candidate's work in authoritative industry reports (Gartner, Forrester, IDC, McKinsey), analytical reviews, standardized curricula.",
            "Regular invitations for the candidate as a key expert to working groups, technical standardization committees, regulatory councils, or public industry associations.",
            "Awards and distinctions from professional associations confirming the candidate's authority in the professional community.",
          ]).map((item, idx) => (
            <li key={`oia-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.oia.c4.title", "Measurable Market and Operational Effect (Measured Market Effect – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.c4.list", [
            "Quantitative data demonstrating the economic, operational, or social effect from the implementation of the candidate's developments/methods in the industry: increase in overall efficiency, reduction in costs or risks, improvement in safety, quality, or transparency levels.",
            "Comparative analysis \"before\" and \"after\" the implementation of the industry innovation initiated by the candidate.",
          ]).map((item, idx) => (
            <li key={`oia-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.oia.c5.title", "Durability and Replicability of the Result (Durability & Replicability – 5 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.c5.list", [
            "Evidence that the achievement is not one-time but sustainable and remains relevant over time.",
            "Confirmations of the reproducibility of the approach, methodology, or technology in different markets, companies, or legal jurisdictions.",
          ]).map((item, idx) => (
            <li key={`oia-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.required.label", "Minimum Required Document Package (Required Evidence):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.required.list", [
            "Independent sources: a collection of publications in industry media, excerpts from analytical reports, white papers, case studies from third-party companies that directly indicate the use or influence of the candidate's developments.",
            "Letters from independent experts and implementation confirmations: recommendations from executives of other companies, industry associations, or scientific institutions, as well as documentary evidence of implementation (licensing agreements, certificates of conformity).",
            "Effect metrics: reports, charts, or studies showing the scale, geography, and quantitative results of the impact on the industry (comparative data, efficiency/savings calculations).",
          ]).map((item, idx) => (
            <li key={`oia-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.oia.disq.list", [
            "Impact Limited to One Company: Inability to provide evidence that the candidate's contribution has been recognized and adopted beyond their own organization or group of related persons.",
            "Absence of Independent Confirmations: The application relies solely on internal documents or self-description without third-party verification from authoritative sources in the industry.",
            "Inability to Prove Cause-and-Effect Relationship: Lack of clear evidence linking the candidate's actions to specific changes in the industry.",
          ]).map((item, idx) => (
            <li key={`oia-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Strategic Vision Award ===================== */}
        <p className="nom_title">{tr("nominations.sv.title", "Strategic Vision Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.sv.purpose.text",
            "Recognition of outstanding strategic leaders who have not only formulated a comprehensive long-term strategy but have also successfully implemented it, achieving measurable transformational results. The nomination confirms the candidate's capacity for \"outstanding leadership\" and strategic foresight, demonstrating their role as an architect of the future of the organization or even the industry."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}</strong>{" "}
          {tr(
            "nominations.sv.eligibility.text",
            "Individuals eligible for nomination are those who hold or have held strategic leadership positions bearing personal responsibility for the long-term development of the organization:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.sv.eligibility.list", [
            "CEO, President, Chief Strategy Officer.",
            "Board Members or Board Directors defining strategy.",
            "Founders and top managers responsible for corporate development and M&A (Head of Corporate Development).",
            "Executives responsible for business transformation or entry into fundamentally new markets.",
          ]).map((item, idx) => (
            <li key={`sv-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.sv.c1.title", "Quality and Depth of the Strategic Model (Strategic Model Quality – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.c1.list", [
            "Existence and deep elaboration of documented strategy with a clear hypothesis, market analysis, competitive positioning, and risk assessment (risk-framework).",
            "Clear roadmap with stages, key indicators (KPIs), and success criteria.",
            "Evidence that the strategy was created under the direct leadership and with the personal intellectual contribution of the candidate.",
          ]).map((item, idx) => (
            <li key={`sv-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.sv.c2.title", "Execution and Measurable Results (Execution & Outcomes – 30 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.c2.list", [
            "Irrefutable evidence of full or key phase implementation of the declared strategy.",
            "Documented results: revenue and profitability growth, increased market share, launch of new product lines, successful international expansion, increased capitalization.",
            "Correspondence of achieved results to the KPIs previously defined in the strategy.",
          ]).map((item, idx) => (
            <li key={`sv-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.sv.c3.title", "Strategic Foresight and Thought Leadership (Trend Foresight / Thought Leadership – 20 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.c3.list", [
            "Evidence that the candidate's strategy was based on accurate anticipation of market, technological, or regulatory trends (AI, sustainability, cybersecurity, fintech infrastructure, etc.).",
            "Candidate's public speeches, articles, or interviews dated before the trend became widely recognized, in which they argue for their strategic decisions.",
            "Recognition of the candidate as a shaper of the industry agenda.",
          ]).map((item, idx) => (
            <li key={`sv-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.sv.c4.title", "Transformational Impact on Organization and Ecosystem (Organizational / Ecosystem Transformation – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.c4.list", [
            "Evidence that the implemented strategy led to fundamental changes: reorganization of business processes, transformation of corporate culture, change in product architecture, creation of new partnership alliances, or alteration of the company's investment profile.",
            "Impact on the ecosystem: how the strategy changed interactions with suppliers, clients, or regulators.",
          ]).map((item, idx) => (
            <li key={`sv-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.sv.c5.title", "Independent Validation of the Strategy's Credibility (Independent Validation – 10 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.c5.list", [
            "Confirmations from external sources, data from before results were achieved: positive analyst feedback on the presented strategy, publications in the business press, discussion of the strategy with investors.",
            "Recommendation letters from partners, clients, or independent experts confirming the candidate's reputation as a visionary strategist.",
          ]).map((item, idx) => (
            <li key={`sv-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.required.label", "Minimum Required Document Package (Required Evidence):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.required.list", [
            "Strategic documents: strategy presentation, roadmap with KPIs (partial editing of confidential details is permissible).",
            "Performance reports: documents confirming achievement of the stated KPIs and results (reports to the board of directors, investor dashboards).",
            "Materials confirming foresight: screenshots, PDFs, or links to the candidate's public speeches, articles, interviews with dates preceding the mass recognition of the trend.",
            "External confirmations: recommendation letters from partners, clients, industry analysts, or board members specifically describing the candidate's contribution to the formation and implementation of the strategy.",
          ]).map((item, idx) => (
            <li key={`sv-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.sv.disq.list", [
            "\"Paper Strategy\": Absence of evidence of its practical implementation and achievement of the stated measurable results.",
            "Absence of Dated Evidence of Foresight: Inability to confirm that the strategic decision was made based on original analysis, rather than being a reaction to an already formed market consensus.",
            "Inability to Prove Personal Contribution: If the presented strategy is the result of collective work without a clearly distinguished decisive role of the candidate.",
          ]).map((item, idx) => (
            <li key={`sv-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Innovation Achievement Award ===================== */}
        <p className="nom_title">{tr("nominations.ia.title", "Innovation Achievement Award")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.common.purpose.label", "Nomination Purpose:")}</strong>{" "}
          {tr(
            "nominations.ia.purpose.text",
            "Recognition of outstanding innovators who have created and implemented technological or methodological solutions possessing proven novelty, significant practical effect, and scaling potential. The nomination serves as direct evidence of the candidate's \"extraordinary ability\" in the field of research, development, and commercialization of innovations, as confirmed by patents, implementations, and market recognition."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.common.eligibility.label", "Candidate Eligibility Criteria:")}</strong>{" "}
          {tr(
            "nominations.ia.eligibility.text",
            "Individuals eligible for nomination are those whose personal intellectual and managerial activity has led to the creation and practical implementation of an innovation:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.ia.eligibility.list", [
            "Individual entrepreneurs and independent inventors who are the authors and rights holders of patents, utility models, or other intellectual property objects that have found commercial application or licensing.",
            "Technology leaders (CTO, Chief Innovation Officer, VP R&D, Head of Engineering) who are the authors or architects of key developments.",
            "Product managers and creators (Chief Product Officer, Head of Product) responsible for an innovative product with unique characteristics.",
            "Scientists and researchers in industry (Principal Scientist, Research Lead) whose work has transitioned to the stage of commercial application.",
          ]).map((item, idx) => (
            <li key={`ia-elig-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.criteria.label", "Main Evaluation Criteria:")}</strong>
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.ia.c1.title", "Novelty and Originality (Novelty & Originality – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.c1.list", [
            "Evidence that the solution represents objective novelty compared to existing analogues and competitors (patent search, comparative analysis).",
            "Availability of protective documents for intellectual property objects: issued patents (national, international), registered utility models, industrial designs, software codes.",
            "Publications in peer-reviewed scientific or technical journals confirming the research contribution and novelty.",
          ]).map((item, idx) => (
            <li key={`ia-c1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.ia.c2.title", "Implementation and Deployment in Real Conditions (Real-World Implementation – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.c2.list", [
            "Documentary confirmation of transition from concept or laboratory prototype to a working pilot or industrial implementation (production-ready).",
            "Detailed description of the process of integrating the solution into existing technological or business processes.",
            "Evidence of successful scaling of the solution within the company or with the first client.",
          ]).map((item, idx) => (
            <li key={`ia-c2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.ia.c3.title", "Measurable Efficiency and Return on Investment (Measured Performance & ROI – 25 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.c3.list", [
            "Quantitative metrics proving a significant effect from the implementation: increased accuracy, processing speed, cost reduction, resource savings, reduction in operational or cyber risks, growth in key business indicators.",
            "Comparative analysis of key indicators \"before\" and \"after\" the innovation's implementation.",
            "Calculation or estimate of Return on Investment (ROI) in the development and implementation.",
          ]).map((item, idx) => (
            <li key={`ia-c3-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.ia.c4.title", "Adoption and Replication (Adoption & Replication – 15 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.c4.list", [
            "Evidence of the innovation spreading beyond the initial project: replication in other company divisions, sale or licensing to several external clients, scaling to new geographic markets.",
            "Presence of partnership agreements on joint development or distribution based on this innovation.",
          ]).map((item, idx) => (
            <li key={`ia-c4-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.ia.c5.title", "Personal Contribution and Authorship (Personal Contribution – 10 points)")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.c5.list", [
            "Irrefutable evidence of the candidate's decisive role as the author of the idea, solution architect, project leader, or key developer.",
            "Confirmation of authorship in patent documents (listed as inventor).",
            "Recommendation letters from technical leaders or colleagues detailing the candidate's specific contribution.",
          ]).map((item, idx) => (
            <li key={`ia-c5-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.required.label", "Minimum Required Document Package (Required Evidence):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.required.list", [
            "Title and technical documents: copies of patents, technical descriptions (white paper), test protocols, and comparative performance metrics.",
            "Implementation case studies: detailed descriptions of 1-2 key implementations with numerical results, as well as supporting documents from clients or partners (acts, letters, agreements).",
            "Evidence of recognition: independent mentions in specialized media or analytical reports, invitations to speak at technical conferences, publications in scientific collections.",
          ]).map((item, idx) => (
            <li key={`ia-req-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.common.disq.label", "Disqualifying Factors (Disqualifiers):")}</strong>
        </p>
        <ul className="wp-block-list">
          {trList("nominations.ia.disq.list", [
            "Absence of Evidence of Real Implementation: The innovation exists only at the level of concept, prototype, or internal experiment without measurable effect in real conditions.",
            "Absence of Measurable Effect Metrics: The claimed advantages are not supported by quantitative data or comparisons.",
            "Candidate's Contribution Not Documented: It is impossible to establish a direct and substantial link between the candidate's actions and the creation/implementation of the innovation. Authorship or key role is disputed or not reflected in primary documents.",
          ]).map((item, idx) => (
            <li key={`ia-disq-${idx}`}>{item}</li>
          ))}
        </ul>

        <hr className="wp-block-separator has-alpha-channel-opacity" />

        {/* ===================== Standards of Evidentiary Basis and Evaluation Methodology ===================== */}
        <p className="nom_title">
          {tr(
            "nominations.standards.title",
            "Standards of Evidentiary Basis and Evaluation Methodology"
          )}
        </p>

        <p>
          {tr(
            "nominations.standards.p1",
            "The GEIA Award is conferred based on strict standards of evidentiary basis, which ensure objectivity, transparency, and compliance with international criteria for recognizing outstanding achievements. These standards are developed to verify statements corresponding to the requirements of immigration visa categories for individuals of exceptional ability."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p2.title", "Principles for Evaluating Evidence:")}</strong>
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p3.title", "Principle of Verifiability:")}</strong>{" "}
          {tr(
            "nominations.standards.p3.text",
            "Every substantial claim about the candidate's role, achievements, scale of influence, implementation, or recognition must be confirmed by a primary document or an authoritative independent source. Abstract descriptions without documentary support are not considered."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p4.title", "Priority of Independent (Third-Party) Confirmations:")}</strong>{" "}
          {tr(
            "nominations.standards.p4.text",
            "The highest evidentiary value is given to materials originating from independent and authoritative parties not subordinate to or directly dependent on the candidate. These include:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.standards.list1", [
            "Publications in recognized international or national business and industry media.",
            "Recommendation letters from leading industry experts, executives of partner companies, or clients.",
            "Reports from analytical agencies (Gartner, Forrester, McKinsey).",
            "Documents on previously received professional awards.",
            "Patents and certificates for intellectual property.",
          ]).map((item, idx) => (
            <li key={`std-list1-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p5.title", "Principle of Measurability and Date-Bound Nature:")}</strong>{" "}
          {tr(
            "nominations.standards.p5.text",
            "All presented results must be expressed in quantitative, auditable indicators (financial metrics, market share growth, implementation volumes). Data must contain clear time periods, and preference is given to a clear comparison of the state \"before\" and \"after\" the implementation of projects under the candidate's leadership."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p6.title", "Proof of Key Role (Critical Role):")}</strong>{" "}
          {tr(
            "nominations.standards.p6.text",
            "The candidate is obliged to prove a direct cause-and-effect relationship between their specific decisions, managerial actions, or authorial contribution and the achieved exceptional results. Documents confirming authority and testimonies from independent parties detailing the personal contribution are required."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p7.title", "Confidentiality and Completeness:")}</strong>{" "}
          {tr(
            "nominations.standards.p7.text",
            "Candidates are permitted to conceal commercially sensitive details (exact contract amounts, specific tariffs) provided that the fact of achievement, its scale, and significance remain fully provable. The presented data from different sources (financial reports, contracts, publications) must be internally consistent."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p8.title", "Selection Methodology and Evaluation Procedure:")}</strong>{" "}
          {tr(
            "nominations.standards.p8.text",
            "Evaluation is conducted in several stages to ensure maximum impartiality and compliance with the stated criteria."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p9.title", "Formal Verification:")}</strong>{" "}
          {tr(
            "nominations.standards.p9.text",
            "The Award Secretariat checks the completeness of documents, internal consistency of data, and the presence of the minimum required evidence package. At this stage, additional clarifications may be requested."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p10.title", "Expert Evaluation Based on Standardized Criteria:")}</strong>{" "}
          {tr(
            "nominations.standards.p10.text",
            "Each admitted application is evaluated independently by several members of the International Jury according to an approved scale (0-100 points) within a specific nomination. Evaluation focuses exclusively on:"
          )}
        </p>

        <ul className="wp-block-list">
          {trList("nominations.standards.list2", [
            "Role and Contribution (Critical Role): Proven decisive role of the candidate.",
            "Measurable Results: Confirmed quantitative and qualitative achievements.",
            "Scale and Influence: Impact on the company, industry, and international activity.",
            "Innovativeness / Originality: Presence of a unique contribution.",
            "Independent Recognition (Third-Party Evidence): Confirmations from authoritative external sources.",
          ]).map((item, idx) => (
            <li key={`std-list2-${idx}`}>{item}</li>
          ))}
        </ul>

        <p>
          <strong className="section-heading">{tr("nominations.standards.p11.title", "Confidentiality and Quality Control:")}</strong>{" "}
          {tr(
            "nominations.standards.p11.text",
            "To eliminate bias, a system of confidential review is used. The final score for each application is formed by aggregating and analyzing the independent scores of several judges. No single jury member has the authority to unilaterally determine the result."
          )}
        </p>

        <p className="nom_title">{tr("nominations.standards.winners.title", "Determination of Winners:")}</p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.shortlist.title", "Shortlist:")}</strong>{" "}
          {tr(
            "nominations.standards.shortlist.text",
            "Formed from candidates who have scored the highest points, which typically corresponds to the top 15% of all participants in the season."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.awardwinners.title", "Award Winners:")}</strong>{" "}
          {tr(
            "nominations.standards.awardwinners.text",
            "Determined from among the shortlisted finalists, representing the top 1% of participants, whose achievements were recognized by the jury as exceptional across all criteria. In some nominations, additional online interviews may be conducted with finalists for final confirmation of facts and details of contribution."
          )}
        </p>

        <p>
          <strong className="section-heading">{tr("nominations.standards.consequences.title", "Consequences of Providing Inaccurate Information:")}</strong>{" "}
          {tr(
            "nominations.standards.consequences.text",
            "Any signs of document forgery, data manipulation, plagiarism, or deliberate deception lead to immediate disqualification of the application at any stage of the competition."
          )}
        </p>
      </div>
    </>
  );
}
