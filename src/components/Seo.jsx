import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "./I18nProvider";
import sergiyKukhilavaPhoto from "../images/winners/0634.jpg";

const SITE_URL = "https://geiawards.com";
const SITE_NAME = "Global Entrepreneur & Innovator Awards (GEIA)";
const DEFAULT_IMAGE = `${SITE_URL}/preview.png`;
const SERGIY_KUKHILAVA_IMAGE = `${SITE_URL}${sergiyKukhilavaPhoto}`;
const KUKHILAVA_ARTICLE_PATH = "/news/global-entrepreneur-innovator-awards-2021-announces-winners";

const kukhilavaArticleSeo = {
  en: {
    title: "Sergiy Kukhilava — GEIA 2021 Industry Award Winner",
    description: "Sergiy Kukhilava, founder and CEO of Kukhilava Restaurant Group, received the GEIA 2021 Outstanding Industry Achievement Award for restaurant technology innovation, RFID-based freshness monitoring, inventory optimization, and food waste reduction.",
  },
  ru: {
    title: "Сергей Кухилава — победитель GEIA 2021 | Sergiy Kukhilava",
    description: "Сергей Кухилава (Sergiy Kukhilava), основатель и CEO Kukhilava Restaurant Group, получил Outstanding Industry Achievement Award GEIA 2021 за инновации в ресторанной индустрии, RFID-мониторинг свежести продуктов и сокращение пищевых отходов.",
  },
};

const pages = {
  "/": {
    title: "Global Entrepreneur & Innovator Awards (GEIA)",
    description: "Official website of the Global Entrepreneur & Innovator Awards (GEIA), recognizing outstanding entrepreneurs, innovators, business leaders, and industry achievements worldwide.",
    ruTitle: "Global Entrepreneur & Innovator Awards (GEIA) — международная премия",
    ruDescription: "Официальный сайт Global Entrepreneur & Innovator Awards (GEIA), международной премии для выдающихся предпринимателей, новаторов и лидеров бизнеса.",
    type: "WebSite",
  },
  "/nominations": {
    title: "Award Nominations and Evaluation Standards | GEIA",
    description: "Explore GEIA award nominations, eligibility requirements, evaluation criteria, evidence standards, and the selection process for entrepreneurs and innovators.",
    ruTitle: "Номинации и критерии оценки премии GEIA",
    ruDescription: "Номинации GEIA, требования к участникам, критерии оценки, стандарты доказательности и порядок отбора предпринимателей и новаторов.",
  },
  "/jurycriteria": {
    title: "International Jury Criteria and Scoring | GEIA",
    description: "Learn how the GEIA international jury assesses leadership, innovation, measurable impact, scalability, sustainability, and professional achievements.",
    ruTitle: "Критерии и система оценки международного жюри GEIA",
    ruDescription: "Принципы работы международного жюри GEIA и оценка лидерства, инноваций, измеримого эффекта, масштабируемости и профессиональных достижений.",
  },
  "/winners": {
    title: "Sergiy Kukhilava — GEIA Award Winner | Winners 2018–2025",
    description: "Sergiy Kukhilava, founder and CEO of Kukhilava Restaurant Group, is a GEIA 2021 Outstanding Industry Achievement Award winner recognized for restaurant technology, RFID freshness monitoring, inventory optimization, and food waste reduction.",
    ruTitle: "Сергей Кухилава — победитель GEIA | Sergiy Kukhilava",
    ruDescription: "Сергей Кухилава (Sergiy Kukhilava), основатель и CEO Kukhilava Restaurant Group, — победитель GEIA 2021 в номинации Outstanding Industry Achievement Award за инновации в ресторанной индустрии.",
    type: "CollectionPage",
  },
  "/jury": {
    title: "International Jury | Global Entrepreneur & Innovator Awards",
    description: "Meet the international experts who evaluate GEIA nominees according to transparent standards of leadership, innovation, impact, and professional excellence.",
    ruTitle: "Международное жюри Global Entrepreneur & Innovator Awards",
    ruDescription: "Эксперты международного жюри GEIA, оценивающие номинантов по прозрачным критериям лидерства, инноваций и профессиональных достижений.",
    type: "CollectionPage",
  },
  "/news": {
    title: "News and Global Business Insights | GEIA",
    description: "Read GEIA news and insights on entrepreneurship, innovation, international business, sustainability, technology, and global economic development.",
    ruTitle: "Новости и международная деловая аналитика | GEIA",
    ruDescription: "Новости GEIA и материалы о предпринимательстве, инновациях, международном бизнесе, устойчивом развитии, технологиях и мировой экономике.",
    type: "CollectionPage",
  },
  "/regulations": {
    title: "GEIA Award Regulations, Rules and Procedures",
    description: "Read the official GEIA regulations covering participation, nominations, jury procedures, evaluation, ethics, conflicts of interest, and winner selection.",
    ruTitle: "Положение, правила и процедуры премии GEIA",
    ruDescription: "Официальное положение GEIA: участие, номинации, работа жюри, оценивание, этика, конфликт интересов и определение победителей.",
  },
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
}

export default function Seo() {
  const { pathname } = useLocation();
  const { lang } = useI18n();

  useEffect(() => {
    const isArticle = pathname.startsWith("/news/");
    const isKukhilavaArticle = pathname === KUKHILAVA_ARTICLE_PATH;
    const page = pages[pathname] || pages["/"];
    const articleSeo = kukhilavaArticleSeo[lang === "ru" ? "ru" : "en"];
    const title = isKukhilavaArticle
      ? articleSeo.title
      : lang === "ru"
        ? page.ruTitle
        : page.title;
    const description = isKukhilavaArticle
      ? articleSeo.description
      : lang === "ru"
        ? page.ruDescription
        : page.description;
    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    const metaTitle = isArticle && !isKukhilavaArticle ? SITE_NAME : title;
    const metaDescription = isArticle && !isKukhilavaArticle ? pages["/news"].description : description;

    document.title = metaTitle;

    setMeta('meta[name="description"]', { name: "description", content: metaDescription });
    const isWinnersPage = pathname === "/winners";
    setMeta('meta[name="keywords"]', { name: "keywords", content: isKukhilavaArticle || isWinnersPage ? "Sergiy Kukhilava, Сергей Кухилава, Sergey Kukhilava, Kukhilava Restaurant Group, Outstanding Industry Achievement Award, GEIA 2021, restaurant technology, RFID, food waste reduction" : "Global Entrepreneur & Innovator Awards, GEIA, entrepreneurship, innovation, business awards" });
    setMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    setMeta('meta[name="googlebot"]', { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" });
    setMeta('meta[property="og:type"]', { property: "og:type", content: isKukhilavaArticle ? "article" : "website" });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
    setMeta('meta[property="og:title"]', { property: "og:title", content: metaTitle });
    setMeta('meta[property="og:description"]', { property: "og:description", content: metaDescription });
    setMeta('meta[property="og:url"]', { property: "og:url", content: canonicalUrl });
    setMeta('meta[property="og:image"]', { property: "og:image", content: isKukhilavaArticle || isWinnersPage ? SERGIY_KUKHILAVA_IMAGE : DEFAULT_IMAGE });
    setMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: isKukhilavaArticle ? "Sergiy Kukhilava — GEIA 2021 award winner" : `${SITE_NAME} logo` });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: lang === "ru" ? "ru_RU" : "en_US" });
    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: metaTitle });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: metaDescription });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: isKukhilavaArticle || isWinnersPage ? SERGIY_KUKHILAVA_IMAGE : DEFAULT_IMAGE });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const existingSchema = document.getElementById("geia-structured-data");
    if (existingSchema) existingSchema.remove();

    if (!isArticle || isKukhilavaArticle) {
      const schema = document.createElement("script");
      schema.id = "geia-structured-data";
      schema.type = "application/ld+json";
      schema.text = JSON.stringify(isKukhilavaArticle ? {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "@id": `${canonicalUrl}#article`,
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        headline: title,
        description,
        datePublished: "2021-04-04",
        dateModified: "2026-07-21",
        inLanguage: lang === "ru" ? "ru" : "en",
        image: [SERGIY_KUKHILAVA_IMAGE],
        author: {
          "@type": "Person",
          name: lang === "ru" ? "Семен Выговорцев" : "Semyon Vygovortsev",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: `${SITE_URL}/`,
          logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.svg` },
        },
        about: {
          "@type": "Person",
          "@id": `${canonicalUrl}#sergiy-kukhilava`,
          name: "Sergiy Kukhilava",
          alternateName: ["Сергей Кухилава", "Sergey Kukhilava"],
          image: SERGIY_KUKHILAVA_IMAGE,
          jobTitle: "Founder & Chief Executive Officer (CEO)",
          worksFor: {
            "@type": "Organization",
            name: "Kukhilava Restaurant Group",
          },
          award: "GEIA 2021 Outstanding Industry Achievement Award",
          knowsAbout: [
            "Restaurant technology",
            "RFID product freshness monitoring",
            "Inventory management",
            "Food waste reduction",
            "Restaurant operations",
          ],
        },
        keywords: [
          "Sergiy Kukhilava",
          "Сергей Кухилава",
          "Kukhilava Restaurant Group",
          "GEIA 2021",
          "Outstanding Industry Achievement Award",
        ],
      } : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            alternateName: "GEIA",
            url: `${SITE_URL}/`,
            logo: `${SITE_URL}/logo.svg`,
          },
          {
            "@type": page.type || "WebPage",
            "@id": `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: title,
            description,
            inLanguage: lang === "ru" ? "ru" : "en",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: ["en", "ru"],
          },
        ],
      });
      document.head.appendChild(schema);
    }
  }, [lang, pathname]);

  return null;
}
