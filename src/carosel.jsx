
import { Link } from "react-router-dom";
  

export default function Shop() {
  return (
    <main className="home-page">
      <section className="fashion-hero">
        <img
          className="fashion-hero-image"
          src="/images/banner.png"
          alt="StyleOne Fall Collection"
        />

        <div className="fashion-hero-overlay" />

        <div className="fashion-hero-content">
          <span className="fashion-eyebrow">
            STYLEONE / NEW SEASON
          </span>

          <h1>
            The Art of
            <br />
            <em>Everyday Style.</em>
          </h1>

          <p>
            Discover effortless essentials, bold silhouettes,
            and timeless pieces curated for your wardrobe.
          </p>

          <Link to="/shop" className="fashion-shop-btn">
            EXPLORE COLLECTION
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="fashion-hero-bottom">
          <span>EST. 2026 — STYLEONE</span>
          <span>DISCOVER YOUR STYLE ↓</span>
        </div>
      </section>

      <section className="fashion-intro">
        <span>THE STYLEONE EDIT</span>
        <h2>
          Wear what makes
          <br />
          you feel <em>you.</em>
        </h2>
        <p>
          From everyday staples to statement pieces,
          discover fashion that fits your story.
        </p>
        <Link to="/shop">SHOP ALL PRODUCTS ↗</Link>
      </section>
    </main>
  );
}
