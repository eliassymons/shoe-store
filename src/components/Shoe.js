import { useContext } from "react";
import add from "../cart-plus-fill.svg";
import checked from "../cart-check-fill.svg";
import { ShopContext } from "../context/shop-context";

function Shoe(props) {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <div className="  w-fit flex-col items-center justify-center">
      <div className="relative w-[80vw] h-[20rem] object-cover max-w-[18rem] ">
        <img
          className="w-[60vw] h-[20rem] mx-auto object-cover bg-blend-darken opacity-60 rounded-lg md:w-[15rem]"
          alt="shoe"
          src={process.env.PUBLIC_URL + "/images/" + props.img}
        ></img>

        <button onClick={() => addToCart(props.id)}>
          <img
            alt="add"
            src={cartItems[props.id] ? checked : add}
            className="absolute top-0 right-8 w-[2.5rem] md:w-[2rem] md:right-8 m-2  "
            id={props.id}
          />
        </button>
        {cartItems[props.id] > 0 && (
          <h3 className="text-white font-bold text-lg leading-none p-[.3rem] absolute top-1 right-8  z-10 bg-green-600 rounded-full  w-6 h-6 md:right-7  ">
            {cartItems[props.id]}
          </h3>
        )}
      </div>
      <h4 className="mt-2 text-2xl font-extrabold">{props.brand}</h4>
      <h4 className="text-3xl">{props.name}</h4>
      <h5 className="text-2xl font-extrabold">${props.price}</h5>
    </div>
  );
}

export default Shoe;
