import React, { useState } from "react";
import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { Stats } from "./components/Stats";
import { PackingList } from "./components/PackingList";

const App = () => {
  const [items, setItems] = useState([]);
  const [updateItem, setUpdateItem] = useState();

  const handleNewItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setUpdateItem("");
  };

  const handleCheckbox = (id) => {
    console.log(id);
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClear = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  };

  const handleUpdate = (item) => {
    setUpdateItem(item);
  };

  const handleUpdateItem = (updatedItem) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updateItem.id ? updatedItem : item))
    );
    setUpdateItem("");
  };

  return (
    <div className="app">
      <Logo />
      <Form
        onAddItem={handleNewItem}
        onUpdateItem={handleUpdateItem}
        item={updateItem}
      />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleCheckbox}
        onClearClick={handleClear}
        onUpdateItem={handleUpdate}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
