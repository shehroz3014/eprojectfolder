import React from "react";
import image from "../assets/image.png";

function AboutUs() {
  return (
    <div className="about-container">

      {/* STORY BADGE */}
      <div className="story-badge">About ShopX</div>

      {/* TITLE */}
      <h1 className="about-title">
        Modern Shopping Experience for Everyone
      </h1>

      <p className="about-text">
        ShopX was created to make online shopping simple, stylish, and affordable.
        We bring together trending fashion, premium accessories, and everyday
        essentials in one seamless shopping destination.
      </p>

      {/* STATS */}
      <div className="stats-container">
        <div className="stat-box">
          <h2>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>500+</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>15+</h2>
          <p>Countries</p>
        </div>

        <div className="stat-box">
          <h2>4.9</h2>
          <p>Average Rating</p>
        </div>
      </div>

   

      {/* ABOUT SECTION */}
      <div className="about-flex-container">

       <div className="about-left" style={{ marginTop: "-60px", lineBreak: "anywhere" }}>
  <h2>Built for Modern Shoppers</h2>
  <br />

  <p>
    ShopX started with a vision to create a reliable and user-friendly
    online shopping platform where customers can discover quality products
    with confidence.
  </p>

  <p>
    We understand that modern shoppers want speed, convenience, and trust.
    That’s why ShopX focuses on delivering a smooth shopping experience
    from browsing to checkout, without any complications.
  </p>

  <p>
    From fashion and accessories to lifestyle essentials, every product is
    carefully selected to ensure style, comfort, and value for our customers.
  </p>

  <p>
    Our platform is built with advanced technology to ensure fast loading,
    secure payments, and seamless navigation across all devices including
    mobile, tablet, and desktop.
  </p>

  <p>
    We also believe in long-term relationships with our customers, offering
    dedicated support, easy returns, and continuous improvements based on
    your feedback.
  </p>

  <p>
    ShopX is more than just an online store — it is a growing community
    where shopping becomes simple, enjoyable, and reliable for everyone.
  </p>
</div>

        <div className="about-right">
          <img src={image} alt="ShopX About" />

          <div className="image-card">
            <h4>ShopX Since 2024</h4>
            <p>Your trusted online shopping partner</p>
          </div>
        </div>

      </div>

      {/* VALUES */}
      <div className="values-section">
        <h2>Why Choose ShopX</h2>
        <p>The values that make our shopping experience better</p>

        <div className="values-container">

          <div className="value-box">
            <h3>⚡ Fast Delivery</h3>
            <p>
              Quick and reliable shipping to ensure your orders arrive on time.
            </p>
          </div>

          <div className="value-box">
            <h3>🛍️ Quality Products</h3>
            <p>
              Carefully selected products that combine style, quality, and value.
            </p>
          </div>

          <div className="value-box">
            <h3>🔒 Secure Shopping</h3>
            <p>
              Safe payments and trusted checkout experience for every customer.
            </p>
          </div>

          <div className="value-box">
            <h3>💡 Customer First</h3>
            <p>
              We focus on customer satisfaction with 24/7 support and easy returns.
            </p>
          </div>

        </div>
      </div>

      {/* TEAM */}
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>The passionate people behind ShopX</p>
      </div>

      <div className="team-container">
        <div className="team-grid">

          <div className="team-card">
            <img src="https://i.pravatar.cc/150?img=1" alt="Founder" />
            <h3>Ali Khan</h3>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img src="https://i.pravatar.cc/150?img=2" alt="Designer" />
            <h3>Sarah Ahmed</h3>
            <p>Creative Director</p>
          </div>

          <div className="team-card">
            <img src="https://i.pravatar.cc/150?img=3" alt="Design Lead" />
            <h3>Usman Ali</h3>
            <p>Head of Design</p>
          </div>

          <div className="team-card">
            <img src="https://i.pravatar.cc/150?img=4" alt="Operations" />
            <h3>David John</h3>
            <p>Operations Lead</p>
          </div>

        </div>
      </div>

      <div className="section-divider"></div>

      {/* NEWSLETTER */}
      <div className="newsletter-container">

        <div className="newsletter-left">
          <h2>Join the ShopX Community</h2>
          <p>
            Be the first to know about new arrivals, exclusive deals, and
            shopping updates.
          </p>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>

          <small>
            By subscribing, you agree to our Privacy Policy and receive updates.
          </small>
        </div>

        <div className="newsletter-right">

          <div className="mini-box">
            <h4>Exclusive Deals 🔥</h4>
            <p>Member-only discounts & offers</p>
          </div>

          <div className="mini-box">
            <h4>New Arrivals 🆕</h4>
            <p>Latest trending products first</p>
          </div>

          <div className="mini-box">
            <h4>Easy Returns ↩️</h4>
            <p>Hasle free return policy available</p>
          </div>

          <div className="mini-box">
            <h4>Shopping Tips 💡</h4>
            <p>Smart buying guides & ideas</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AboutUs;