import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import Categories from "./pages/Categories";
import ContactUs from "./pages/ContactUs";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  // LOAD CART
  useEffect(() => {
    const savedCart = JSON.parse(
      localStorage.getItem("cart")
    );

    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // SAVE CART
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // ADD TO CART
  const addToCart = (product) => {
    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  // UPDATE QUANTITY
  const updateQty = (id, qty) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty }
          : item
      )
    );
  };

  return (
    <BrowserRouter>

      {/* NAVBAR */}
      <Navbar
        setSearch={setSearch}
        cart={cart}
      />

      {/* ROUTES */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Products search={search} />
          }
        />

        {/* PRODUCTS */}
        <Route
          path="/products"
          element={
            <Products search={search} />
          }
        />

        {/* CATEGORIES */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutUs />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactUs />}
        />

        {/* PRODUCT DETAILS */}
        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
            />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              updateQty={updateQty}
            />
          }
        />

      </Routes>

      {/* FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;