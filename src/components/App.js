import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [changeMode, setChangeMode] = useState(0);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = changeMode ? "App dark" : "App light"
  const appModeName = changeMode ?  "Dark Mode": "Light Mode"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={()=> setChangeMode(!changeMode)}>{appModeName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
