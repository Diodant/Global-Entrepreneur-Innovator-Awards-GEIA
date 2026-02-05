// src/pages/NewsPage.jsx
import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import useNewsData from "./data/useNewsData";

function Html({ html }) {
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

function BlocksRenderer({ blocks }) {
  return (
    <>
      {blocks.map((b, idx) => {
        if (b.type === "h2") return <h2 key={idx}>{b.text}</h2>;
        if (b.type === "h3") return <h3 key={idx}>{b.text}</h3>;

        if (b.type === "p") {
          return (
            <p key={idx}>
              <Html html={b.html} />
            </p>
          );
        }

        if (b.type === "quote") {
          return (
            <blockquote key={idx} className="icc-quote">
              <p>
                <strong>
                  <Html html={b.html} />
                </strong>
              </p>
              {b.author ? <footer className="icc-quote__author">{b.author}</footer> : null}
            </blockquote>
          );
        }

        if (b.type === "image") {
          return (
            <figure key={idx} className="icc-figure">
              <img src={b.src} alt={b.alt || ""} loading="lazy" />
              {b.caption ? <figcaption>{b.caption}</figcaption> : null}
            </figure>
          );
        }

        if (b.type === "mediaText") {
          return (
            <div
              key={idx}
              className={`wp-block-media-text is-stacked-on-mobile is-vertically-aligned-center has-background ${
                b.bgClass || ""
              }`}
              style={{ gridTemplateColumns: "22% auto" }}
            >
              <figure className="wp-block-media-text__media">
                <img src={b.media?.src} alt={b.media?.alt || ""} loading="lazy" />
              </figure>

              <div className="wp-block-media-text__content">
                <p className="is-style-large has-text-color has-link-color">
                  <strong>{b.heading}</strong>
                </p>

                <div className="wp-block-spacer" aria-hidden="true" style={{ height: 20 }} />

                {b.cta?.href ? (
                  <div className="wp-block-buttons is-layout-flex">
                    <div className="wp-block-button">
                      <a className="wp-block-button__link wp-element-button" href={b.cta.href}>
                        <strong>{b.cta.label}</strong>
                      </a>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }

        return null;
      })}
    </>
  );
}

export default function NewsPage() {
  const { slug } = useParams();
  const { items, bySlug } = useNewsData();

  const article = useMemo(() => (slug ? bySlug.get(slug) : null), [slug, bySlug]);

  // ====== ARTICLE VIEW ======
  if (slug) {
    if (!article) {
      return (
        <main id="content" role="main" tabIndex={-1} aria-label="Main content">
          <div className="container" style={{ padding: "28px 18px" }}>
            <p>Not found.</p>
            <p>
              <Link to="/news">← Back to news</Link>
            </p>
          </div>
        </main>
      );
    }

    return (
      <main id="content" role="main" tabIndex={-1} aria-label="Main content">
        <header className="hero hero--single">
          <div className="container">
            <div className="hero__columns">
              <div>
                <p className="hero__taxonomy">{article.taxonomy}</p>

                <h1 className="hero__title" style={{ visibility: "visible" }}>
                  {article.title}
                </h1>

                <ul className="hero__meta">
                  <li className="date">{article.dateLabel}</li>
                </ul>

                <div className="hero__offset--left">
                  <p>{article.excerpt}</p>
                </div>

                <div style={{ marginTop: 14 }}>
                  <Link to="/news">← Back to news</Link>
                </div>
              </div>

              <div className="hero__media">
                <div className="placeholder-media hero-lazyloaded">
                  <img src={article.cover.heroSrc} alt={article.cover.alt || ""} loading="eager" />
                </div>
                <div className="hero__accent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="single-entry">
            <div className="blocks-container">
              <BlocksRenderer blocks={article.blocks || []} />
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ====== LIST VIEW ======
  return (
    <main id="content" role="main" tabIndex={-1} aria-label="Main content">
      <div className="container">
        <div className="grid-card-news-list">
          <div className="grid-card-news-list__inner-container">
            {items.map((item) => (
              <article key={item.slug} className="card card--search" data-seo-container="">
                <div className="card__thumbnail placeholder-media">
                  <img src={item.cover.listSrc} alt={item.cover.alt || ""} loading="lazy" />
                </div>

                <div className="card__content">
                  <ul className="card__meta">
                    <li className="date">{item.dateLabel}</li>
                    <li className="cross-category">{item.typeLabel}</li>
                  </ul>

                  <h3 className="card__title is-style-h4">
                    <Link to={`/news/${item.slug}`} data-seo-target="true">
                      {item.title}
                    </Link>
                  </h3>

                  <p className="card__text is-style-small">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>


        </div>
      </div>
    </main>
  );
}
