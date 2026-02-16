import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import useNewsData from "../components/data/useNewsData";

export default function HomeNewsPreview() {
  const { items } = useNewsData();

  // берём только первые 3 новости
  const topThree = useMemo(() => items.slice(0, 3), [items]);

  return (
    <section className="home-news">
      <div className="container ">
        <header className="home-news__header ">
          <h2 className="wp-block-heading alignwide mb-56 mt-104">Latest news</h2>
        </header>

        <div className="grid-card-news-list">
          <div className="grid-card-news-list__inner-container">
            {topThree.map((item) => (
              <article key={item.slug} className="card card--search">
                <div className="card__thumbnail placeholder-media">
                  <img
                    src={item.cover.listSrc}
                    alt={item.cover.alt || ""}
                    loading="lazy"
                  />
                </div>

                <div className="card__content">
                  <ul className="card__meta">
                    <li className="date">{item.dateLabel}</li>
                    {item.typeLabel ? (
                      <li className="cross-category">{item.typeLabel}</li>
                    ) : null}
                  </ul>

                  <h3 className="card__title is-style-h4">
                    <Link to={`/news/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h3>

                  <p className="card__text is-style-small">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wp-block-button is-style-fill">
          <Link to="/news" className="wp-block-button__link wp-element-button">
            View all news
          </Link>
        </div>
      </div>
    </section>
  );
}
