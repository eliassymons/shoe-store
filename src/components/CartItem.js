function CartItem(props) {
  return (
    <div className="flex justify-between m-4 border-b-2 pb-4">
      <img
        src={process.env.PUBLIC_URL + "/images/" + props.img}
        alt="shoe"
        className="w-20 h-20 object-cover rounded-lg md:w-[8rem] md:h-[8rem]"
      />
      <div className="flex justify-between w-8/12   relative ">
        <div className="">
          <h3 className="font-bold text-xl md:text-2xl">{props.name}</h3>
          <h3 className="text-xl">{props.brand}</h3>
        </div>
        <div className="flex-col">
          <h3 className="font-bold text-xl">
            ${props.price * props.quantity}.00
          </h3>
          {props.quantity > 1 && <h3>x{props.quantity}</h3>}
        </div>
        <button
          onClick={() => props.remove(props.id)}
          className="absolute bottom-0 right-0 bg-red-400 px-2 rounded-xl text-white hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
