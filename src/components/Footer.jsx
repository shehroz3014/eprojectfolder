import React from "react";

function Footer() {
  return (
    <footer className="footer">

      {/* BRAND SECTION */}
      <div className="footer-brand">
  <h2>Shop X</h2>

  <p>
    Discover curated collections of premium fashion, accessories, and lifestyle products.
  </p>

  {/* SOCIAL ICONS */}
  <div className="footer-icons">
    <span>🌐</span>
    <span>📷</span>
    <span>🐦</span>
    <span>📘</span>
  </div>
</div>

      {/* LINKS */}
      <div className="footer-links">

        {/* SHOP */}
        <div className="footer-col">
          <h3>Shop</h3>
          <a href="#">Clothing</a>
          <a href="#">Accessories</a>
          <a href="#">Footwear</a>
          <a href="#">Bags</a>
          <a href="#">Jewelry</a>
          <a href="#">Sale</a>
        </div>

        {/* HELP */}
        <div className="footer-col">
          <h3>Help</h3>
          <a href="#">FAQ</a>
          <a href="#">Shipping</a>
          <a href="#">Size Guide</a>
          <a href="#">Contact Us</a>
          <a href="#">Track Order</a>
        </div>

        {/* ABOUT */}
        <div className="footer-col">
          <h3>About</h3>
          <a href="#">Our Story</a>
          <a href="#">Sustainability</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;