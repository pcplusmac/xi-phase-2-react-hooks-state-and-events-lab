import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState("false");

  function handleAddClick (){
    setInCart((inCart) => !inCart)
  }
  
  const cartStatus = inCart ? "" : "in-cart"
  const cartMsg = inCart ? "Add to Cart" : "Remove From Cart"
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddClick}>{cartMsg}</button>
    </li>
  );
}

export default Item;
