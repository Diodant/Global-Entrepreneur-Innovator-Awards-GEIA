import React, { useMemo } from "react";
import { useI18n } from "../components/I18nProvider"; 

import heroImg from "../images/45.png";

import jury_1 from "../images/jury/1_jury.png";
import jury_2 from "../images/jury/2_jury.png";
import jury_3 from "../images/jury/3_jury.png";
import jury_4 from "../images/jury/4_jury.png";
import jury_5 from "../images/jury/5_jury.png";
import jury_6 from "../images/jury/6_jury.png";
import jury_7 from "../images/jury/7_jury.png";
import jury_8 from "../images/jury/8_jury.png";
import jury_9 from "../images/jury/9_jury.png";
import jury_10 from "../images/jury/10_jury.png";
import jury_11 from "../images/jury/11_jury.png";
import jury_12 from "../images/jury/12_jury.png";
import jury_13 from "../images/jury/13_jury.png";
import jury_14 from "../images/jury/14_jury.png";
import jury_15 from "../images/jury/15_jury.png";
import jury_16 from "../images/jury/16_jury.png";
import jury_17 from "../images/jury/17_jury.png";
import jury_18 from "../images/jury/18_jury.png";
import jury_19 from "../images/jury/19_jury.png";
import jury_20 from "../images/jury/20_jury.png";
import jury_21 from "../images/jury/21_jury.png";
import jury_22 from "../images/jury/22_jury.png";
import jury_23 from "../images/jury/23_jury.png";
import jury_24 from "../images/jury/24_jury.png";

/**
 * Данные (EN по умолчанию).
 * RU берём из geia.ru.json через ключи:
 *  jury.page.title
 *  jury.2018.title
 *  jury.2018.1.bio
 *  jury.2018.1.specialization
 *  ...
 *  jury.2025.15.bio
 *  jury.2025.15.specialization
 */

const GEIA_JURY = [
  {
    year: 2018,
    members: [
      {
        i: 1,
        name: "Dr. Elise Van den Berg",
        country: "Netherlands",
        bio:
          "Professor of Business Strategy and head of a research group on company scaling. Advised international scale-ups on entering EU markets. Publishes research on impact measurability and KPI models.",
        specialization:
          "Specialization: evaluation methodology, evidentiary standards, growth strategy.",
        photo: jury_1,
      },
      {
        i: 2,
        name: "Gabriel Moretti",
        country: "Italy",
        bio:
          "Former CEO of an industrial sector company group with operations in Europe and Asia. Led supply chain transformation and margin growth. Has experience managing large efficiency programs.",
        specialization: "Specialization: leadership, operational metrics, sustainable growth.",
        photo: jury_2,
      },
      {
        i: 3,
        name: "Helena Sjöström",
        country: "Sweden",
        bio:
          "Partner in a development and investment fund for technology companies. Supervised deals and supported the international expansion of portfolio projects. Evaluates business models, unit economics, and scalability.",
        specialization: "Specialization: investment expertise, due diligence, growth.",
        photo: jury_3,
      },
      {
        i: 4,
        name: "Antoine Leclercq",
        country: "France",
        bio:
          "Independent advisor on corporate transformation and governance. Participated in creating transparency standards for reporting for mid and large-scale companies. Has experience in committee work for industry associations.",
        specialization: "Specialization: corporate governance, ethics, data comparability.",
      },
      {
        i: 5,
        name: "Claire Whitfield",
        country: "United Kingdom",
        bio:
          'Former partner in an international strategy and digital transformation consulting firm. Led "vision-to-execution" projects with verifiable KPIs. Conducted evaluations of innovation programs in several countries.',
        specialization: "Specialization: strategic vision, transformation, results monitoring.",
      },
      {
        i: 6,
        name: "Masato Hasegawa",
        country: "Japan",
        bio:
          'CTO of a technology company with implementations in the enterprise segment. Responsible for R&D portfolio and commercialization of solutions. Has experience evaluating implementation based on "before/after" effect metrics.',
        specialization: "Specialization: innovation, implementation, technical evidentiary standards.",
      },
      {
        i: 7,
        name: "Noor Al-Hamadi",
        country: "UAE",
        bio:
          "Director for developing innovation ecosystems and partnerships. Supervised international cooperation programs and project acceleration. Has experience evaluating commercial viability and implementation scale.",
        specialization: "Specialization: international partnerships, growth, MENA market.",
      },
      {
        i: 8,
        name: "Rakesh Iyer",
        country: "India",
        bio:
          "Head of the commercial unit of a B2B company with an export model. Built a systemic sales function and partner channels. Works with contracts, implementation proofs, and client effects.",
        specialization: "Specialization: business development, deals, scaling.",
      },
      {
        i: 9,
        name: "Lin Qiang",
        country: "Singapore",
        bio:
          "Financial expert and former managing director for deals in the APAC region. Advises companies on financial model sustainability and metric transparency. Evaluates the quality of metrics and verifiability of results.",
        specialization: "Specialization: finance, verification, investment logic.",
      },
      {
        i: 10,
        name: "Soo-min Jeong",
        country: "South Korea",
        bio:
          "Director of Innovation for an industrial group with automation programs. Led implementations providing measurable effects on productivity and quality. Established data and reporting standards.",
        specialization: "Specialization: innovation achievement, operational KPIs, scaling implementations.",
      },
      {
        i: 11,
        name: "Iryna Kovalchuk",
        country: "Ukraine",
        bio:
          "Founder of an export-oriented product in the B2B sphere. Launched international partnerships and introduced solutions to new markets. Has experience with licensing and contractual verification.",
        specialization: "Specialization: entrepreneurship, international expansion, commercialization.",
      },
      {
        i: 12,
        name: "Arman Davtyan",
        country: "Armenia",
        bio:
          "Expert in risk management and integrity controls in the financial sector. Participated in implementing control systems verified by audit. Conducted independent checks of data and procedures.",
        specialization: "Specialization: compliance, reliability, risk management.",
      },
      {
        i: 13,
        name: "Mariya Stoyanova",
        country: "Bulgaria",
        bio:
          "COO of a consumer sector company with regional presence. Implemented cost optimization and efficiency improvement programs. Has experience managing multifunctional teams.",
        specialization: "Specialization: operational leadership, efficiency, scale.",
      },
      {
        i: 14,
        name: "Nguyễn Thái Sơn",
        country: "Vietnam",
        bio:
          "Business Development Head at an international company in the APAC region. Concluded partnership agreements and expanded sales geography. Skilled in evaluating evidence from contracts and KPIs.",
        specialization: "Specialization: BD, international markets, partnerships.",
      },
      {
        i: 15,
        name: "Diana Rusu",
        country: "Moldova",
        bio:
          "Independent specialist in KPI methodology and project evaluation. Worked with companies on standardizing reporting and effect measurability. Helped implement practices for evidence-based result description.",
        specialization: "Specialization: evidentiary standards, metrics, comparability.",
      },
    ],
    photosByIndex: { 1: jury_1, 2: jury_2, 3: jury_3 },
  },

  {
    year: 2019,
    members: [
      {
        i: 1,
        name: "Dr. Benedikt Krüger",
        country: "Germany",
        bio:
          "Professor of Corporate Finance and investment efficiency evaluation. Advised companies on ROI models and financial transparency. Participated in expert panels on sustainable growth.",
        specialization: "Specialization: finance, verification, investment discipline.",
        photo: jury_4,
      },
      {
        i: 2,
        name: "Sophie Delacourt",
        country: "France",
        bio:
          "Head of innovation programs in an international organization. Supervised implementations in several countries and evaluated effect by KPI. Has experience interacting with associations and committees.",
        specialization:
          "Specialization: innovation governance, implementation evidentiary standards, standards.",
        photo: jury_5,
      },
      {
        i: 3,
        name: "Niall O’Connor",
        country: "Ireland",
        bio:
          "Partner in a venture capital fund focused on B2B SaaS and infrastructure solutions. Supported scaling of portfolio companies to European markets. Evaluates growth metrics and business model sustainability.",
        specialization: "Specialization: due diligence, growth, international expansion.",
        photo: jury_6,
      },
      {
        i: 4,
        name: "Inés Calderón",
        country: "Spain",
        bio:
          "Former CEO of a company in the services sector with international contracts. Led operational model reform and profitability growth. Skilled at linking strategy with measurable results.",
        specialization: "Specialization: leadership, efficiency, KPI monitoring.",
      },
      {
        i: 5,
        name: "Pavel Horák",
        country: "Czech Republic",
        bio:
          "Independent expert on corporate governance and internal controls. Worked with companies on process transparency and conflict of interest prevention. Participated in developing ethical standards for evaluation procedures.",
        specialization: "Specialization: governance, ethics, procedural independence.",
      },
      {
        i: 6,
        name: "Ayşe Demir",
        country: "Turkey",
        bio:
          "Head of International Partnerships at a technology company. Concluded agreements in Europe and MENA, ensuring growth through channels. Evaluates the practical applicability of partnership models.",
        specialization: "Specialization: business development, partnerships, scaling.",
      },
      {
        i: 7,
        name: "Khalid Al-Rashid",
        country: "Saudi Arabia",
        bio:
          "Investment Director with experience evaluating projects in technology and industry. Supervised cross-border deals and growth programs. Has practice in verifying supporting documents and metrics.",
        specialization: "Specialization: investments, deals, result verification.",
      },
      {
        i: 8,
        name: "Mei Ling Tan",
        country: "Singapore",
        bio:
          'Director of Product Strategy and Development. Led the launch of international product lines and measured effect via adoption and retention metrics. Has experience evaluating "product-market fit" based on data.',
        specialization: "Specialization: product, strategy, effect measurability.",
      },
      {
        i: 9,
        name: "Akira Fujii",
        country: "Japan",
        bio:
          "Expert on technological implementations in the enterprise segment. Responsible for integrations and quality control of results. Works with implementation proofs and production KPIs.",
        specialization: "Specialization: implementation, technologies, measurable effect.",
      },
      {
        i: 10,
        name: "Jin-woo Kang",
        country: "South Korea",
        bio:
          "Head of Digital Transformation direction in a large group of companies. Implemented automation projects with confirmed time and cost savings. Built internal data and reporting standards.",
        specialization: "Specialization: transformation, KPI, operational effect.",
      },
      {
        i: 11,
        name: "Alena Novik",
        country: "Belarus",
        bio:
          "Entrepreneur in the B2B solutions sphere, export-oriented. Scaled the commercial model through partner channels. Has experience with contractual proof of implementation.",
        specialization: "Specialization: entrepreneurship, BD, international growth.",
      },
      {
        i: 12,
        name: "Rustam Kadyrov",
        country: "Uzbekistan",
        bio:
          "Head of the commercial unit in the production and logistics sector. Launched export directions and systematized sales. Evaluates evidence from contracts and operational metrics.",
        specialization: "Specialization: commerce, markets, result measurability.",
      },
      {
        i: 13,
        name: "Elżbieta Nowicka",
        country: "Poland",
        bio:
          "Professor of Entrepreneurship and Innovation Management. Researches scaling models and sustainable growth strategies. Participates in international conferences and expert councils.",
        specialization: "Specialization: evaluation methodology, entrepreneurship, innovations.",
      },
      {
        i: 14,
        name: "Vardan Mkrtchyan",
        country: "Armenia",
        bio:
          "Expert on compliance and risk management in technological projects. Supported implementations and procedures for verifying data reliability. Participated in independent process audits.",
        specialization: "Specialization: integrity, compliance, verifiability.",
      },
      {
        i: 15,
        name: "Nino Beridze",
        country: "Georgia",
        bio:
          "Project Manager in sustainable development and corporate transformations. Worked with international partners and development programs. Skilled at evaluating project impact using measurable indicators.",
        specialization: "Specialization: impact, strategy, evidentiary standards.",
      },
    ],
    photosByIndex: { 1: jury_4, 2: jury_5, 3: jury_6 },
  },

  {
    year: 2020,
    members: [
      {
        i: 1,
        name: "Dr. Lucien Martel",
        country: "France",
        bio:
          "Professor of Innovation Economics and consultant on industry impact evaluation. Conducted research on technology diffusion and standards. Participates in international expert panels.",
        specialization: "Specialization: industry effect, methodology, independent recognition.",
        photo: jury_7,
      },
      {
        i: 2,
        name: "Hannah Breuer",
        country: "Germany",
        bio:
          "COO of an international company with multi-country operations. Led optimization and efficiency improvement programs. Worked with KPI systems and strategy execution control.",
        specialization: "Specialization: operational leadership, efficiency, results monitoring.",
        photo: jury_8,
      },
      {
        i: 3,
        name: "Jasper van Leeuwen",
        country: "Netherlands",
        bio:
          "Partner in a growth fund, specialization – scaling to European and Asian markets. Evaluates metric sustainability and management team quality. Supported companies entering new regions.",
        specialization: "Specialization: investments, growth, international expansion.",
        photo: jury_9,
      },
      {
        i: 4,
        name: "Ewa Majewska",
        country: "Poland",
        bio:
          "Independent expert on corporate governance and evaluation ethics. Developed procedures for conflict of interest prevention. Has experience working with regulations of international awards.",
        specialization: "Specialization: governance, ethics, confidentiality.",
      },
      {
        i: 5,
        name: "Matteo Ricciardi",
        country: "Italy",
        bio:
          'Former General Director of a services sector company with international contracts. Led restructuring and profitability growth. Skilled at evaluating the "candidate\'s role" and contribution to results.',
        specialization: "Specialization: leadership, strategy, measurable KPIs.",
      },
      {
        i: 6,
        name: "Sakura Nishida",
        country: "Japan",
        bio:
          "Director of Innovation and Implementations in the technology sector. Supervised pilots and production launches with measurable effect. Has experience in IP protection and commercialization.",
        specialization: "Specialization: innovations, implementation, IP.",
      },
      {
        i: 7,
        name: "Arvind Narayan",
        country: "India",
        bio:
          "Head of Business Development in B2B enterprise. Built partner channels and closed major contracts. Works with implementation proofs and client effect.",
        specialization: "Specialization: BD, deals, scale.",
      },
      {
        i: 8,
        name: "Layla Al-Khouri",
        country: "UAE",
        bio:
          "Head of International Cooperation programs and industry partnerships. Supervised projects in fintech and cybersecurity. Evaluates scale, sustainability, and evidentiary standards of results.",
        specialization: "Specialization: partnerships, growth, international programs.",
      },
      {
        i: 9,
        name: "Chen Yuxuan",
        country: "China",
        bio:
          "Expert on product strategy and scaling platform solutions. Led product launches in foreign markets. Evaluates adoption, retention metrics, and economic effect.",
        specialization: "Specialization: product, scaling, metrics.",
      },
      {
        i: 10,
        name: "Min-seo Han",
        country: "South Korea",
        bio:
          "Director of Digital Transformation in an industrial group. Implemented automation projects with confirmed efficiency indicators. Built data standards and quality control.",
        specialization: "Specialization: transformation, KPI, operational effect.",
      },
      {
        i: 11,
        name: "Rinat Zhaksylykov",
        country: "Kazakhstan",
        bio:
          "Entrepreneur in B2B technologies and export sales. Scaled business through international partnerships. Has practice documenting results and contractual proof.",
        specialization: "Specialization: entrepreneurship, expansion, commerce.",
      },
      {
        i: 12,
        name: "Oksana Yaremchuk",
        country: "Ukraine",
        bio:
          'Head of Innovation and Commercialization direction. Supervised implementations and evaluation of "before/after" results. Has experience interacting with international clients.',
        specialization: "Specialization: implementation, evidentiary standards, international case studies.",
      },
      {
        i: 13,
        name: "Kirill Sazonov",
        country: "Russia",
        bio:
          "Independent expert on risk management and data verification. Supported internal control and compliance projects. Has experience building integrity procedures.",
        specialization: "Specialization: compliance, reliability, control.",
      },
      {
        i: 14,
        name: "Aizada Sultangazieva",
        country: "Kyrgyzstan",
        bio:
          "Head of commercial programs and partner network in the region. Ensured growth through channels and international contracts. Evaluates practical applicability and verifiability of results.",
        specialization: "Specialization: BD, partnerships, evidentiary standards.",
      },
      {
        i: 15,
        name: "Marek Svoboda",
        country: "Slovakia",
        bio:
          "Expert on operational models and efficiency. Worked with companies on productivity measurability and process sustainability. Participated in international industry projects.",
        specialization: "Specialization: efficiency, KPI, processes.",
      },
    ],
    photosByIndex: { 1: jury_7, 2: jury_8, 3: jury_9 },
  },

  {
    year: 2021,
    members: [
      {
        i: 1,
        name: "Dr. Pauline Girard",
        country: "France",
        bio:
          "Professor of Innovation Management and head of an executive education program. Publishes works on technology implementation and effect evaluation. Consults companies on result measurability.",
        specialization: "Specialization: innovations, methodology, KPI.",
        photo: jury_10,
      },
      {
        i: 2,
        name: "Sebastian Fuchs",
        country: "Germany",
        bio:
          "Former CEO of a manufacturing group exporting to several regions. Led international expansion and efficiency programs. Has experience managing P&L and risk management.",
        specialization: "Specialization: leadership, scale, sustainable growth.",
        photo: jury_11,
      },
      {
        i: 3,
        name: "Marieke de Groot",
        country: "Netherlands",
        bio:
          "Partner in an investment fund, specialization – growth companies and B2B infrastructure. Supported deals and entry into new markets. Evaluates metric evidentiary standards and unit economics sustainability.",
        specialization: "Specialization: investments, growth, due diligence.",
        photo: jury_12,
      },
      {
        i: 4,
        name: "Jonathan Price",
        country: "United Kingdom",
        bio:
          "Independent advisor on strategy and corporate governance. Worked with boards of directors on transparency and compliance. Participated in developing ethics codes for evaluation procedures.",
        specialization: "Specialization: governance, ethics, independence.",
      },
      {
        i: 5,
        name: "Laura Conti",
        country: "Italy",
        bio:
          "COO of a services sector company with international contracts. Implemented an operational efficiency improvement program. Has experience managing large teams and KPI systems.",
        specialization: "Specialization: operational discipline, efficiency, control.",
      },
      {
        i: 6,
        name: "Daisuke Morishita",
        country: "Japan",
        bio:
          "Director of Technology Implementations and Integrations. Led production launches and effect evaluation based on data. Has experience commercializing technologies.",
        specialization: "Specialization: implementation, technologies, measurable effect.",
      },
      {
        i: 7,
        name: "Ananya Bose",
        country: "India",
        bio:
          "Head of Partnerships and Sales in the enterprise segment. Built channels and developed international alliances. Evaluates deals based on implementation facts and results.",
        specialization: "Specialization: BD, partnerships, commercial effect.",
      },
      {
        i: 8,
        name: "Fahad Al-Khalifa",
        country: "UAE",
        bio:
          "Investment Manager with experience evaluating projects in fintech and e-commerce. Supported cross-border deals and scaling. Checks the quality of the evidentiary base and compliance.",
        specialization: "Specialization: investments, deals, verification.",
      },
      {
        i: 9,
        name: "Lê Quang Huy",
        country: "Vietnam",
        bio:
          "Head of Commercial Direction with regional expansion. Concluded international agreements and built partner networks. Skilled at evaluating proofs from contracts and KPIs.",
        specialization: "Specialization: BD, markets, scale.",
      },
      {
        i: 10,
        name: "Cheng Rui",
        country: "China",
        bio:
          "Expert on product platforms and operational analytics. Led implementation of solutions with measurable effect. Works with adoption, retention, and ROI metrics.",
        specialization: "Specialization: product, data, efficiency.",
      },
      {
        i: 11,
        name: "Aruzhan Tulegenova",
        country: "Kazakhstan",
        bio:
          "Entrepreneur and head of export direction in a technology business. Scaled sales to several countries. Has experience confirming results through partner letters and metrics.",
        specialization: "Specialization: entrepreneurship, expansion, evidentiary standards.",
      },
      {
        i: 12,
        name: "Volodymyr Shevchenko",
        country: "Ukraine",
        bio:
          "Expert on digital transformations and change management. Implemented KPI systems and control processes. Has experience with international projects and effect evaluation.",
        specialization: "Specialization: strategy, transformation, KPI.",
      },
      {
        i: 13,
        name: "Svetlana Baranova",
        country: "Belarus",
        bio:
          "Independent specialist in compliance and internal controls. Supported data verification procedures and conflict of interest prevention. Participated in process audits.",
        specialization: "Specialization: integrity, compliance, confidentiality.",
      },
      {
        i: 14,
        name: "Narek Harutyunyan",
        country: "Armenia",
        bio:
          "Technology leader with experience in implementations and integrations. Worked on scaling solutions and measuring effect. Has practice documenting implementation and results.",
        specialization: "Specialization: innovations, implementation, evidentiary base.",
      },
      {
        i: 15,
        name: "Ioana Popescu",
        country: "Romania",
        bio:
          "Head of Growth and Efficiency projects in international companies. Participated in building operational models and KPI control. Evaluates result sustainability over time.",
        specialization: "Specialization: efficiency, processes, scale.",
      },
    ],
    photosByIndex: { 1: jury_10, 2: jury_11, 3: jury_12 },
  },

  {
    year: 2022,
    members: [
      {
        i: 1,
        name: "Dr. Markus Reinhardt",
        country: "Germany",
        bio:
          "Professor of Strategic Management and researcher of corporate transformations. Publishes works on scaling and competitive strategies. Consults companies on KPI architecture and result verifiability.",
        specialization: "Specialization: strategy, methodology, evidentiary standards.",
        photo: jury_13,
      },
      {
        i: 2,
        name: "Aurélie Fontaine",
        country: "France",
        bio:
          "Former Director of Innovation in an international group. Led implementations and effect evaluation based on data. Participated in international technology committees.",
        specialization: "Specialization: innovations, implementation, standards.",
        photo: jury_14,
      },
      {
        i: 3,
        name: "Peter Varga",
        country: "Hungary",
        bio:
          "Independent expert on corporate governance and risks. Worked with boards of directors on transparency and compliance. Evaluates the quality of evidence and conflict of interest prevention.",
        specialization: "Specialization: governance, ethics, risk.",
        photo: jury_15,
      },
      {
        i: 4,
        name: "Sara Lindholm",
        country: "Sweden",
        bio:
          "Partner in a growth fund, specialization – technology companies and B2B solutions. Supported international expansion of portfolio projects. Evaluates growth metrics and business model sustainability.",
        specialization: "Specialization: investments, growth, due diligence.",
      },
      {
        i: 5,
        name: "Miguel Serrano",
        country: "Spain",
        bio:
          'COO of a company with operations in several countries. Implemented efficiency improvement and process control programs. Skilled at evaluating the "leader\'s role" and result measurability.',
        specialization: "Specialization: operational leadership, KPI, efficiency.",
      },
      {
        i: 6,
        name: "Yuna Kim",
        country: "South Korea",
        bio:
          "Director of Digital Transformation and Data. Led implementations with measurable effect on process speed and quality. Developed reporting standards for results.",
        specialization: "Specialization: transformation, data governance, KPI.",
      },
      {
        i: 7,
        name: "Haruto Arai",
        country: "Japan",
        bio:
          "Head of Technology Integrations in the enterprise segment. Launched production implementations and evaluated effect based on data. Has experience commercializing solutions.",
        specialization: "Specialization: implementation, technologies, effect.",
      },
      {
        i: 8,
        name: "Ayesha Siddiqui",
        country: "India",
        bio:
          "Leader of Commercial Development and Partnerships. Built international channels and ensured contract growth. Evaluates deals based on implementation facts and client results.",
        specialization: "Specialization: BD, partnerships, commercial effect.",
      },
      {
        i: 9,
        name: "Firas Al-Majid",
        country: "UAE",
        bio:
          "Investment Manager with experience in cross-border projects. Conducts checks of metrics and supporting documents. Participates in independent evaluation committees.",
        specialization: "Specialization: investments, verification, compliance.",
      },
      {
        i: 10,
        name: "Zhang Min",
        country: "China",
        bio:
          "Expert on platform business models and product scaling. Led international launches and adoption metric growth. Evaluates result evidentiary standards and sustainability.",
        specialization: "Specialization: product, scale, metrics.",
      },
      {
        i: 11,
        name: "Nikita Kolesnikov",
        country: "Russia",
        bio:
          "Independent specialist in internal controls and integrity. Supported the implementation of data verification procedures and compliance. Has experience with audited KPI systems.",
        specialization: "Specialization: compliance, reliability, control.",
      },
      {
        i: 12,
        name: "Madina Ismailova",
        country: "Uzbekistan",
        bio:
          "Head of Export Sales and Partner Channels. Launched international deals and expanded geography. Skilled at documenting effect and partner confirmations.",
        specialization: "Specialization: BD, expansion, evidentiary base.",
      },
      {
        i: 13,
        name: "Daria Pavlenko",
        country: "Ukraine",
        bio:
          'Head of Innovation and Commercialization programs. Supervised pilots, implementations, and "before/after" effect measurement. Has experience with international case studies.',
        specialization: "Specialization: innovations, implementation, KPI.",
      },
      {
        i: 14,
        name: "Artemis Nikolaou",
        country: "Greece",
        bio:
          "Expert on sustainable development strategy and industry impact. Participated in international projects and impact evaluation. Evaluates long-term nature and reproducibility of results.",
        specialization: "Specialization: impact, strategy, sustainability.",
      },
      {
        i: 15,
        name: "Nigar Mammadova",
        country: "Azerbaijan",
        bio:
          "Entrepreneur and head of regional growth. Scaled commercial operations to several markets. Evaluates solution applicability and result evidentiary standards.",
        specialization: "Specialization: entrepreneurship, growth, markets.",
      },
    ],
    photosByIndex: { 1: jury_13, 2: jury_14, 3: jury_15 },
  },

  {
    year: 2023,
    members: [
      {
        i: 1,
        name: "Dr. Camille Renard",
        country: "France",
        bio:
          "Professor of Entrepreneurship and Innovation Management. Publishes on the topic of scaling and industry impact evaluation. Consults companies on the evidentiary structure of results.",
        specialization: "Specialization: methodology, entrepreneurship, impact.",
        photo: jury_16,
      },
      {
        i: 2,
        name: "Jonas Hartmann",
        country: "Germany",
        bio:
          "Former CEO of a company with international expansion. Led strategic changes and market share growth. Has experience managing P&L and compliance.",
        specialization: "Specialization: leadership, strategy, sustainable growth.",
        photo: jury_17,
      },
      {
        i: 3,
        name: "Lotte Visser",
        country: "Netherlands",
        bio:
          "Partner in a growth fund, specialization – B2B technologies and infrastructure. Supported portfolio companies' entry into new regions. Evaluates growth metrics and data verifiability.",
        specialization: "Specialization: investments, due diligence, scaling.",
        photo: jury_18,
      },
      {
        i: 4,
        name: "Edward Bradley",
        country: "United Kingdom",
        bio:
          "Independent advisor on corporate governance and ethics. Worked on conflict of interest policies and procedural transparency. Participates in evaluation standards committees.",
        specialization: "Specialization: governance, ethics, independence.",
      },
      {
        i: 5,
        name: "Francesca Lombardi",
        country: "Italy",
        bio:
          "COO of an international company focused on operational efficiency. Implemented optimization and quality control programs. Evaluates result measurability and process sustainability.",
        specialization: "Specialization: operations, KPI, efficiency.",
      },
      {
        i: 6,
        name: "Keita Yamashiro",
        country: "Japan",
        bio:
          "Head of Implementations and Integrations in enterprise. Led production launches with measurable effect and data verification. Has experience in commercialization and licensing.",
        specialization: "Specialization: implementation, technologies, effect.",
      },
      {
        i: 7,
        name: "Rahul Deshpande",
        country: "India",
        bio:
          "Leader for Business Development and Strategic Partnerships. Built international channels and ensured contract growth. Evaluates deals based on proof of implementation and results.",
        specialization: "Specialization: BD, partnerships, commerce.",
      },
      {
        i: 8,
        name: "Mariam Al-Sayegh",
        country: "UAE",
        bio:
          "Investment Director and curator of innovation programs. Evaluates project viability and metric evidentiary standards. Has experience with cross-border initiatives.",
        specialization: "Specialization: investments, growth, compliance.",
      },
      {
        i: 9,
        name: "Tran Bao Anh",
        country: "Vietnam",
        bio:
          "Head of Commercial Direction with international contracts. Developed partner network and sales geography. Evaluates contractual confirmations and KPIs.",
        specialization: "Specialization: BD, markets, evidentiary standards.",
      },
      {
        i: 10,
        name: "Wang Jie",
        country: "China",
        bio:
          "Expert on product strategies and platform scaling. Led growth in adoption and retention metrics. Evaluates result sustainability and data quality.",
        specialization: "Specialization: product, scale, metrics.",
      },
      {
        i: 11,
        name: "Amina Kurmanova",
        country: "Kazakhstan",
        bio:
          "Entrepreneur in the export B2B solutions sphere. Scaled sales to several countries. Has experience documenting effect and partner confirmations.",
        specialization: "Specialization: entrepreneurship, expansion, commerce.",
      },
      {
        i: 12,
        name: "Maksim Petrenko",
        country: "Ukraine",
        bio:
          "Expert on digital transformation and change management. Implemented KPI systems and strategy execution control. Has experience with international projects.",
        specialization: "Specialization: strategy, transformation, KPI.",
      },
      {
        i: 13,
        name: "Ksenia Malysheva",
        country: "Belarus",
        bio:
          "Independent expert on compliance and internal controls. Conducted data reliability and procedure verification checks. Participated in process audits.",
        specialization: "Specialization: integrity, compliance, confidentiality.",
      },
      {
        i: 14,
        name: "Tigran Vardanyan",
        country: "Armenia",
        bio:
          'Technology leader with experience in implementations and effect measurement. Led integrations and "before/after" evaluation. Has practice working with technical evidentiary base.',
        specialization: "Specialization: innovations, implementation, evidentiary standards.",
      },
      {
        i: 15,
        name: "Irina Cebotari",
        country: "Moldova",
        bio:
          "Expert on KPI methodology and efficiency evaluation. Worked with companies on metric comparability and reporting. Evaluates result sustainability over time.",
        specialization: "Specialization: metrics, evidentiary standards, comparability.",
      },
    ],
    photosByIndex: { 1: jury_16, 2: jury_17, 3: jury_18 },
  },

  {
    year: 2024,
    members: [
      {
        i: 1,
        name: "Dr. Anneke Vos",
        country: "Netherlands",
        bio:
          'Professor of Corporate Strategy and Innovation Evaluation. Publishes on the topic "innovation → implementation → measurable effect". Consults companies on KPI architecture.',
        specialization: "Specialization: strategy, innovations, evidentiary standards.",
        photo: jury_19,
      },
      {
        i: 2,
        name: "Philippe Garnier",
        country: "France",
        bio:
          "Former Chairman of the Board and independent director. Participated in shaping governance standards and transparency. Evaluates management quality and result verifiability.",
        specialization: "Specialization: governance, ethics, compliance.",
        photo: jury_20,
      },
      {
        i: 3,
        name: "Caroline Hughes",
        country: "United Kingdom",
        bio:
          "Former partner in a transformation and growth consulting firm. Led international KPI and operational improvement programs. Evaluates the link between strategy and measurable result.",
        specialization: "Specialization: transformation, KPI, execution.",
        photo: jury_21,
      },
      {
        i: 4,
        name: "Lars Nyström",
        country: "Sweden",
        bio:
          "Partner in an investment fund, focus – sustainable growth and international markets. Supported scaling of companies in Europe. Evaluates financial discipline and metric evidentiary standards.",
        specialization: "Specialization: investments, growth, due diligence.",
      },
      {
        i: 5,
        name: "Sergio Alvarez",
        country: "Spain",
        bio:
          "COO of an international company with efficiency projects. Implemented optimization and quality control programs. Evaluates result reproducibility and scale.",
        specialization: "Specialization: operations, efficiency, KPI.",
      },
      {
        i: 6,
        name: "Rina Watanabe",
        country: "Japan",
        bio:
          "Leader of Technological Implementations in enterprise. Led production launches and effect evaluation based on data. Has experience in commercialization and licensing.",
        specialization: "Specialization: implementation, technologies, effect.",
      },
      {
        i: 7,
        name: "Vikram Chatterjee",
        country: "India",
        bio:
          "Head of Business Development and Major Partnerships. Concluded strategic agreements and built channels. Evaluates deals based on confirmations and client results.",
        specialization: "Specialization: BD, partnerships, commercial effect.",
      },
      {
        i: 8,
        name: "Huda Al-Khazali",
        country: "UAE",
        bio:
          "Investment Manager and curator of innovation programs. Conducts verification of metrics and supporting documents. Has experience with cross-border projects.",
        specialization: "Specialization: investments, verification, compliance.",
      },
      {
        i: 9,
        name: "Luu Minh Trang",
        country: "Vietnam",
        bio:
          "Head of Commercial Direction and Expansion. Developed international contracts and partnerships. Evaluates result evidentiary standards and influence scale.",
        specialization: "Specialization: markets, BD, KPI.",
      },
      {
        i: 10,
        name: "Xu Wen",
        country: "China",
        bio:
          "Expert on product platforms and growth. Led scaling of adoption and retention metrics. Evaluates sustainability and data quality.",
        specialization: "Specialization: product, scale, metrics.",
      },
      {
        i: 11,
        name: "Aigerim Nurtayeva",
        country: "Kazakhstan",
        bio:
          "Entrepreneur and Head of International Sales. Scaled export and partner channels. Has experience confirming effect and documenting results.",
        specialization: "Specialization: entrepreneurship, expansion, commerce.",
      },
      {
        i: 12,
        name: "Serhii Melnyk",
        country: "Ukraine",
        bio:
          'Expert on digital transformation and operational KPIs. Implemented "before/after" effect measurement systems. Participated in international programs.',
        specialization: "Specialization: transformation, KPI, evidentiary standards.",
      },
      {
        i: 13,
        name: "Yuliya Karpova",
        country: "Russia",
        bio:
          "Independent expert on compliance and internal controls. Supported verification of data reliability and procedures. Evaluates integrity and risk frameworks.",
        specialization: "Specialization: compliance, reliability, control.",
      },
      {
        i: 14,
        name: "Bakhtiyar Iskenderov",
        country: "Azerbaijan",
        bio:
          "Head of Growth programs and partnerships. Developed international channels and deals. Evaluates solution applicability and result confirmation.",
        specialization: "Specialization: BD, growth, markets.",
      },
      {
        i: 15,
        name: "Ana-Maria Ionescu",
        country: "Romania",
        bio:
          "Expert on sustainable development strategy and impact evaluation. Worked with international projects and effect metrics. Evaluates long-term nature of results.",
        specialization: "Specialization: impact, strategy, sustainability.",
      },
    ],
    photosByIndex: { 1: jury_19, 2: jury_20, 3: jury_21 },
  },

  {
    year: 2025,
    members: [
      {
        i: 1,
        name: "Dr. Stefan Baumann",
        country: "Germany",
        bio:
          "Professor of Strategic Management and Competitive Strategies. Publishes on the topic of scaling and measurable results. Consults companies on KPI and data verification.",
        specialization: "Specialization: strategy, methodology, evidentiary standards.",
        photo: jury_22,
      },
      {
        i: 2,
        name: "Élise Charpentier",
        country: "France",
        bio:
          "Independent director and advisor on governance. Participated in developing compliance and ethics procedures. Evaluates management transparency and result verifiability.",
        specialization: "Specialization: governance, ethics, independence.",
        photo: jury_23,
      },
      {
        i: 3,
        name: "Victoria Lane",
        country: "United Kingdom",
        bio:
          'Former partner in a transformation consulting firm. Led international growth and efficiency programs. Evaluates "strategy → execution" by KPI.',
        specialization: "Specialization: transformation, KPI, result.",
        photo: jury_24,
      },
      {
        i: 4,
        name: "Mikkel Sørensen",
        country: "Denmark",
        bio:
          "Partner in an investment fund with focus on B2B technologies. Supported international expansion of companies. Evaluates financial discipline and metric sustainability.",
        specialization: "Specialization: investments, due diligence, growth.",
      },
      {
        i: 5,
        name: "Riccardo Bellini",
        country: "Italy",
        bio:
          "COO of a company with multi-country operations. Implemented efficiency and quality management programs. Evaluates scale and result reproducibility.",
        specialization: "Specialization: operations, efficiency, KPI.",
      },
      {
        i: 6,
        name: "Haruka Shimizu",
        country: "Japan",
        bio:
          "Leader of Technological Implementations and Integrations. Led production launches and effect evaluation based on data. Has experience in commercialization and licensing.",
        specialization: "Specialization: implementation, technologies, effect.",
      },
      {
        i: 7,
        name: "Neha Ranganathan",
        country: "India",
        bio:
          "Head of Business Development and Strategic Partnerships. Concluded international agreements and built channels. Evaluates implementation evidentiary standards and commercial effect.",
        specialization: "Specialization: BD, partnerships, deals.",
      },
      {
        i: 8,
        name: "Salim Al-Qasimi",
        country: "UAE",
        bio:
          "Investment Manager with experience in cross-border projects. Conducts checks of supporting documents and metrics. Participates in independent committees.",
        specialization: "Specialization: investments, verification, compliance.",
      },
      {
        i: 9,
        name: "Phạm Tuấn Kiệt",
        country: "Vietnam",
        bio:
          "Head of Markets and Expansion in the APAC region. Developed partnerships and international contracts. Evaluates result evidentiary standards by KPI.",
        specialization: "Specialization: BD, markets, scale.",
      },
      {
        i: 10,
        name: "Gao Lin",
        country: "China",
        bio:
          "Expert on product strategies and platform growth. Led growth in adoption and retention. Evaluates data quality and result sustainability.",
        specialization: "Specialization: product, scaling, metrics.",
      },
      {
        i: 11,
        name: "Aysulu Beketova",
        country: "Kazakhstan",
        bio:
          "Entrepreneur and Head of Export Operations. Scaled sales to several countries. Has experience documenting effect and confirmations.",
        specialization: "Specialization: entrepreneurship, expansion, commerce.",
      },
      {
        i: 12,
        name: "Tetiana Hrytsenko",
        country: "Ukraine",
        bio:
          "Expert on digital transformation and efficiency metrics. Implemented KPI systems and execution control. Has experience with international projects.",
        specialization: "Specialization: transformation, KPI, evidentiary standards.",
      },
      {
        i: 13,
        name: "Aliaksandr Zhuk",
        country: "Belarus",
        bio:
          "Independent expert on compliance and internal controls. Supported integrity procedures and data verification. Evaluates risk frameworks and result reliability.",
        specialization: "Specialization: compliance, control, confidentiality.",
      },
      {
        i: 14,
        name: "Farrukh Karimov",
        country: "Uzbekistan",
        bio:
          "Head of Business Development and Partner Network. Launched international deals and expanded sales geography. Evaluates solution applicability and effect confirmation.",
        specialization: "Specialization: BD, partnerships, markets.",
      },
      {
        i: 15,
        name: "Maia Japaridze",
        country: "Georgia",
        bio:
          "Expert on industry impact evaluation and sustainable development. Worked with international programs and impact metrics. Evaluates long-term nature and reproducibility of result.",
        specialization: "Specialization: impact, strategy, sustainability.",
      },
    ],
    photosByIndex: { 1: jury_22, 2: jury_23, 3: jury_24 },
  },
];

function JuryCard({ member, year, t, tr }) {
  // ключи перевода
  const bioKey = `jury.${year}.${member.i}.bio`;
  const specKey = `jury.${year}.${member.i}.specialization`;

  // ✅ если перевода нет — показываем EN из данных
  const bio = (() => {
    const v = t(bioKey);
    return v === bioKey ? member.bio : v;
  })();

  const specialization = (() => {
    const v = t(specKey);
    return v === specKey ? member.specialization : v;
  })();

  return (
    <article className="juryCard">
      <div className="juryCard__media">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`${member.name} (${member.country})`}
            className="juryCard__img"
            loading="lazy"
          />
        ) : (
          <div className="juryCard__noPhoto">{tr("jury.photo.placeholder", "Photo unavailable")}</div>
        )}
      </div>

      <div className="juryCard__body">
        <p className="juryCard__name">
          {member.name} <span className="juryCard__country">({member.country})</span>
        </p>
        <p className="juryCard__bio">{bio}</p>
        <p className="juryCard__spec">{specialization}</p>
      </div>
    </article>
  );
}

function JuryLine({ member, year, t }) {
  const bioKey = `jury.${year}.${member.i}.bio`;
  const specKey = `jury.${year}.${member.i}.specialization`;

  const bio = (() => {
    const v = t(bioKey);
    return v === bioKey ? member.bio : v;
  })();

  const specialization = (() => {
    const v = t(specKey);
    return v === specKey ? member.specialization : v;
  })();

  return (
    <div className="juryLine">
      <p className="juryLine__head">
        <span className="juryLine__name">{member.name}</span>{" "}
        <span className="juryLine__country">({member.country})</span>
      </p>
      <p className="juryLine__bio">{bio}</p>
      <p className="juryLine__spec">{specialization}</p>
    </div>
  );
}

function YearSection({ year, members, t, tr }) {
  // первые 3 — карточки; остальные — списком (как у тебя в исходнике)
  const featured = members.slice(0, 3);
  const rest = members.slice(3);

  const yearTitleKey = `jury.${year}.title`;
  const yearTitle = tr(yearTitleKey, `GEIA International Jury ${year}`);

  return (
    <section className="juryYear" key={year}>
      <p className="nom_title">{yearTitle}</p>

      <div className="juryCards">
        {featured.map((m) => (
          <JuryCard key={`${year}-${m.i}-${m.name}`} member={m} year={year} t={t} tr={tr} />
        ))}
      </div>

      <div className="juryList">
        {rest.map((m) => (
          <JuryLine key={`${year}-${m.i}-${m.name}`} member={m} year={year} t={t} />
        ))}
      </div>

      <hr className="wp-block-separator has-alpha-channel-opacity" />
    </section>
  );
}

export default function GEIAJury({ data }) {
  const { t } = useI18n();

  // ✅ Обёртка: если t вернул ключ — показываем fallback (точно как в Winners)
  const tr = (key, fallback) => {
    const v = t(key);
    return v === key ? fallback : v;
  };

  const juryData = useMemo(() => data || GEIA_JURY, [data]);

  return (
    <>
      <header className="hero hero--rich-page mt-60">
        <div className="container">
          <div className="hero__columns">
            <div>
              <h1 className="hero__title" style={{ visibility: "visible" }}>
                {tr("jury.page.title", "GEIA International Jury")}
              </h1>
            </div>
          </div>

          <div className="hero__media">
            <div className="placeholder-media hero-lazyloaded">
              <picture>
                <source media="(max-width: 640px)" srcSet={heroImg} />
                <source srcSet={heroImg} />
                <img src={heroImg} className="lazyloaded" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </header>

      <div className="blocks-container juryPage">
        {juryData.map((y) => (
          <YearSection key={y.year} year={y.year} members={y.members} t={t} tr={tr} />
        ))}
      </div>
    </>
  );
}
