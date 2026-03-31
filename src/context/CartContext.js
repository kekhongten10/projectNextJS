"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart");
    if (data) setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, qty = 1) => {

    setCart(prev => {

      const exist = prev.find(p => p.id === product.id);

      if (exist) {
        return prev.map(p =>
          p.id === product.id
            ? { ...p, qty: p.qty + qty }
            : p
        );
      }

      return [...prev, { ...product, qty }];
    });

  };

  const removeFromCart = (id) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, qty } : p
    ));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);