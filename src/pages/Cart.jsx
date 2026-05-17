import React, { useEffect, useState } from "react";

function Cart({ cart = [] }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cart);
  }, [cart]);

  const updateQty = (index, type) => {
    const updated = [...items];
    const currentQty = updated[index].quantity || 1;

    if (type === "inc") {
      updated[index].quantity = currentQty + 1;
    } else {
      updated[index].quantity = Math.max(1, currentQty - 1);
    }

    setItems(updated);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + tax;

  return (
    <div className="cart-page">

      {/* HEADER */}
      <div className="cart-header">
        <h1>🛒 Shopping Cart</h1>
        <p>{items.length} items in your cart</p>
      </div>

      <div className="cart-layout">

        {/* ITEMS */}
        <div className="cart-items">

          {items.length === 0 ? (
            <h2>Cart is empty 😢</h2>
          ) : (
            items.map((item, index) => (
              <div className="cart-card" key={index}>

                <img
                  src={item.images?.[0] || "https://placehold.co/300x300"}
                  alt={item.title}
                />

                <div className="cart-info">
                  <h3>{item.title}</h3>

                  {/* COLOR OPTIONS (PINK BUTTONS) */}
                  {/* <div className="color-options">
                    <button className="color-btn">Gold/Green</button>
                    <button className="color-btn">Silver/Blue</button>
                    <button className="color-btn">Rose Gold/Brown</button>
                  </div> */}

                  {/* QTY */}
                  <div className="qty-box">
                    <button onClick={() => updateQty(index, "dec")}>−</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => updateQty(index, "inc")}>+</button>
                  </div>

                  <p className="price">
                    Rs {item.price * (item.quantity || 1)}
                  </p>

                </div>

              </div>
            ))
          )}

        </div>

        {/* SUMMARY */}
        {items.length > 0 && (
          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary-row">
              <span>Tax</span>
              <span>Rs {tax}</span>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>

            {/* PROMO */}
            <div className="promo-box">
              <input type="text" placeholder="Enter code" />
              <button>Apply</button>
            </div>

            {/* CHECKOUT */}
            <button className="checkout-btn">
              Proceed to Checkout
            </button>

            {/* PAYMENTS */}
            <div className="payments">

              <p className="pay-title">Secure Payment Methods</p>

              <div className="payment-icons">
                <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/amex.png" alt="Amex" />
                <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" />
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;