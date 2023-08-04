import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart,setInCart] = useState(0)
  const checkCart =  !inCart ? "" : "in-cart"
  const addRemove = !inCart ? "Add to Cart" : "Remove From Cart"
  
  return (
    <li className={checkCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setInCart(!inCart)}>{addRemove}</button>
    </li>
  );
}

export default Item;
