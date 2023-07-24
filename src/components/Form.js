import React, { useEffect, useState } from "react";

export const Form = ({ onAddItem, onUpdateItem, item }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleForm = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    if (item) {
      onUpdateItem(newItem);
    } else {
      onAddItem(newItem);
    }

    setDescription("");
    setQuantity(1);
  };

  useEffect(() => {
    if (item) {
      setDescription(item.description);
      setQuantity(item.quantity);
    } else {
      setDescription("");
      setQuantity(1);
    }
  }, [item]);

  return (
    <form className="add-form" onSubmit={handleForm}>
      <h3>Whatv do you need for your 😀 trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((val) => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> {item ? "Update" : "Add"}</button>
    </form>
  );
};
