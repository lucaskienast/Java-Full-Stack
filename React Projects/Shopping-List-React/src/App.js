import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {

  const firstRender = useRef(true);
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      return;
    }

    setItems([...items, {
      text: inputValue,
      id: uuidv4()
    }]);

    setInputValue("");
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
    else {
      localStorage.setItem("Item", JSON.stringify([...items]));
    }
  }, [items]);

  useEffect(() => {
    if (localStorage.getItem("Item") !== null) {
      const newItems = localStorage.getItem("Item");
      setItems(JSON.parse([...items, newItems]));
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <form onSubmit={addItem}>
          <input 
            autoFocus
            type="text"
            placeholder="Add an item"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        {items.map(item => (
          <div key={item.id} className="todo">
            <p>{item.text}</p>
            <i 
              onClick={() => removeItem(item.id)} 
              className="far fa-trash-alt">
            </i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
