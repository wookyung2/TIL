import React, { useState } from "react";
import Dolist from "./Dolist";

export default function TodoBoard() {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onAddItem = (event) => {
    event.preventDefault();
    setTodoList([...todoList, value]);
    setValue("");
  };
  const onRemoveItem = (targetIndex) => {
    const result = todoList.filter((el, index) => index !== targetIndex);
    setTodoList(result);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={onAddItem}>
        <input
          value={value}
          type="text"
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={onAddItem}>추가</button>
      </form>
      {todoList.map((item, i) => (
        <Dolist key={i} item={item} index={i} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
}
