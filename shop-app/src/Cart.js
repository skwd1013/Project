import React, { useState, useEffect } from "react";
import CartSingleton from "./CartSingleton";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(CartSingleton.getInstance().getCart());
  }, []);

  const handleRemoveItem = (id) => {
    CartSingleton.getInstance().removeFromCart(id);
    setCartItems(CartSingleton.getInstance().getCart());
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-header">장바구니</h1>
      {cartItems.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <strong className="cart-item-title">상품명:</strong>{" "}
                  {item.title}
                  <div>
                    <strong className="cart-item-price">가격:</strong> $
                    {item.price}
                  </div>
                  <div>
                    <strong className="cart-item-quantity">수량:</strong>{" "}
                    {item.quantity}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="cart-item-remove-btn"
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>총합:</strong> ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
