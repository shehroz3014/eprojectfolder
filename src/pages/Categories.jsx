import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // DARK MODE SYNC
  useEffect(() => {
    const updateTheme = () => {
      setDarkMode(document.body.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  // FETCH
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className={darkMode ? "text-light" : "text-dark"}>
        Loading categories...
      </div>
    );
  }

  return (
    <div className={`categories-page ${darkMode ? "dark" : "light"}`}>

      {/* HERO */}
      <div className="categories-hero">
        <h1 className="categories-title">Shop By Categories</h1>
        <p className="categories-subtitle">
          Explore trending collections from real products API.
        </p>
      </div>

      {/* GRID (ONLY 3) */}
      <div className="categories-grid">

        {categories.slice(0, 10).map((category, index) => (
          <div className="category-card" key={index}>

            <img
              src={`https://picsum.photos/400/300?random=${index}`}
              alt={category.name}
            />

            <div className="category-overlay">

              <h2 className="category-name">
                {category.name}
              </h2>

              <Link to="/products">
                <button className="explore-btn">
                  Explore Now
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>

      {/* NEWSLETTER */}
      <div className="newsletter-container">

        <div className="newsletter-left">

          <h2 className="newsletter-title">
            Join the Shop X Community
          </h2>

          <p className="newsletter-text">
            Be the first to know about new arrivals,
            exclusive offers, and style inspiration.
          </p>

          <div className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />

            <button className="newsletter-btn">
              Subscribe
            </button>

          </div>

          <small className="newsletter-note">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </small>

        </div>

      </div>
    </div>
  );
}

export default Categories;