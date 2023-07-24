import React from "react";

export const Item = ({ item, onDeleteItem, onToggleItem, onUpdateItem }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
      <button onClick={()=> onUpdateItem(item)}>📝</button>
    </li>
  );
};
