import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function YouMayAlsoLikePage() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const random = data.products
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      setProducts(random);
    })
    .catch((err) => console.log(err));
}, []);
  return (
    <div className="you-like-page">

      {/* HEADER */}
      <div className="you-like-header">
        <h1>You May Also Like</h1>

        <button
          className="you-like-view-btn"
          onClick={() => navigate("/products")}
        >
          View All
        </button>
      </div>

      {/* PRODUCTS GRID */}
      <div className="you-like-grid">

        {products.map((item) => (
          <div className="you-like-card" key={item.id}>

            {/* IMAGE WRAPPER */}
            <div className="you-like-img-box">

              <img
                src={
                  item.images?.[0] ||
                  "https://placehold.co/400x400?text=No+Image"
                }
                alt={item.title}
                className="you-like-img"
              />

              {/* HEART BUTTON */}
              <button
                className="you-like-heart"
                onClick={(e) => e.stopPropagation()}
              >
                ❤️
              </button>

              {/* ADD TO CART */}
              <button className="you-like-cart-btn">
                Add to Cart
              </button>

            </div>

            {/* CATEGORY + RATING */}
            <div className="you-like-meta">

              <p className="you-like-category">
                {item.category?.name || "Accessories"}
              </p>

              <p className="you-like-rating">⭐ 4.7</p>

            </div>

            {/* TITLE */}
            <h3 className="you-like-title">
              {item.title}
            </h3>

            {/* PRICE */}
            <p className="you-like-price">
              ${item.price}
            </p>

            {/* COLOR DOTS */}
            <div className="you-like-colors">
              <span className="dot black"></span>
              <span className="dot red"></span>
              <span className="dot blue"></span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default YouMayAlsoLikePage;