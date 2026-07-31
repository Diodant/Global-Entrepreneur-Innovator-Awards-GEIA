import React, { useMemo } from "react";
import { useI18n } from "../components/I18nProvider"; 

import img45 from "../images/anticorruption-integrity-icc.webp";

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
import win_4_2021 from "../images/winners/0634.jpg";
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
          "Anna Keller was recognized for leading a large-scale international transformation of the company across four key European markets and expanding into new commercial corridors in the MENA region. Under her leadership, Nordline Group implemented a comprehensive efficiency improvement program, including an operating model redesign, process optimization, and the rollout of KPI architecture and group-wide management standards. This resulted in a sustained increase in operational efficiency and improved financial performance predictability across multiple markets. The jury also highlighted Anna’s leadership in building a strong execution culture—establishing unified management standards, a transparent accountability framework, and enhanced decision-making quality at the executive level.",
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
          "Timur Sadykov received the award for founding a company with a strong international scaling model and establishing a sustainable growth strategy. His venture progressed from a local launch to expansion across Europe and Asia, building a system of partner integrations and an international commercial presence. The jury highlighted a high level of entrepreneurial maturity, including proven market validation, long-term contracts, and the company’s ability to operate across diverse regulatory environments. An additional factor was the manageability of growth—supported by a strong operational foundation, a capable team, and scalable processes that enabled product expansion without compromising quality. Timur was recognized as an entrepreneur shaping best practices for systematic scale-up development in the region.",
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
          "Aiko Tanaka was recognized for building an international partner network and developing sustainable revenue growth channels through strategic alliances. Under her leadership, the company established a global partnerships structure: integration programs, joint go-to-market initiatives, and a stable pipeline of international deals. The jury noted strong competencies in creating a scalable BD system, where growth does not depend on individual deals but is supported by a structured model of channels, processes, and a partner ecosystem. Especially highlighted were evidence-based commercialization practices: validation of impact, a clear value model for clients, and market expansion through strategic alliances. Aiko’s professional achievement is the creation of an international collaboration network that ensures stable business growth dynamics.",
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
          "Isabelle Moreau received the award for an outstanding industry contribution—the development and implementation of a methodology that was adopted and used by multiple market players. Her work was recognized as significant due to the combination of three factors: scale of applicability (not within a single company), practical value (improving the quality of processes/decisions), and replicability (the ability to be implemented across different organizations). The jury emphasized that the impact was expressed not only in implementation results but also in shaping new market practices that set a standard for the industry. Particularly noted was the evidence base: structured materials, practical applicability, and the public and professional reputation of the approach. Isabelle was recognized as a leader delivering measurable industry contribution through standardization and methodology.",
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
          "Omar Al-Fahad was recognized for strategic vision and the implementation of a diversification program that formed a new business platform and a sustainable development model. Under his leadership, a strategic architecture was designed and implemented: market analysis, prioritization of directions, a roadmap, and a KPI execution model. The jury recorded an important result: the strategy was not theory, but was converted into manageable transformation initiatives and measurable business-level effects. International elements of the approach were also highlighted—scaling through partnerships and creating an asset ecosystem capable of developing new markets. Omar demonstrated a high level of strategic leadership: the ability to anticipate change, build platforms, and deliver long-term growth.",
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
          "Aram Petrosyan received the award for implementing an innovative solution with a confirmed measurable effect and scalability across different markets. His development was deployed in a real operational environment and demonstrated cost reduction, improved process accuracy, and increased manageability of key metrics. The jury particularly noted the practicality of the innovation: not a laboratory concept, but a tool validated through pilots/implementation and measurable “before/after” results. The second criterion was scalability: the solution can be replicated across companies and industries without loss of value. Aram was recognized as a technology leader creating innovations that deliver transparent and verifiable business impact.",
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
          "Sofia Romano was recognized for successful business scaling and achieving sustainable growth of key KPIs across multiple markets. Under her leadership, the company carried out a comprehensive optimization of its operating model: внедрение единых стандартов управления, пересборка процессов, рост производительности и повышение прозрачности показателей на уровне группы. The jury recorded the result as systemic: improvements were not one-off, but were закреплены through KPI architecture, management reporting, and regular execution quality control. Sofia’s ability to scale operational efficiency while increasing business volume—maintaining predictability and stability of core business metrics—was additionally highlighted. Her contribution was recognized as an example of leadership focused on measurable results and long-term sustainability.",
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
          "Olha Hnatenko received the award for creating a product that proved its competitiveness and growth through international channels. Her company progressed from product formation to systematic scaling, building a sustainable customer acquisition model through partner networks, direct sales, and international integration channels. The jury noted the quality of the entrepreneurial model: proven market validation, repeat sales, and product development based on measurable performance indicators. A key factor was the ability to bring the product to an international level by adapting the commercial strategy to different markets and business contexts. Olha was recognized as an entrepreneur setting a modern standard for export-driven growth of product companies.",
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
          "Ravi Mehta was recognized for securing strategic alliances and growing the portfolio of enterprise contracts through international partnerships. Under his leadership, the company built a systematic business development approach: market segmentation, creation of partner programs, development of a predictable pipeline, and ускорение the deal-closing cycle. The jury highlighted that the outcome was expressed not only in sales growth but also in the creation of a scalable commercial model resilient to market changes. Competencies in working with enterprise clients were additionally noted: alignment of terms, development of a value proposition, evidence-based demonstration of impact, and long-term contract development. Ravi’s contribution was recognized as an example of commercial leadership in the enterprise segment and building an international partner sales system.",
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
          "Charlotte Bennett received the award for influencing industry practices through standardization, methodology development, and independent recognition by the professional community. Her work was recognized as an industry-level contribution: the approaches developed were applied not within a single organization but demonstrated applicability across multiple market participants. The jury emphasized the importance of influencing the “rules of the game”: management standards, comparability of results, and a unified language for performance assessment. Independent verifiability was particularly noted—professional mentions, implementations, practical use of the methodology, and recognition by industry experts. Charlotte was recognized as a leader shaping sustainable market practices through standardization and replicable performance models.",
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
          "Nguyen Minh Khoa was recognized for strategic vision and implementing a transformation roadmap with measurable results. Under his leadership, a strategic development structure was created: market analysis, initiative prioritization, a financial model, KPIs, and a step-by-step implementation roadmap. The jury noted the maturity of the approach: the strategy did not remain a declaration, but was carried through to execution with KPI control and a verifiable business-level impact. Improvements in process efficiency, management quality, and business model sustainability during operational growth were additionally highlighted. Nguyen was recognized as a strategic leader able to turn vision into systemic change and predictable results.",
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
          "Lim Jia Ren received the award for implementing a technology solution with confirmed ROI and practical impact in a real operational environment. His innovation was recognized as “implemented and measurable”: the company provided evidence of impact across efficiency indicators, operational costs, and “before/after” outcomes. The jury specifically emphasized the commercial viability of the solution—ROI was confirmed through specific implementation metrics, and the technology demonstrated scalability across various business processes. A key factor was the ability to replicate the development across different markets and segments without losing applied value. Lim was recognized as a technology leader creating innovations that deliver verifiable economic results for business.",
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
          "Johan Lindström was recognized for restructuring the management model and achieving sustained growth in international market share under high competition. Under his leadership, the company implemented a new management architecture: a clear accountability system, an updated KPI model at the divisional level, and unified execution quality standards for overseas operations. The jury recorded that the transformation was systemic and was accompanied by improved decision-making efficiency, increased transparency of financial and operational indicators, and faster commercial response to market demand. A key factor was the strengthening of the company’s international position: expanded presence across multiple markets and a stronger share in strategic segments. His contribution was recognized as an example of leadership combining strategic management and execution discipline.",
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
          "Dilshod Karimov received the award for launching an export model and scaling the business across multiple countries with confirmed commercial results. His project was recognized for the ability to quickly build international supply channels, create a sustainable sales system, and organize processes that meet the requirements of different markets. The jury highlighted manageability of growth: systematic partner development, standardization of the commercial model, and building a team capable of supporting expansion without compromising execution quality. An additional criterion was confirmed international presence: a contract base, customer geography, and устойчивость of export flows. Dilshod was recognized as an entrepreneur who created a scalable business model delivering growth beyond the domestic market.",
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
          "Hiroshi Nakamura was recognized for developing international integrations and growing partner sales through strategic alliances. Under his leadership, the company established a partner growth system: standardized integration programs, joint commercial initiatives, and an international pipeline management structure. The jury noted that the contribution was demonstrated not through isolated deals, but through creating a scalable BD model that can be replicated across markets and industries. A strong evidence base was also recorded: confirmed partner-channel growth, expansion of enterprise contracts, and increased predictability of commercial results. Hiroshi was recognized as a leader who built an international integration sales system and sustainable growth through partnerships.",
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
          "Marta Zielińska received the award for introducing an industry performance measurement standard that ensured comparability of results and increased transparency of management decisions. The jury noted that the impact extended beyond a single organization: the methodology was applicable to multiple market players and could serve as a unified tool for evaluating process and business unit performance. An additional advantage was independent recognition and implementation подтверждения: industry mentions, use of the approach in the professional environment, and practical replicability of the model. Marta was recognized as an expert who created a systemic industry contribution through standardization and improved quality of management measurement.",
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
          "Park Soo-jin was recognized for a digital transformation strategy and confirmed growth in key performance metrics. Under her leadership, a transformation roadmap was developed: modernization of process architecture, transition to data-driven management, implementation of digital monitoring tools, and optimization of execution chains. The jury emphasized that the strategy was accompanied by actual execution and measurable results: improved operational efficiency, increased metric управляемость, and accelerated processes. Leadership in integrating change was specifically noted: an established KPI system, change management within teams, and sustainability of results over time. Park Soo-jin was recognized as a strategic leader who delivered digital transformation as a practical, measurable outcome.",
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
          "Ilya Morozov received the award for an innovative solution that improved process quality and reduced operational losses with confirmed impact. His development was deployed in a real environment and demonstrated measurable improvements in process stability, execution accuracy, and reduced costs associated with errors and inefficiency. The jury specifically noted the practical applicability of the innovation: availability of “before/after” data, pilot implementation results, and scalability across different business units or organizations. Another key criterion was the replicability of the approach—the technology could be adapted to various business operations without loss of value. Ilya was recognized as a technology leader creating innovations that deliver measurable impact and reduce operational risks.",
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
          "Thomas Schneider was recognized for international expansion while maintaining sustainable operational efficiency and manageability of key metrics. Under his leadership, the company implemented a scaling program: standardization of processes across overseas units, unified execution quality requirements, strengthened financial control, and внедрение of a group-wide KPI model. The jury recorded that expansion was accompanied by stable operating metrics: improved supply chain manageability, reduced losses, and increased predictability of results. Leadership in building a systemic management model enabling efficiency retention while expanding geography and operational scale was also highlighted. Thomas was recognized as a leader capable of scaling international business without compromising quality and efficiency.",
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
          "Nargiz Aliyeva received the award for creating a new market niche and growing across multiple markets through a scalable business model. Her project was recognized as an example of “category creation”: the formation of a new product segment built on clear customer value and proven market validation. The jury emphasized strategic maturity: systematic product development, geographic expansion, partner channel creation, and sustainable growth. Another factor was validation through scaling and repeat-sales indicators, demonstrating long-term demand for the solution. Nargiz was recognized as an entrepreneur who created a new category and proved its viability across multiple markets.",
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
          "Fatima Al-Mansoori was recognized for launching strategic partnerships that drove growth in new business verticals and expanded commercial presence. Under her leadership, partnership programs were formed focused on joint products, integrations, and go-to-market initiatives with major corporate market participants. The jury noted the systematic approach: partnerships had clear KPIs, an accountability distribution model, and measurable commercial outcomes, while creating a long-term foundation for scaling. Her ability to launch new business verticals through the partner ecosystem—reducing time-to-market and increasing growth predictability—was also highlighted. Fatima was recognized as a business development leader delivering sustainable growth through strategic alliances.",
        photo: win_3_2021,
      },
      {
        award: "Outstanding Industry Achievement Award",
        name: "Sergiy Kukhilava",
        country: "Ukraine",
        position: "Founder & Chief Executive Officer (CEO)",
        company:
          "Kukhilava Restaurant Group (Ukraine) — a group of restaurant companies developing modern food service concepts and implementing innovative technologies for product quality management, inventory control, and food waste reduction.",
        text:
          "Sergiy Kukhilava received the Outstanding Industry Achievement Award for developing and successfully implementing an innovative system for monitoring product freshness and reducing food waste, integrating RFID technology, predictive analytics algorithms, and automated inventory management. His solution improved the accuracy of product quality control, optimized inventory management, reduced product losses, and enhanced the operational efficiency of food service establishments. The Jury particularly recognized the technology's practical value, its successful commercial implementation, its measurable impact on the restaurant industry, and its potential for large-scale adoption by restaurant chains and other hospitality businesses.\n\nSergiy Kukhilava was recognized as an entrepreneur and industry innovator whose developments have made a significant contribution to the advancement of the restaurant industry through the implementation of modern technological solutions for product quality management, food resource management, and restaurant operations. His innovations contribute to improving business efficiency, reducing food waste, advancing modern management standards, and promoting the sustainable development of the hospitality industry.",
        photo: win_4_2021,
      },
      {
        award: "Strategic Vision Award",
        name: "Mateusz Kowalski",
        country: "Poland",
        position: "Chief Strategy & Scaling Officer",
        company:
          "Vistula Growth Technologies (Poland) — a technology company developing B2B solutions for operational efficiency and the scaling of corporate processes across Europe.",
        text:
          "Mateusz Kowalski was recognized for developing a scaling strategy and successfully implementing an operational roadmap that delivered measurable business results. Under his leadership, a comprehensive strategic management framework was developed and implemented, including priority setting, resource allocation, KPI-driven performance management, and execution control across teams and business units. The Jury recognized that the roadmap served not merely as a strategic planning document but as an effective operational management system that translated strategic objectives into measurable outcomes, including increased operational efficiency, improved business processes, and the achievement of key growth indicators. Particular recognition was given to the disciplined execution of the strategy, its successful implementation, and its ability to support sustainable business scaling.\n\nMateusz Kowalski was recognized as a strategic leader whose management approaches and scalable operational frameworks contribute to advancing modern corporate management standards. His work demonstrates how systematic strategic planning, performance-driven management, and effective execution can enhance organizational performance and support the sustainable growth of technology-driven enterprises.",
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
          "Choi Min-ho received the Innovation Achievement Award for developing and successfully implementing an innovative technology that demonstrated verified measurable results and a strong capacity for large-scale deployment. His solution improved operational efficiency, reduced costs, and optimized business processes through the integration of advanced automation, data analytics, and digital management technologies. The Jury particularly recognized the technology's practical value, its verified performance improvements following implementation, its successful transition from pilot deployment to large-scale adoption, and its proven scalability across multiple operating environments.\n\nChoi Min-ho was recognized as a technology leader and industry innovator whose developments contribute to advancing modern digital technologies, improving operational efficiency, and promoting innovative approaches to business process management. His innovations demonstrate how technological solutions can deliver measurable economic value while successfully scaling across diverse industries.",
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
          "Emma Collins was recognized for international business growth and improving the resilience of the company’s financial model. Under her leadership, the organization strengthened its international footprint, ensuring expanded operating scope and revenue growth in overseas markets while maintaining manageability of key metrics. The jury noted a mature approach to financial sustainability: cost structure optimization, improved forecasting quality, rebuilding unit economics, and enhanced profitability control across business lines. Her ability to deliver growth without sacrificing stability—strengthening financial discipline and the long-term reliability of the business model—was also highlighted. Her contribution was recognized as an example of leadership focused on international scaling and sustainable results.",
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
          "Aida Nurlanova received the award for creating an export product and scaling through партнерские models across multiple markets. Her project was recognized for building a sustainable growth strategy beyond the domestic market: forming a partner-led sales model, establishing an international integrator network, and developing commercial channels through strategic alliances. The jury emphasized the evidentiary strength of results—confirmed growth metrics, steady expansion of customer geography, and product development aligned with international market requirements. Systematic organization of processes was also highlighted: a structured commercial function, pipeline management, and устойчивость of repeat sales. Aida was recognized as an entrepreneur who built a product model demonstrating competitiveness on the international stage.",
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
          "Siti Nur Aisyah was recognized for business growth through international channels and building a systematic BD function as a sustainable commercial growth mechanism. Under her leadership, a scalable business development model was implemented: market segmentation, a standardized sales cycle, partner programs, and a manageable pipeline structure. The jury highlighted that growth was delivered not through one-off deals, but through a sustainable commercial architecture with measurable efficiency indicators. Results in international expansion were additionally noted: growth in partner integrations, entry into new regions, and improved conversion quality in the enterprise segment. Siti was recognized as a leader who built an international-level BD system and proved its effectiveness through growth metrics.",
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
          "Marco Bianchi received the award for industry influence through introducing a new management methodology that gained подтверждение of applicability in the professional environment. The jury noted that his approach contributed to shaping new management practices and improving result comparability for organizations in the industry. The methodology was recognized not only as a concept, but as a practical tool applicable across different companies with measurable implementation impact. Independent recognition was also noted: professional recommendations, industry mentions, and use of the methodology by expert communities. Marco was recognized as an industry contribution leader influencing the market through the development of replicable management standards.",
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
          "Nikhil Kapoor was recognized for a market expansion strategy and confirmed KPI results within an executed roadmap. Under his leadership, a scaling strategy was formed: target market analysis, positioning model development, financial architecture, and a phased implementation roadmap. The jury emphasized that the strategy was executed and supported by measurable outcomes: commercial growth, geographic expansion, and improved efficiency of market entry processes. His ability to build strategy not only as a set of hypotheses but as manageable initiatives with KPIs and execution control was also highlighted. Nikhil was recognized as a strategic leader demonstrating the ability to turn a growth plan into a confirmed result.",
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
          "Alina Rusu received the award for implementing a solution with a measurable effect on efficiency and quality, confirmed in a real operational environment. Her innovation was recognized as applied and scalable: implementation was supported by “before/after” metrics, increased operational efficiency, and reduced losses associated with errors and process instability. The jury highlighted an important evidentiary factor: confirmed data on implementation outcomes and sustainability of the impact over time. Practical applicability for companies of different types and the ability to replicate across various business processes were also noted. Alina was recognized as a technology leader creating innovations with measurable contributions to business quality and efficiency.",
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
          "Elena García was recognized for building a scalable management model and growing international operations while expanding business geography. Under her leadership, the company implemented unified management standards, KPI architecture, and an execution control system for overseas units, ensuring result comparability across markets. The jury noted the sustainability of the model: growth in international operations was accompanied by improved transparency of financial and operational indicators, better resource manageability, and stronger execution discipline. Elena’s ability to scale without снижать quality, building a sustainable system of management and accountability distribution, was additionally highlighted. Her contribution was recognized as an example of leadership focused on global growth and manageable operational efficiency.",
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
          "Bakytbek Isakov received the award for building a business with sustainable growth and proven entry into foreign markets. His project was recognized for establishing a commercial model scalable beyond the domestic market: developing export channels, forming a partner network, and managing international contracts. The jury highlighted growth sustainability as a key factor—the business demonstrated predictable dynamics, with development supported by management processes ensuring quality and efficiency control. Expansion of customer geography and confirmed performance in international направления were also noted. Bakytbek was recognized as an entrepreneur who built an internationally competitive business with a long-term scaling model.",
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
          "Yuki Morita was recognized for securing major contracts and growing the business through strategic integrations that strengthened the company’s commercial presence in international markets. Under her leadership, an enterprise growth strategy was implemented: integration partnerships were built, joint go-to-market initiatives were developed, and a sustainable pipeline for major clients was created. The jury emphasized that the outcome was confirmed not only by deal volume but also by the systematic approach—integrations delivered a repeatable commercial development model. Yuki’s competencies in working with major customers were also highlighted: evidence-based impact demonstration, deal structuring, long-term contract development, and expansion of cooperation. Yuki was recognized as a business development leader delivering growth through integrations and enterprise deals.",
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
          "Katarzyna Wiśniewska received the award for a methodology adopted by multiple companies across different countries and demonstrating international-level replicability. The jury noted the industry significance of the work: the approach was applied across different organizations, improving result comparability and the quality of management decisions. It was also emphasized that the methodology had practical implementation confirmation—case studies, adaptation to different business contexts, and recognition by the professional community. International распространение was a key factor: adoption by companies in multiple countries and establishment of the practice as a performance measurement standard. Katarzyna was recognized as an industry influence leader creating methodological solutions applicable and recognized internationally.",
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
          "Hassan Al-Khatib was recognized for a diversification strategy and creating a portfolio of new directions that improved resilience and expanded market opportunities. Under his leadership, a development strategy was designed: selection of priority verticals, financial model development, KPI definition, and roadmap execution for launching new business units. The jury emphasized the practical nature of the strategy—diversification was implemented through concrete projects, partnerships, and managed launches of new directions with confirmed results. His ability to form business platforms delivering growth and resilience amid market change was also noted. He was recognized as a strategic leader able to create a systemic development structure and expand business through diversification.",
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
          "Timur Akhmetov received the award for implementing an innovation that reduced risks and ускорила key processes with confirmed measurable impact. His solution was deployed in a real environment and demonstrated improvements in process reliability, reduced operational risks, and faster execution of critical operations. The jury noted the applied nature of the innovation: availability of “before/after” results, confirmed implementation, and replicability of impact when expanding usage scale. Technology scalability—applicability across different units or organizations without loss of value—was also a factor. Timur was recognized as a technology leader creating solutions that deliver measurable outcomes in security, speed, and process efficiency.",
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
          "Felix Weber was recognized for leadership in the company’s comprehensive transformation and achieving confirmed international results. Under his leadership, the organization implemented a change program that included restructuring the management model, introducing execution standards, process optimization, and strengthening manageability of key business metrics. The jury recorded that the transformation was accompanied by improved efficiency across multiple markets and increased sustainability of the operating model as the international footprint expanded. The quality of strategic management and execution discipline were also highlighted: clear KPIs, a transparent accountability system, and measurable impact from implemented improvements. Felix was recognized as a leader capable of delivering international business transformation and закреплять its outcomes in performance indicators.",
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
          "Nataliia Bondarenko received the award for launching and scaling a product with proven market validation and устойчивой growth dynamics. Her project was recognized for progressing through the full product development cycle: from building a value proposition and initial implementations to scaling through commercial channels and repeat sales. The jury emphasized the evidentiary strength of the outcome: measurable growth metrics, confirmed demand, sustainable retention indicators, and the presence of international clients or growth channels. Systematic growth organization was also highlighted: established processes, product strategy, and a commercial model enabling expansion without quality loss. Nataliia was recognized as an entrepreneur who proved the product’s market viability and scalability.",
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
          "Amit Sharma was recognized for building a commercial function and growing through strategic alliances that expanded the business and developed new revenue channels. Under his leadership, a systematic BD model was established: pipeline management processes, commercial proposal standards, partner programs, and a unified structure for working with major clients. The jury noted that growth was confirmed through enterprise contract outcomes and international expansion via alliances and integrations. Model replicability was also highlighted—the commercial function operated as a sustainable development mechanism rather than a set of individual deals. Amit was recognized as a business development leader creating strategic alliances and converting partnerships into measurable commercial outcomes.",
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
          "Claudia Rossi received the award for contributing to the evolution of industry practices and achieving independent recognition by the professional community. Her work was recognized as an industry contribution: the developed approaches and practices were applied in the professional environment and improved efficiency and transparency of management decisions. The jury highlighted independent confirmations of recognition: professional recommendations, industry mentions, and adoption of the methodology across different organizations. Approach replicability—the ability to implement in companies of varying scale and maturity—was also noted. Claudia was recognized as an industry influence leader shaping practices that transform the professional environment and receive independent recognition.",
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
          "Nguyễn Thảo Linh was recognized for a growth strategy and implementing a roadmap with confirmed results. Under her leadership, a scaling strategy was developed: market analysis, prioritization of initiatives, a financial model, and an implementation roadmap with KPIs. The jury emphasized the practical executability of the approach—the roadmap was executed and results were supported by measurable improvements in efficiency and business development. The quality of strategic management was also highlighted: execution discipline, resource management, and sustainability of results over time. Nguyễn Thảo Linh was recognized as a strategic leader who turns a growth strategy into a manageable process and confirmed impact.",
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
          "Tan Wei Ming received the award for an innovation with confirmed ROI and successful scaling in a real business environment. His solution was recognized as an applied innovation: implementation was supported by measurable “before/after” metrics, improved efficiency indicators, and confirmed economic impact for business. The jury specifically highlighted scalability—the technology was expanded across multiple application areas and demonstrated replicability of outcomes as implementation scale increased. A high level of evidentiary support was also noted: ROI reporting, proof of implementation, and sustainability of impact over time. Tan was recognized as a technology leader creating innovations that deliver measurable results and scale successfully.",
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
          "Louise Martin was recognized for international business scaling and sustainable financial results confirmed by key performance metrics. Under her leadership, the company implemented a growth program that included expansion of overseas operations, improved manageability of the financial model, and strengthened execution discipline across international divisions. The jury noted strategic maturity: scaling was accompanied by improved financial control quality, cost structure optimization, and stronger predictability of results. Louise’s ability to maintain metric stability while expanding geographic scope was specifically highlighted, confirming the effectiveness of the management model and leadership maturity. Her contribution was recognized as an example of business leadership grounded in international growth and financial sustainability.",
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
          "Shirin Rahmonova received the award for building a fast-growing business and entering new markets with proven scaling dynamics. The jury noted that the project demonstrated sustainable growth supported by expanded customer geography, product offering development, and strengthened commercial channels. Her company’s ability to build a stable operational structure for growth was also highlighted: standardized processes, execution quality control, and team development aligned with expansion. A key factor was confirmed entry into new markets—through international contracts, a partner model, and sustainable repeat sales. Shirin was recognized as an entrepreneur who built a competitive business and scaled it beyond the domestic market.",
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
          "Aya Fujimoto was recognized for developing international partnerships and growing the enterprise vertical through strategic alliances and commercial integrations. Under her leadership, the company strengthened its partner framework: joint promotion programs were launched, an enterprise negotiation management system was built, and the pipeline of major customers was expanded. The jury emphasized the measurable nature of results: growth in enterprise contracts and increased predictability of the commercial funnel through a systematic partnership approach. It was also noted that the partnership strategy delivered not only sales growth but also stronger market positioning through long-term alliances. Aya was recognized as a business development leader who delivered international growth dynamics and scaled the enterprise direction.",
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
          "Maja Svensson received the award for influencing industry standards and gaining independent professional recognition from expert communities. Her work was recognized as a systemic industry-level contribution: the developed principles and practices were applied in the professional environment and improved comparability of results, process transparency, and the quality of management decisions. The jury highlighted confirmed impact—professional recommendations, industry mentions, and examples of standard adoption across different organizations. Approach replicability and international applicability were also noted. Maja was recognized as an industry influence leader strengthening professional standards and management practices.",
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
          "Arif Al-Nuaimi was recognized for an ecosystem development strategy and the long-term measurable impact of executed initiatives. Under his leadership, an ecosystem growth strategy was designed and implemented: creating a portfolio of directions, launching partner frameworks, building scaling infrastructure, and a KPI system for results control. The jury noted that the strategy delivered confirmed impact over time—direction development was accompanied by improved key metrics and устойчивость of outcomes across multiple planning cycles. Arif’s ability to build strategy at a platform level—uniting partners and creating long-term advantages—was also highlighted. He was recognized as a strategic leader creating ecosystems with measurable and sustainable results.",
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
          "Park Ji-won received the award for scalable implementation of an innovation with confirmed efficiency metrics. His solution was recognized as an applied innovation demonstrating measurable “before/after” results in operational efficiency, loss reduction, and improved execution quality. The jury emphasized the importance of scalability—the technology was deployed with expanded coverage and showed replicability of impact as implementation масштаб increased. A confirmed evidence base was also noted: implementation metrics, efficiency reporting, and sustainability of results. Park was recognized as a technology leader creating innovations that deliver measurable impact and can scale across different business processes.",
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

  const winnerKey = `winners.${year}.${indexInYear}`;
  const localized = (field, fallback) => tr(`${winnerKey}.${field}`, fallback);
  const name = localized("name", winner.name);
  const country = localized("country", winner.country);
  const position = localized("position", winner.position);
  const company = localized("company", winner.company);
  const bodyText = localized("text", winner.text);
  const paragraphs = bodyText.split(/\n\s*\n/);

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
          {name} <span className="geiaCard__country">({country})</span>
        </h3>

        <div className="geiaCard__meta">
          <p className="geiaCard__metaRow">
            <span className="geiaCard__label">
              {tr("winners.label.position", "Position:")}
            </span>{" "}
            {position}
          </p>

          <p className="geiaCard__metaRow">
            <span className="geiaCard__label">
              {tr("winners.label.company", "Company:")}
            </span>{" "}
            {company}
          </p>

          {paragraphs.map((paragraph, index) => (
            <p className="geiaCard__text" key={index}>
              {paragraph}
            </p>
          ))}
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
