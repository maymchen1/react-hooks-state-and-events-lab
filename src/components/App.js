import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState(false);
  //setting function will set mode//
//test often when coding//
  //console.log use state - console array//
//use state is a hook//

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setMode(!mode)}>{mode ? 'Light': 'Dark'} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

//!not symbol//
export default App;
