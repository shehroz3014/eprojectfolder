import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouMayAlsoLikePage from "./YouMayAlsoLike";

function ProductDetails({ addToCart }) {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
   fetch(`https://dummyjson.com/products/${id}`)
  .then((res) => res.json())
  .then((data) => {
    setProduct(data);
    setSelectedColor("Gold/Green");
  })
  .catch((err) => console.log(err));
    
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({
        ...product,
        quantity,
        selectedColor,
      });
    }
  };

  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <div className="product-detail-page">
        {/* LEFT IMAGE */}
        <div className="product-image-section">
          <img
            src={
              product.images?.[0] ||
              "https://placehold.co/500x500?text=No+Image"
            }
            alt={product.title}
            className="product-detail-image"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="product-info-section">
          <h1 className="product-title">{product.title}</h1>

          <p className="product-reviews">⭐ 4.7 (203 reviews)</p>

          <h2 className="product-price">${product.price}</h2>

          <p className="product-description">{product.description}</p>

          {/* COLORS */}
          <div className="product-option">
            <h3>Color</h3>

            <div className="color-options">
              {["Gold/Green", "Silver/Blue", "Rose Gold/Brown"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`color-select-btn ${
                    selectedColor === color ? "active-color-btn" : ""
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="product-option">
            <h3>Quantity</h3>

            <div className="quantity-box">
              <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          {/* ADD TO CART */}
          <button className="add-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>

          {/* FEATURES */}
          <div className="product-features">
            <div className="feature-box">
              <h4>🚚 Free Shipping</h4>
              <p>Orders over $100</p>
            </div>

            <div className="feature-box">
              <h4>↩️ Easy Returns</h4>
              <p>30 day returns</p>
            </div>

            <div className="feature-box">
              <h4>🔒 Secure Payment</h4>
              <p>SSL encrypted</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="bottom-section">
        {/* REVIEWS */}
        <div className="reviews-section">
          <h2 className="reviews-title">Customer Reviews</h2>

          {/* REVIEW CARD */}
          <div className="review-card">

  <div className="review-stars">
    ⭐⭐⭐⭐⭐
  </div>

  <p className="review-text">
    "This is the softest sweater I own. The cashmere is incredibly high quality and it washes beautifully following the care instructions."
  </p>

  <div className="review-user">

    <img
      className="review-img"
      src="https://i.pravatar.cc/100?img=12"
      alt="user"
    />

    <div className="review-user-info">
      <h4>Emily R.</h4>
      <span>Jan 18, 2032</span>
    </div>

  </div>

</div>
        </div>

        {/* RELATED PRODUCTS */}
        <YouMayAlsoLikePage />

        {/* NEWSLETTER */}
        <div className="newsletter-section">
          <div className="newsletter-left">
            <h2>Join Our Newsletter</h2>
            <p>
              Get 15% off your first order and stay updated on new arrivals.
            </p>
          </div>

          <div className="newsletter-right">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />

            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
