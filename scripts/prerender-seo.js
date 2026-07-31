const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const sourcePath = path.join(buildDir, "index.html");
const assetManifest = JSON.parse(
  fs.readFileSync(path.join(buildDir, "asset-manifest.json"), "utf8")
);
const sergiyPhotoPath = assetManifest.files["static/media/0634.jpg"];

if (!sergiyPhotoPath) {
  throw new Error("Sergiy Kukhilava photo was not found in asset-manifest.json.");
}

const sergiyPhotoUrl = `https://geiawards.com${sergiyPhotoPath}`;

const article = {
  path: "news/global-entrepreneur-innovator-awards-2021-announces-winners",
  url: "https://geiawards.com/news/global-entrepreneur-innovator-awards-2021-announces-winners",
  title: "Sergiy Kukhilava (Сергей Кухилава) — GEIA 2021 Award Winner",
  description:
    "Sergiy Kukhilava (Сергей Кухилава), founder and CEO of Kukhilava Restaurant Group, received the GEIA 2021 Outstanding Industry Achievement Award for RFID-based restaurant technology, inventory optimization, and food waste reduction.",
};

const winnersPage = {
  path: "winners",
  url: "https://geiawards.com/winners",
  title: "Sergiy Kukhilava (Сергей Кухилава) — GEIA Award Winner",
  description:
    "Sergiy Kukhilava (Сергей Кухилава), founder and CEO of Kukhilava Restaurant Group, is a GEIA 2021 Outstanding Industry Achievement Award winner recognized for restaurant technology, RFID freshness monitoring, inventory optimization, and food waste reduction.",
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(html, attribute, key, content) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attribute}=["']${escapedKey}["'][^>]*>`,
    "i"
  );
  const tag = `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(content)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `${tag}</head>`);
}

function replaceLink(html, rel, href) {
  const pattern = new RegExp(`<link\\s+[^>]*rel=["']${rel}["'][^>]*>`, "i");
  const tag = `<link rel="${rel}" href="${escapeHtml(href)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", `${tag}</head>`);
}

function renderArticleHtml(template) {
  let html = template.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(article.title)}</title>`);

  html = replaceMeta(html, "name", "description", article.description);
  html = replaceMeta(html, "name", "keywords", "Sergiy Kukhilava, Сергей Кухилава, Sergey Kukhilava, Kukhilava Restaurant Group, GEIA 2021, Outstanding Industry Achievement Award, restaurant technology, RFID, food waste reduction");
  html = replaceMeta(html, "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  html = replaceMeta(html, "property", "og:type", "article");
  html = replaceMeta(html, "property", "og:title", article.title);
  html = replaceMeta(html, "property", "og:description", article.description);
  html = replaceMeta(html, "property", "og:url", article.url);
  html = replaceMeta(html, "property", "og:image", sergiyPhotoUrl);
  html = replaceMeta(html, "property", "og:image:alt", "Sergiy Kukhilava — GEIA 2021 award winner");
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", article.title);
  html = replaceMeta(html, "name", "twitter:description", article.description);
  html = replaceMeta(html, "name", "twitter:image", sergiyPhotoUrl);
  html = replaceLink(html, "canonical", article.url);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${article.url}#article`,
    mainEntityOfPage: article.url,
    url: article.url,
    headline: article.title,
    description: article.description,
    datePublished: "2021-04-04",
    dateModified: "2026-07-23",
    inLanguage: ["en", "ru"],
    image: [sergiyPhotoUrl],
    author: {
      "@type": "Person",
      name: "Semyon Vygovortsev",
      alternateName: "Семен Выговорцев",
    },
    publisher: {
      "@type": "Organization",
      name: "Global Entrepreneur & Innovator Awards (GEIA)",
      url: "https://geiawards.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://geiawards.com/logo.svg",
      },
    },
    about: {
      "@type": "Person",
      "@id": `${article.url}#sergiy-kukhilava`,
      name: "Sergiy Kukhilava",
      alternateName: ["Сергей Кухилава", "Sergey Kukhilava"],
      image: sergiyPhotoUrl,
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
      ],
    },
  };

  const schemaTag = `<script id="geia-prerendered-article-schema" type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`;
  return html.replace("</head>", `${schemaTag}</head>`);
}

function renderWinnersHtml(template) {
  let html = template.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(winnersPage.title)}</title>`);

  html = replaceMeta(html, "name", "description", winnersPage.description);
  html = replaceMeta(html, "name", "keywords", "Sergiy Kukhilava, Сергей Кухилава, Sergey Kukhilava, Kukhilava Restaurant Group, GEIA winner, GEIA 2021, Outstanding Industry Achievement Award, restaurant technology, RFID, food waste reduction");
  html = replaceMeta(html, "name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  html = replaceMeta(html, "property", "og:type", "website");
  html = replaceMeta(html, "property", "og:title", winnersPage.title);
  html = replaceMeta(html, "property", "og:description", winnersPage.description);
  html = replaceMeta(html, "property", "og:url", winnersPage.url);
  html = replaceMeta(html, "property", "og:image", sergiyPhotoUrl);
  html = replaceMeta(html, "property", "og:image:alt", "Sergiy Kukhilava — GEIA award winner");
  html = replaceMeta(html, "name", "twitter:card", "summary_large_image");
  html = replaceMeta(html, "name", "twitter:title", winnersPage.title);
  html = replaceMeta(html, "name", "twitter:description", winnersPage.description);
  html = replaceMeta(html, "name", "twitter:image", sergiyPhotoUrl);
  html = replaceLink(html, "canonical", winnersPage.url);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${winnersPage.url}#webpage`,
        url: winnersPage.url,
        name: winnersPage.title,
        description: winnersPage.description,
        inLanguage: ["en", "ru"],
        mainEntity: { "@id": `${winnersPage.url}#sergiy-kukhilava` },
        isPartOf: {
          "@type": "WebSite",
          name: "Global Entrepreneur & Innovator Awards (GEIA)",
          url: "https://geiawards.com/",
        },
      },
      {
        "@type": "Person",
        "@id": `${winnersPage.url}#sergiy-kukhilava`,
        name: "Sergiy Kukhilava",
        alternateName: ["Сергей Кухилава", "Sergey Kukhilava"],
        image: sergiyPhotoUrl,
        jobTitle: "Founder & Chief Executive Officer (CEO)",
        worksFor: {
          "@type": "Organization",
          name: "Kukhilava Restaurant Group",
        },
        award: "GEIA 2021 Outstanding Industry Achievement Award",
        description:
          "Entrepreneur and restaurant industry innovator recognized for RFID-based freshness monitoring, predictive analytics, automated inventory management, operational efficiency, and food waste reduction.",
        knowsAbout: [
          "Restaurant technology",
          "RFID product freshness monitoring",
          "Predictive analytics",
          "Inventory management",
          "Food waste reduction",
          "Restaurant operations",
        ],
        subjectOf: {
          "@type": "NewsArticle",
          url: "https://geiawards.com/news/global-entrepreneur-innovator-awards-2021-announces-winners",
          headline: "Sergiy Kukhilava (Сергей Кухилава) — GEIA 2021 Award Winner",
        },
      },
    ],
  };

  const schemaTag = `<script id="geia-prerendered-winners-schema" type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, "\\u003c")}</script>`;
  return html.replace("</head>", `${schemaTag}</head>`);
}

if (!fs.existsSync(sourcePath)) {
  throw new Error("build/index.html was not found. Run react-scripts build first.");
}

const template = fs.readFileSync(sourcePath, "utf8");
const outputPath = path.join(buildDir, `${article.path}.html`);
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, renderArticleHtml(template), "utf8");

console.log(`Prerendered SEO HTML: ${path.relative(buildDir, outputPath)}`);

const winnersOutputPath = path.join(buildDir, `${winnersPage.path}.html`);
fs.writeFileSync(winnersOutputPath, renderWinnersHtml(template), "utf8");

console.log(`Prerendered SEO HTML: ${path.relative(buildDir, winnersOutputPath)}`);
