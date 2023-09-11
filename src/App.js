import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, updateItemList] = useState([]);

  const onChangeHandler = (e) => {
    console.log("current value", e.target.value);
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    updateItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <h1 className="title">GET THINGS DONE!</h1>

      <header className="App-header">
        <div className="wrapper">
          <div className="input-wrapper">
            <input
              placeholder="Add an item"
              value={currentItem}
              onChange={onChangeHandler}
            />
            <button className="input-button" onClick={addItemToList}>
              +
            </button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
