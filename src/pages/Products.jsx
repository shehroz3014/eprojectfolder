import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ search = "" }) {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  const titles = [
    "Beauty Products",
    "Skincare Products",
    "Makeup Products",
    "Care Products",
  ];

  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products || []));
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, priceRange, rating, stockOnly]);

  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("filter-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("filter-open");
    }
  }, [filterOpen]);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Products"
        ? true
        : p.category?.toLowerCase().includes(category.toLowerCase());

    let matchesPrice = true;
    if (priceRange === "Under 50$") matchesPrice = p.price < 50;
    else if (priceRange === "50$ - 100$")
      matchesPrice = p.price <= 100;
    else if (priceRange === "100$ - 200$")
      matchesPrice = p.price <= 200;
    else if (priceRange === "200$+")
      matchesPrice = p.price > 200;

    const matchesRating = rating ? p.rating >= rating : true;
    const matchesStock = stockOnly ? p.stock > 0 : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesStock
    );
  });

  const totalPages = Math.ceil(filtered.length / productsPerPage);

  const currentProducts = filtered.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div className="products-page">

      {/* FILTER BUTTON */}
      <div className="mobile-top-bar">
        <button
          className="mobile-filter-btn"
          onClick={() => setFilterOpen(true)}
        >
          ☰ Filters
        </button>
      </div>

      {/* FILTER OVERLAY */}
      {filterOpen && (
        <div
          className="filter-overlay"
          onClick={() => setFilterOpen(false)}
        />
      )}

      {/* FILTER SIDEBAR */}
      <div className={`filter-sidebar ${filterOpen ? "open" : ""}`}>

        <button
          className="close-filter"
          onClick={() => setFilterOpen(false)}
        >
          ✕
        </button>

        <div className="filter-scroll">

          <div className="filter-box">
            <h3>Categories</h3>
            {["All Products", "Fragrance", "Beauty"].map((cat) => (
              <button
                key={cat}
                className={`filter-circle-btn ${
                  category === cat ? "active-btn" : ""
                }`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="filter-box">
            <h3>Price</h3>
            {["Under 50$", "50$ - 100$", "100$ - 200$", "200$+"].map(
              (p) => (
                <button
                  key={p}
                  className={`filter-circle-btn ${
                    priceRange === p ? "active-btn" : ""
                  }`}
                  onClick={() =>
                    setPriceRange(priceRange === p ? "" : p)
                  }
                >
                  {p}
                </button>
              )
            )}
          </div>

          <div className="filter-box">
            <h3>Rating</h3>
            {[4, 3, 2, 1].map((r) => (
              <button
                key={r}
                className={`filter-circle-btn ${
                  rating === r ? "active-btn" : ""
                }`}
                onClick={() => setRating(r)}
              >
                {r}+ ⭐
              </button>
            ))}
          </div>

          <div className="filter-box">
            <button
              className={`filter-circle-btn ${
                stockOnly ? "active-btn" : ""
              }`}
              onClick={() => setStockOnly(!stockOnly)}
            >
              In Stock Only
            </button>
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">

        {/* TITLE */}
        <h1 className="products-title fade-title">
          {titles[titleIndex]}
        </h1>

        {/* PRODUCTS GRID */}
        <div className="grid">
          {currentProducts.map((p) => (
            <div className="card" key={p.id}>
              <img src={p.images?.[0]} alt={p.title} />
              <h3>{p.title}</h3>

              <p className="price">
                <span className="old-price">
                  Rs {Math.round(p.price * 1.3)}
                </span>
                <span className="new-price">Rs {p.price}</span>
              </p>

              <Link to={`/product/${p.id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>

        {/* ✅ PAGINATION (BOTTOM FIXED) */}
        <div className="pagination">

          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            ← Prev
          </button>

          <span className="page-info">
            Page {currentPage} of {totalPages || 1}
          </span>

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next →
          </button>

        </div>

      </div>
    </div>
  );
}

export default Products;