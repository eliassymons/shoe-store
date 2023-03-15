import Shoe from "./Shoe";
import shoesData from "../shoesData.js";
import React, { useState } from "react";
import Filters from "./Filters";

function Main() {
  const [cartId, setCartId] = useState([]);
  const addShoe = (e) => {
    setCartId((prev) => [...prev, parseInt(e.target.id)]);
    console.log(cartId);
  };
  const [filters, setFilters] = useState(["m", "f", "k"]);
  const handleChange = (v) => {
    // console.log(v.target.value);
    // console.log(v.target.checked);

    setFilters(() => {
      if (v.target.value === "all") {
        return ["m", "f", "k"];
      } else return [v.target.value];
    });
  };
  console.log(filters);

  // const filterShoes = (arr) => {
  //   let newArr = [];
  //   if (filters.length > 0) {
  //     for (let i = 0; i < filters.length; i++) {
  //       newArr.push(arr.filter((item) => item.style === filters[i]));
  //     }
  //   }
  //   console.log(newArr);
  // };
  const shoes = shoesData
    .filter(
      (shoe) =>
        shoe.style === filters[0] ||
        shoe.style === filters[1] ||
        shoe.style === filters[2]
    )
    .map((shoe) => {
      return (
        <Shoe
          img={shoe.img}
          name={shoe.name}
          price={shoe.price}
          style={shoe.style}
          key={shoe.id}
          brand={shoe.brand}
          id={shoe.id}
          addShoe={addShoe}
          setCartId={setCartId}
        />
      );
    });

  return (
    <div className="mt-10 text-center flex-col items-center justify-center gap-9">
      <Filters handleChange={handleChange} />

      <div className="flex flex-wrap w-[90vw]   mx-auto items-center justify-center px-10 gap-8 md:max-w-6xl">
        {shoes}
      </div>
    </div>
  );
}

export default Main;
