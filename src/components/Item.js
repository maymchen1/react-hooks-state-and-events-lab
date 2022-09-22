import React, { useState } from "react";

function Item({ name, category }) {
  const [added, setAdded] =useState(false);
  const displayButtonText = () => added ? "Remove from Cart" : "Add to Cart";
  return (
    <li className={added ? 'in-cart': ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=> setAdded(!added)}>{displayButtonText()}</button>
    </li>
  );
}
//go to components to see state//
//can see hooks - state//
//whenever logic use curly brackets//
export default Item;
