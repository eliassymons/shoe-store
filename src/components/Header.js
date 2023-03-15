import { Link } from "react-router-dom";
import logo from "../logo-mobile.png";

import cart from "../cart-fill.svg";
import { ShopContext } from "../context/shop-context";
import React, { useContext } from "react";

function Header() {
  const { itemTotal } = useContext(ShopContext);
  return (
    <div className="sticky  top-0 flex w-full items-center justify-between px-10 py-8 md:px-20 md:py-12 bg-[#faf9f6] z-20 bg-opacity-60 ">
      <Link to="/shoe-store">
        <img alt="logo" src={logo} className="w-[5rem] h-[auto] md:w-[8rem]" />
      </Link>

      <Link to="/cart" className="relative">
        <img alt="logo" src={cart} className="w-8" />
        <h4
          className="absolute -top-3 -right-4 text-white text-l bg-green-600 w-6 h-6 leading-none text-center  p-1 rounded-full "
          style={{ display: itemTotal === 0 ? "none" : "block" }}
        >
          {itemTotal}
        </h4>
      </Link>
    </div>
  );
}

export default Header;
