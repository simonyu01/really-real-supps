import React from "react";
import { useCart } from "../components/CartContext";
import CartCard from "../components/CartCard";

function CartPage() {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = () => {
    alert("Order Placed!");
    clearCart();
  };

  return (
    <div className="cart">
      <div className="section-container">
        <div className="cart-section">
          <h1 className="section-title">Cart</h1>
          {cartItems.length === 0 ? (
            <h1 className="section-title">Cart is Empty</h1>
          ) : (
            <div style={{ width: "100%" }}>
              {cartItems.map((item) => (
                <CartCard
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}
          <button
            className="submit-button"
            style={{ width: "50%", minWidth: "0", margin: "1em 0 0 0" }}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
