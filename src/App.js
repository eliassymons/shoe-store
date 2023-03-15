import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage";
import { ShopContextProvider } from "./context/shop-context";

import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative">
      <ShopContextProvider>
        <Header />
        <Routes>
          <Route exact path="/shoe-store" element={<Main />} />

          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </ShopContextProvider>{" "}
    </div>
  );
}

export default App;

///TODOS
// 1. add individual page (useParams) for the products, each one having addItem functionality

//2. Add filter section on main page (filter by gender, price)

//4. Fix the router index problem
