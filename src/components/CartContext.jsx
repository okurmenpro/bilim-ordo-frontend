import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  const removeFromCart = (productName) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.name !== productName);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };


  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); 
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

