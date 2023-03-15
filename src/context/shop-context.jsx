import React, { createContext } from "react";
import shoes from "../shoesData";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= shoes.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getDefaultCart());
  const [cartTotal, setCartTotal] = React.useState(0);
  const [itemTotal, setItemTotal] = React.useState(0);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartTotal((prev) => prev + shoes[itemId - 1].price);
    setItemTotal((prev) => prev + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartTotal((prev) => prev - shoes[itemId - 1].price);
    setItemTotal((prev) => prev - 1);
  };
  const emptyCart = () => {
    setCartItems(getDefaultCart());
    setCartTotal(0);
    setItemTotal(0);
  };
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartTotal,
    itemTotal,
    emptyCart,
  };
  console.log(itemTotal);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
