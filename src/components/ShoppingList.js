import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState('All')

  function handleSelectChange(event){
    setSelectedCategory(event.target.value)
  }
  
const listDisplay = items.filter((list) => {
  if(selectedCategory === "All"){
    return true
  }else {
    return list.category === selectedCategory
  }
})

  return (

    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"  onChange={handleSelectChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      
        {listDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

