import React, { useMemo } from "react";
import { useI18n } from "../components/I18nProvider"; // поправь путь под свой проект

import img45 from "../images/45.png";

import win_1_2018 from "../images/winners/win_1_2018.png";
import win_2_2018 from "../images/winners/unnamed (20).png";
import win_3_2018 from "../images/winners/unnamed (21).png";
import win_4_2018 from "../images/winners/unnamed (22).png";
import win_5_2018 from "../images/winners/unnamed (23).png";
import win_6_2018 from "../images/winners/unnamed (24).png";

import win_1_2019 from "../images/winners/unnamed (25).png";
import win_2_2019 from "../images/winners/unnamed (26).png";
import win_3_2019 from "../images/winners/unnamed (27).png";
import win_4_2019 from "../images/winners/unnamed (28).png";
import win_5_2019 from "../images/winners/unnamed (29).png";
import win_6_2019 from "../images/winners/unnamed (30).png";

import win_1_2020 from "../images/winners/unnamed (31).png";
import win_2_2020 from "../images/winners/unnamed (32).png";
import win_3_2020 from "../images/winners/unnamed (33).png";
import win_4_2020 from "../images/winners/unnamed (34).png";
import win_5_2020 from "../images/winners/unnamed (35).png";
import win_6_2020 from "../images/winners/unnamed (36).png";

import win_1_2021 from "../images/winners/unnamed (37).png";
import win_2_2021 from "../images/winners/unnamed (38).png";
import win_3_2021 from "../images/winners/unnamed (39).png";
import win_4_2021 from "../images/winners/unnamed (40).png";
import win_5_2021 from "../images/winners/unnamed (41).png";
import win_6_2021 from "../images/winners/unnamed (42).png";

import win_1_2022 from "../images/winners/unnamed (43).png";
import win_2_2022 from "../images/winners/unnamed (44).png";
import win_3_2022 from "../images/winners/unnamed (45).png";
import win_4_2022 from "../images/winners/unnamed (46).png";
import win_5_2022 from "../images/winners/unnamed (47).png";
import win_6_2022 from "../images/winners/unnamed (48).png";

import win_1_2023 from "../images/winners/unnamed (49).png";
import win_2_2023 from "../images/winners/unnamed (50).png";
import win_3_2023 from "../images/winners/unnamed (51).png";
import win_4_2023 from "../images/winners/unnamed (52).png";
import win_5_2023 from "../images/winners/unnamed (53).png";
import win_6_2023 from "../images/winners/unnamed (54).png";

import win_1_2024 from "../images/winners/unnamed (55).png";
import win_2_2024 from "../images/winners/unnamed (56).png";
import win_3_2024 from "../images/winners/unnamed (57).png";
import win_4_2024 from "../images/winners/unnamed (58).png";
import win_5_2024 from "../images/winners/unnamed (59).png";
import win_6_2024 from "../images/winners/unnamed (60).png";

import win_1_2025 from "../images/winners/unnamed (61).png";
import win_2_2025 from "../images/winners/unnamed (62).png";
import win_3_2025 from "../images/winners/unnamed (63).png";
import win_4_2025 from "../images/winners/unnamed (64).png";
import win_5_2025 from "../images/winners/unnamed (65).png";
import win_6_2025 from "../images/winners/unnamed (66).png";

/**
 * Данные (EN по умолчанию).
 * RU берём из geia.ru.json через ключ winners.{year}.{i}.text
 */
const GEIA_WINNERS = [
  {
    year: 2018,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Anna Keller",
        country: "Germany",
        position: "Chief Executive Officer (CEO)",
        company:
          "Nordline Group GmbH (Germany) — a European group specializing in industrial automation and B2B solutions for manufacturing and logistics.",
        text:
          "Anna Keller was recognized for leading a large-scale international transformation of the company across four key European markets and expanding into new commercial corridors in the MENA region.",
        photo: win_1_2018,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Timur Sadykov",
        country: "Kazakhstan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "QazTech Venture Labs (Kazakhstan) — a scale-up in fintech infrastructure and B2B solutions for digital services.",
        text:
          "Timur Sadykov received the award for founding a company with a strong international scaling model and establishing a sustainable growth strategy.",
        photo: win_2_2018,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Aiko Tanaka",
        country: "Japan",
        position: "Vice President, Global Partnerships & Business Development",
        company:
          "Kensai Digital Solutions Co., Ltd. (Japan) — a provider of enterprise technology solutions for retail, logistics, and financial services.",
        text:
          "Aiko Tanaka was recognized for building an international partner network and developing sustainable revenue growth channels through strategic alliances.",
        photo: win_3_2018,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Isabelle Moreau",
        country: "France",
        position: "Head of Industry Standards & Transformation",
        company:
          "Aurelia Consulting & Industry Partners (France) — a consulting group working with financial and industrial sector enterprises in the EU.",
        text:
          "Isabelle Moreau received the award for an outstanding industry contribution—the development and implementation of a methodology adopted by multiple market players.",
        photo: win_4_2018,
      },
      {
        award: "Strategic Vision Award",
        name: "Omar Al-Fahad",
        country: "UAE",
        position: "Chief Strategy Officer (CSO)",
        company:
          "Emirate Growth Holdings (UAE) — an investment-operating group with assets in logistics, e-commerce, and service platforms across the MENA region.",
        text:
          "Omar Al-Fahad was recognized for strategic vision and the implementation of a diversification program that formed a new business platform and a sustainable development model.",
        photo: win_5_2018,
      },
      {
        award: "Innovation Achievement Award",
        name: "Aram Petrosyan",
        country: "Armenia",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "OptiChain Technologies (Armenia) — a developer of solutions for cost optimization and efficiency in manufacturing and logistics systems (B2B).",
        text:
          "Aram Petrosyan received the award for implementing an innovative solution with a confirmed measurable effect and scalability across different markets.",
        photo: win_6_2018,
      },
    ],
  },

  {
    year: 2019,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Sofia Romano",
        country: "Italy",
        position: "Chief Operating Officer (COO)",
        company:
          "Romano Industrial Systems S.p.A. (Italy) — a manufacturing and engineering group providing solutions for industrial infrastructure and supply chains in Europe and MENA.",
        text:
          "Sofia Romano was recognized for successful business scaling and achieving sustainable growth of key KPIs across multiple markets.",
        photo: win_1_2019,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Olha Hnatenko",
        country: "Ukraine",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "NovaBridge Digital (Ukraine) — a product company in B2B SaaS and automation of commercial processes for international clients.",
        text:
          "Olha Hnatenko received the award for creating a product that proved its competitiveness and growth through international channels.",
        photo: win_2_2019,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Ravi Mehta",
        country: "India",
        position: "Director, Enterprise Partnerships & Global Sales",
        company:
          "AstraCore Technologies Pvt. Ltd. (India) — a provider of enterprise solutions in analytics, security, and digital infrastructure for large organizations.",
        text:
          "Ravi Mehta was recognized for securing strategic alliances and growing the portfolio of enterprise contracts through international partnerships.",
        photo: win_3_2019,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Charlotte Bennett",
        country: "United Kingdom",
        position: "Head of Industry Standards & Governance",
        company:
          "Bennett & Partners Advisory (United Kingdom) — an expert advisory practice on standardization and implementation of industry management models in B2B sectors.",
        text:
          "Charlotte Bennett received the award for influencing industry practices through standardization, methodology development, and independent recognition by the professional community.",
        photo: win_4_2019,
      },
      {
        award: "Strategic Vision Award",
        name: "Nguyen Minh Khoa",
        country: "Vietnam",
        position: "Chief Strategy & Transformation Officer",
        company:
          "Pacific Nexus Group (Vietnam) — a group of companies in e-commerce and logistics with regional presence in Southeast Asia.",
        text:
          "Nguyen Minh Khoa was recognized for strategic vision and implementing a transformation roadmap with measurable results.",
        photo: win_5_2019,
      },
      {
        award: "Innovation Achievement Award",
        name: "Lim Jia Ren",
        country: "Singapore",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "Quantara Solutions Pte. Ltd. (Singapore) — a developer of technology B2B solutions in process automation and performance analytics.",
        text:
          "Lim Jia Ren received the award for implementing a technology solution with confirmed ROI and practical impact in a real operational environment.",
        photo: win_6_2019,
      },
    ],
  },

  {
    year: 2020,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Johan Lindström",
        country: "Sweden",
        position: "Chief Executive Officer (CEO)",
        company:
          "NordicBridge Industries AB (Sweden) — an international group in industrial logistics and supply chain solutions with presence in Europe and Asia.",
        text:
          "Johan Lindström was recognized for restructuring the management model and achieving sustained growth in international market share under high competition.",
        photo: win_1_2020,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Dilshod Karimov",
        country: "Uzbekistan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "SilkRoute Commerce Group (Uzbekistan) — an export-oriented company in B2B trade and supply-chain services for manufacturers.",
        text:
          "Dilshod Karimov received the award for launching an export model and scaling the business across multiple countries with confirmed commercial results.",
        photo: win_2_2020,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Hiroshi Nakamura",
        country: "Japan",
        position: "Global Head of Partnerships & Business Development",
        company:
          "Shinrai Enterprise Systems (Japan) — a provider of enterprise platforms and integration solutions for large companies in retail, finance, and logistics.",
        text:
          "Hiroshi Nakamura was recognized for developing international integrations and growing partner sales through strategic alliances.",
        photo: win_3_2020,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Marta Zielińska",
        country: "Poland",
        position: "Director of Industry Performance Standards",
        company:
          "Central Europe Market Institute (Poland) — an analytical and expert organization working on performance measurement standards in corporate systems.",
        text:
          "Marta Zielińska received the award for introducing an industry performance measurement standard that ensured comparability of results and increased transparency of management decisions.",
        photo: win_4_2020,
      },
      {
        award: "Strategic Vision Award",
        name: "Park Soo-jin",
        country: "South Korea",
        position: "Chief Digital Transformation Officer",
        company:
          "NeoSeoul Commerce & Platforms (South Korea) — a company developing digital platforms and infrastructure solutions for e-commerce and customer services in Asia.",
        text:
          "Park Soo-jin was recognized for a digital transformation strategy and confirmed growth in key performance metrics.",
        photo: win_5_2020,
      },
      {
        award: "Innovation Achievement Award",
        name: "Ilya Morozov",
        country: "Belarus",
        position: "Founder & Chief Innovation Officer",
        company:
          "ProcessNova Technologies (Belarus) — a developer of solutions to improve operational process quality and reduce losses in corporate systems.",
        text:
          "Ilya Morozov received the award for an innovative solution that improved process quality and reduced operational losses with confirmed impact.",
        photo: win_6_2020,
      },
    ],
  },

  {
    year: 2021,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Thomas Schneider",
        country: "Germany",
        position: "Chief Executive Officer (CEO)",
        company:
          "Schneider Global Operations GmbH (Germany) — an international group in B2B logistics, industrial services, and operational outsourcing.",
        text:
          "Thomas Schneider was recognized for international expansion while maintaining sustainable operational efficiency and manageability of key metrics.",
        photo: win_1_2021,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Nargiz Aliyeva",
        country: "Azerbaijan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "Caspian Market Innovations (Azerbaijan) — an entrepreneurial group developing product solutions at the intersection of consumer services and B2B platforms.",
        text:
          "Nargiz Aliyeva received the award for creating a new market niche and growing across multiple markets through a scalable business model.",
        photo: win_2_2021,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Fatima Al-Mansoori",
        country: "UAE",
        position: "Director of Strategic Partnerships & Growth",
        company:
          "GulfBridge Ventures & Platforms (UAE) — an investment-operating structure developing new verticals in fintech and corporate ecosystems across MENA.",
        text:
          "Fatima Al-Mansoori was recognized for launching strategic partnerships that drove growth in new business verticals and expanded commercial presence.",
        photo: win_3_2021,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Pierre Dubois",
        country: "France",
        position: "Chair, Professional Practice & Standards Committee",
        company:
          "European Industry Practices Forum (France/EU) — a professional platform focused on developing industry practices in management and efficiency.",
        text:
          "Pierre Dubois received the award for spreading a practice recognized by professional communities and applicable across multiple organizations.",
        photo: win_4_2021,
      },
      {
        award: "Strategic Vision Award",
        name: "Mateusz Kowalski",
        country: "Poland",
        position: "Chief Strategy & Scaling Officer",
        company:
          "Vistula Growth Technologies (Poland) — a technology company developing B2B solutions for operational efficiency and scaling of corporate processes in Europe.",
        text:
          "Mateusz Kowalski was recognized for a scaling strategy and implementing a roadmap with measurable impact.",
        photo: win_5_2021,
      },
      {
        award: "Innovation Achievement Award",
        name: "Choi Min-ho",
        country: "South Korea",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "SeoulNova Systems (South Korea) — a developer of enterprise solutions in automation, performance analytics, and digital operations platforms.",
        text:
          "Choi Min-ho received the award for implementing an innovation with confirmed metrics and subsequent scaling across multiple application environments.",
        photo: win_6_2021,
      },
    ],
  },

  {
    year: 2022,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Emma Collins",
        country: "United Kingdom",
        position: "Chief Executive Officer (CEO)",
        company:
          "Collins International Growth PLC (United Kingdom) — an international group in B2B services and technology support with presence in Europe and Asia.",
        text:
          "Emma Collins was recognized for international business growth and improving the resilience of the company’s financial model.",
        photo: win_1_2022,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Aida Nurlanova",
        country: "Kazakhstan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "SteppeLink Export Technologies (Kazakhstan) — a product company developing export-oriented solutions for the corporate segment through international partner networks.",
        text:
          "Aida Nurlanova received the award for creating an export product and scaling through partner-led models across multiple markets.",
        photo: win_2_2022,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Siti Nur Aisyah",
        country: "Malaysia",
        position: "Head of Global Business Development & Partnerships",
        company:
          "Aisyah Growth Solutions Berhad (Malaysia) — a company developing international commercial channels and BD infrastructure for B2B products across Asia and Europe.",
        text:
          "Siti Nur Aisyah was recognized for business growth through international channels and building a systematic BD function as a sustainable growth mechanism.",
        photo: win_3_2022,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Marco Bianchi",
        country: "Italy",
        position: "Chairman, Industry Methodology & Transformation Council",
        company:
          "Bianchi Management Institute (Italy) — an expert organization developing and implementing management methodologies to improve business process efficiency.",
        text:
          "Marco Bianchi received the award for industry influence through introducing a new management methodology that gained confirmation of applicability.",
        photo: win_4_2022,
      },
      {
        award: "Strategic Vision Award",
        name: "Nikhil Kapoor",
        country: "India",
        position: "Chief Strategy & Market Expansion Officer",
        company:
          "Kapoor Global Ventures Ltd. (India) — a company developing market entry strategies and scaling B2B products internationally.",
        text:
          "Nikhil Kapoor was recognized for a market expansion strategy and confirmed KPI results within an executed roadmap.",
        photo: win_5_2022,
      },
      {
        award: "Innovation Achievement Award",
        name: "Alina Rusu",
        country: "Moldova",
        position: "Founder & Chief Innovation Officer",
        company:
          "Rusu Efficiency Systems (Moldova) — a developer of solutions to improve process efficiency and optimization of operational KPIs in a B2B environment.",
        text:
          "Alina Rusu received the award for implementing a solution with measurable effect on efficiency and quality confirmed in a real environment.",
        photo: win_6_2022,
      },
    ],
  },

  {
    year: 2023,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Elena García",
        country: "Spain",
        position: "Chief Executive Officer (CEO)",
        company:
          "García Global Operations S.A. (Spain) — an international group in B2B services and operational management with presence in Europe and Latin America.",
        text:
          "Elena García was recognized for building a scalable management model and growing international operations while expanding business geography.",
        photo: win_1_2023,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Bakytbek Isakov",
        country: "Kyrgyzstan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "Isakov Export & Growth Group (Kyrgyzstan) — an entrepreneurial structure developing B2B verticals and export supply chains for international partners.",
        text:
          "Bakytbek Isakov received the award for building a business with sustainable growth and proven entry into foreign markets.",
        photo: win_2_2023,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Yuki Morita",
        country: "Japan",
        position: "Vice President, Enterprise Sales & Strategic Integrations",
        company:
          "Morita Enterprise Technologies (Japan) — a provider of enterprise platforms and integration solutions for large companies.",
        text:
          "Yuki Morita was recognized for securing major contracts and growing the business through strategic integrations that strengthened international presence.",
        photo: win_3_2023,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Katarzyna Wiśniewska",
        country: "Poland",
        position: "Head of International Methodology & Standards",
        company:
          "European Performance Standards Institute (Poland/EU) — an organization developing and implementing management and performance evaluation methodologies.",
        text:
          "Katarzyna Wiśniewska received the award for a methodology adopted by multiple companies across different countries with international replicability.",
        photo: win_4_2023,
      },
      {
        award: "Strategic Vision Award",
        name: "Hassan Al-Khatib",
        country: "UAE",
        position: "Chief Strategy Officer (CSO)",
        company:
          "Al-Khatib Growth & Investments (UAE) — an investment-operating group developing projects in technology services and corporate platforms across MENA.",
        text:
          "Hassan Al-Khatib was recognized for a diversification strategy and creating a portfolio of new directions that improved resilience and expanded opportunities.",
        photo: win_5_2023,
      },
      {
        award: "Innovation Achievement Award",
        name: "Timur Akhmetov",
        country: "Russia",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "Akhmetov Process Security Lab (Russia) — a developer of solutions for risk management, process automation, and acceleration of operational cycles in B2B.",
        text:
          "Timur Akhmetov received the award for implementing an innovation that reduced risks and accelerated key processes with confirmed measurable impact.",
        photo: win_6_2023,
      },
    ],
  },

  {
    year: 2024,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Felix Weber",
        country: "Germany",
        position: "Chief Executive Officer (CEO)",
        company:
          "Weber International Transformation Group GmbH (Germany) — an international group in B2B operations and technology transformation with presence in Europe and Asia.",
        text:
          "Felix Weber was recognized for leadership in comprehensive transformation and achieving confirmed international results.",
        photo: win_1_2024,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Nataliia Bondarenko",
        country: "Ukraine",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "Bondarenko Product Systems (Ukraine) — a product company developing digital solutions and services with an international scaling model.",
        text:
          "Nataliia Bondarenko received the award for launching and scaling a product with proven market validation and sustainable growth.",
        photo: win_2_2024,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Amit Sharma",
        country: "India",
        position: "Head of Global Business Development & Strategic Alliances",
        company:
          "Sharma Enterprise Growth Partners (India) — a B2B company developing international commercial channels and partner alliances in the enterprise segment.",
        text:
          "Amit Sharma was recognized for building a commercial function and growing through strategic alliances that expanded the business and new revenue channels.",
        photo: win_3_2024,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Claudia Rossi",
        country: "Italy",
        position: "Chair, Industry Practice & Standards Council",
        company:
          "Rossi Industry Advisory Institute (Italy) — an expert organization working on development of management practices and industry methodologies.",
        text:
          "Claudia Rossi received the award for contributing to evolution of industry practices and independent recognition by the professional community.",
        photo: win_4_2024,
      },
      {
        award: "Strategic Vision Award",
        name: "Nguyễn Thảo Linh",
        country: "Vietnam",
        position: "Chief Strategy & Growth Officer",
        company:
          "Thao Linh Growth Platforms (Vietnam) — a company developing growth strategies and scaling business directions in Southeast Asia’s digital economy.",
        text:
          "Nguyễn Thảo Linh was recognized for a growth strategy and implementing a roadmap with confirmed results.",
        photo: win_5_2024,
      },
      {
        award: "Innovation Achievement Award",
        name: "Tan Wei Ming",
        country: "Singapore",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "Tan Innovation Systems Pte. Ltd. (Singapore) — a developer of technology solutions in automation and optimization of operational processes.",
        text:
          "Tan Wei Ming received the award for an innovation with confirmed ROI and successful scaling in a real business environment.",
        photo: win_6_2024,
      },
    ],
  },

  {
    year: 2025,
    winners: [
      {
        award: "Business Leadership Award",
        name: "Louise Martin",
        country: "France",
        position: "Chief Executive Officer (CEO)",
        company:
          "Martin International Growth S.A. (France) — an international group in B2B services and corporate solutions with presence in Europe and the MENA region.",
        text:
          "Louise Martin was recognized for international business scaling and sustainable financial results confirmed by key performance metrics.",
        photo: win_1_2025,
      },
      {
        award: "Entrepreneur of the Year Award",
        name: "Shirin Rahmonova",
        country: "Tajikistan",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "Rahmonova Export Ventures (Tajikistan) — a fast-growing entrepreneurial company developing scalable B2B directions and export solutions.",
        text:
          "Shirin Rahmonova received the award for building a fast-growing business and entering new markets with proven scaling dynamics.",
        photo: win_2_2025,
      },
      {
        award: "Excellence in Business Development Award",
        name: "Aya Fujimoto",
        country: "Japan",
        position: "Global Head of Enterprise Partnerships",
        company:
          "Fujimoto Enterprise Solutions (Japan) — a provider of enterprise technology solutions and integration platforms for major companies.",
        text:
          "Aya Fujimoto was recognized for developing international partnerships and growing the enterprise vertical through strategic alliances and integrations.",
        photo: win_3_2025,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Maja Svensson",
        country: "Sweden",
        position: "Chair, Industry Standards & Governance Board",
        company:
          "Nordic Standards & Practice Institute (Sweden) — an expert organization working on the development of industry standards and performance management practices.",
        text:
          "Maja Svensson received the award for influencing industry standards and gaining independent professional recognition from expert communities.",
        photo: win_4_2025,
      },
      {
        award: "Strategic Vision Award",
        name: "Arif Al-Nuaimi",
        country: "UAE",
        position: "Chief Strategy & Ecosystem Development Officer",
        company:
          "Al-Nuaimi Ecosystem Ventures (UAE) — an investment-operating group developing ecosystem projects and platforms for scaling in the MENA region.",
        text:
          "Arif Al-Nuaimi was recognized for an ecosystem development strategy and the long-term measurable impact of executed initiatives.",
        photo: win_5_2025,
      },
      {
        award: "Innovation Achievement Award",
        name: "Park Ji-won",
        country: "South Korea",
        position: "Founder & Chief Technology Officer (CTO)",
        company:
          "Ji-won Innovation Systems (South Korea) — a developer of technology solutions for process optimization, efficiency improvement, and quality control in corporate operations.",
        text:
          "Park Ji-won received the award for scalable implementation of an innovation with confirmed efficiency metrics.",
        photo: win_6_2025,
      },
    ],
  },
];

const awardKeyMap = {
  "Business Leadership Award": "award.businessLeadership",
  "Entrepreneur of the Year Award": "award.entrepreneurOfTheYear",
  "Excellence in Business Development Award": "award.excellenceInBD",
  "Outstanding Industry Achievement Award": "award.outstandingIndustry",
  "Strategic Vision Award": "award.strategicVision",
  "Innovation Achievement Award": "award.innovationAchievement",
};

function WinnerCard({ winner, year, indexInYear, t, tr }) {
  const awardKey = awardKeyMap[winner.award] || winner.award;
  const awardLabel = tr(awardKey, winner.award);

  const ruKey = `winners.${year}.${indexInYear}.text`;
  const translated = t(ruKey);
  const bodyText = translated === ruKey ? winner.text : translated;

  return (
    <article className="geia-card">
      <div className="geiaCard__media">
        {winner.photo ? (
          <img
            src={winner.photo}
            alt={`${winner.name} — ${winner.award}`}
            className="geiaCard__img"
            loading="lazy"
          />
        ) : (
          <div className="geiaCard__noPhoto">
            {tr("winners.photo.placeholder", "Photo unavailable")}
          </div>
        )}
      </div>

      <div className="geiaCard__body">
        <div className="geiaAward">
          <span className="geiaAward__text">{awardLabel}</span>
        </div>

        <h3 className="geiaCard__name">
          {winner.name} <span className="geiaCard__country">({winner.country})</span>
        </h3>

        <div className="geiaCard__meta">
          <p className="geiaCard__metaRow">
            <span className="geiaCard__label">
              {tr("winners.label.position", "Position:")}
            </span>{" "}
            {winner.position}
          </p>

          <p className="geiaCard__metaRow">
            <span className="geiaCard__label">
              {tr("winners.label.company", "Company:")}
            </span>{" "}
            {winner.company}
          </p>

          <p className="geiaCard__text">{bodyText}</p>
        </div>
      </div>
    </article>
  );
}

function YearSection({ year, winners, t, tr }) {
  return (
    <section className="geiaYear">
      <div className="geiaYear__head">
        <h2 className="geiaYear__title">{year}</h2>
      </div>

      <div className="geiaYear__grid">
        {winners.map((w, idx) => (
          <WinnerCard
            key={`${year}-${w.award}-${w.name}-${idx}`}
            winner={w}
            year={year}
            indexInYear={idx + 1}
            t={t}
            tr={tr}
          />
        ))}
      </div>
    </section>
  );
}

export default function Winners({ data }) {
  const { t } = useI18n();

  // ✅ Обёртка: если t вернул ключ — показываем fallback
  const tr = (key, fallback) => {
    const v = t(key);
    return v === key ? fallback : v;
  };

  const winnersData = useMemo(() => data || GEIA_WINNERS, [data]);

  return (
    <div className="geiaWinners">
      <header className="hero hero--rich-page mt-60">
        <div className="container">
          <div className="hero__columns">
            <div>
              <h1 className="hero__title" style={{ visibility: "visible" }}>
                {tr(
                  "winners.hero.h1",
                  "Winners of the Global Entrepreneur & Innovator Awards (GEIA)"
                )}
              </h1>
            </div>
          </div>

          <div className="hero__media">
            <div className="placeholder-media hero-lazyloaded">
              <picture>
                <source media="(max-width: 640px)" srcSet={img45} />
                <source srcSet={img45} />
                <img src={img45} className="lazyloaded" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </header>

      <header className="geiaWinners__header">
        <h1 className="geiaWinners__title">
          {tr("winners.page.title", "GEIA Winners")}
        </h1>
        <p className="geiaWinners__subtitle">
          {tr("winners.page.subtitle", "Winners by year (2018–2025)")}
        </p>
      </header>

      <div className="geiaWinners__sections">
        {winnersData.map((y) => (
          <YearSection key={y.year} year={y.year} winners={y.winners} t={t} tr={tr} />
        ))}
      </div>
    </div>
  );
}