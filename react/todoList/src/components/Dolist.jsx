import React from "react";

export default function Dolist({ item, index, onRemoveItem }) {
  return (
    <div className="todo-Item">
      <p>{item}</p>
      <button className="delete-btn" onClick={() => onRemoveItem(index)}>
        삭제
      </button>
    </div>
  );
}
