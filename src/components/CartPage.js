import { ShopContext } from "../context/shop-context";
import React, { useContext } from "react";
import shoes from "../shoesData";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function CartPage() {
  // const [cartTotal, setCartTotal] = useState(0);
  // const addToTotal = (price) => setCartTotal((prev) => prev + price);

  const { removeFromCart, cartItems, cartTotal } = useContext(ShopContext);
  // eslint-disable-next-line
  const cartDisplay = shoes.map((shoe) => {
    if (cartItems[shoe.id] !== 0) {
      return (
        <CartItem
          id={shoe.id}
          brand={shoe.brand}
          name={shoe.name}
          quantity={cartItems[shoe.id]}
          img={shoe.img}
          price={shoe.price}
          remove={removeFromCart}
        />
      );
    }
  });

  return (
    <div className="w-full py-4 ">
      {cartTotal > 0 ? (
        <h1 className="text-2xl font-extrabold text-center pt-4 md:text-5xl">
          My Cart:
        </h1>
      ) : (
        <h1 className="text-3xl font-extrabold text-center pt-4 md:text-5xl">
          No items in your cart
        </h1>
      )}
      <div className="flex-col w-full max-w-lg justify-center items-center p-4 mx-auto">
        {cartDisplay}
      </div>
      {cartTotal > 0 && (
        <h2 className="text-center text-2xl font-extrabold md:text-4xl">
          Total: ${cartTotal}.00
        </h2>
      )}
      {cartTotal > 0 && <Checkout />}
    </div>
  );
}

export default CartPage;
