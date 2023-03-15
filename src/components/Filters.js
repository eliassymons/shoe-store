import React, { useState } from "react";

function Filters(props) {
  return (
    <div className="block text-2xl  w-6/12 mx-auto mb-10">
      <h3 className="font-bold">Filter By</h3>
      <div>
        <select onChange={(e) => props.handleChange(e)} className="px-2">
          <option value="all">All</option>
          <option value="m">Men's</option>
          <option value="f">Women's</option>
          <option value="k">Kids</option>
          {/* <option value="cheap">Least Expensive</option> */}
        </select>
      </div>
      {/* <ul className="text-right">
        <li>
          <label>Men's</label>
          <input
            type="checkbox"
            value="m"
            onChange={(e) => props.handleChange(e)}
          />
        </li>
        <li>
          {" "}
          <label>Women's</label>
          <input
            type="checkbox"
            value="f"
            onChange={(e) => props.handleChange(e)}
          />
        </li>
        <li>
          {" "}
          <label>Kid's</label>
          <input
            type="checkbox"
            value="k"
            onChange={(e) => props.handleChange(e)}
          />
        </li>

        <li>
          {" "}
          <label>Under $150</label>
          <input
            type="checkbox"
            value="cheap"
            onChange={(e) => props.handleChange(e)}
          />
        </li>
      </ul> */}
    </div>
  );
}

export default Filters;
