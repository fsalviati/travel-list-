import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  // Callback function to add a new item to the list
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Callback function to remove an item from the list
  const handleRemoveItem = (itemToDelete) => {
    const itemsUpdated = items.filter((item) => item !== itemToDelete);
    setItems(itemsUpdated);
  };

  // Callback function to toggle the "packed" property of an item
  const handlePackedToggle = (itemId) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, packed: !item.packed } : item,
    );
    setItems(updatedItems);
  };

  // Callback function to update the description of an item
  const handleUpdateItem = (itemId, newDescription) => {
    const updatedItems = items.map((item) =>
      item.id === itemId ? { ...item, description: newDescription } : item,
    );
    setItems(updatedItems);
  };

  // Callback function to clear the whole list
  const handleCleanList = () => {
    const answer = window.confirm("Are you sure you want to clear the list?");
    if (answer) {
      setItems([]);
    } else {
      return;
    }
  };

  return (
    <div>
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        handleRemoveItem={handleRemoveItem}
        handlePackedToggle={handlePackedToggle}
        handleUpdateItem={handleUpdateItem}
        handleCleanList={handleCleanList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
