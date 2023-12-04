import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Counter from "./Counter";
import { useCart } from "./CartContext";

function CartCard({ id, name, price, quantity }) {
  const { updateCartItemQuantity, removeFromCart } = useCart();
  const [count, setCount] = useState(quantity);

  const handleQuantityChange = (newCount) => {
    setCount(newCount);
    updateCartItemQuantity(id, newCount);
  };

  const handleRemoveItem = () => {
    removeFromCart(id);
  };

  return (
    <div className="cart-card">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <ProductCard id={id} className="small-svg" />
        <div>
          <h1 className="section-text" style={{ margin: "0 0 0 1em" }}>
            {name}
          </h1>
          <h1 className="section-text" style={{ margin: "0 0 0 1em" }}>
            ${(price * count).toFixed(2)}
          </h1>
          <div style={{ margin: "1em 0 0 1em" }}>
            <Counter count={count} setCount={handleQuantityChange} />
            <button className="cart-trash" onClick={handleRemoveItem}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
