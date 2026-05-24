import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setSearch, cart = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [input, setInput] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    if (setSearch) setSearch(value);
  };

  const cartCount = cart?.length || 0;

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <>
      <div className="top-marquee">
        <marquee>🚀 Big Sale | Free Delivery | New Arrivals ✨</marquee>
      </div>

      <nav className="navbar">

        {/* LOGO (hide on mobile when search open) */}
        <div className={`logo ${searchOpen ? "hide-mobile" : ""}`}>
          <Link to="/">Shop X</Link>
        </div>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Shop</Link></li>
          <li><Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className="right-side">

          {/* SEARCH */}
          <div className={`search-wrapper ${searchOpen ? "active" : ""}`}>

            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
              value={input}
              onChange={handleSearch}
            />

            <span
              className="search-icon"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              🔍
            </span>

          </div>

          {/* CART */}
          <div className="icons-group">
            <Link to="/cart">
              🛒 <span className="cart-count">{cartCount}</span>
            </Link>
           <span>
  <a
    href="https://portfolioheres.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
  >
    👤
  </a>
</span>
          </div>

          {/* DARK MODE */}
          <button
            className="dark-mode-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* MENU */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;