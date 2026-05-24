import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ search = "" }) {
  const [products, setProducts] = useState([]);

  const [category, setCategory] = useState("All Products");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");
  const [stockOnly, setStockOnly] = useState(false);

  const [sortBy, setSortBy] = useState("");
  const [minDiscount, setMinDiscount] = useState("");

  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 9;

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
  }, [search, category, priceRange, rating, stockOnly, sortBy, minDiscount]);

  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("filter-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("filter-open");
    }
  }, [filterOpen]);

  // 🔥 FILTER LOGIC
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

    const matchesDiscount = minDiscount
      ? p.discountPercentage >= minDiscount
      : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesStock &&
      matchesDiscount
    );
  });

  // 🔥 SORTING LOGIC
  const sortedProducts = [...filtered].sort((a, b) => {
    if (sortBy === "low-high") return a.price - b.price;
    if (sortBy === "high-low") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  const currentProducts = sortedProducts.slice(
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

          {/* CATEGORY */}
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

          {/* PRICE */}
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

          {/* RATING */}
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

          {/* STOCK */}
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

          {/* 🔥 SORT BY */}
          <div className="filter-box">
            <h3>Sort By</h3>

            {[
              { label: "Price Low → High", value: "low-high" },
              { label: "Price High → Low", value: "high-low" },
              { label: "Rating", value: "rating" },
            ].map((s) => (
              <button
                key={s.value}
                className={`filter-circle-btn ${
                  sortBy === s.value ? "active-btn" : ""
                }`}
                onClick={() => setSortBy(s.value)}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* 🔥 DISCOUNT */}
          <div className="filter-box">
            <h3>Discount</h3>

            {[10, 20, 30].map((d) => (
              <button
                key={d}
                className={`filter-circle-btn ${
                  minDiscount === d ? "active-btn" : ""
                }`}
                onClick={() => setMinDiscount(d)}
              >
                {d}%+
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">

        <h1 className="products-title fade-title">
          {titles[titleIndex]}
        </h1>

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

        {/* PAGINATION */}
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