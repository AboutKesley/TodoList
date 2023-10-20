import React, { useState } from "react";

function getClassName(selected) {
  if (selected) {
    return "todoItemContainer selected";
  } else {
    return "todoItemContainer";
  }
}

export default function TodoItem({ todo, onClick }) {
  return (
    <div
      className={getClassName(todo.selected)}
      onClick={() => onClick(todo.id)}
    >
      <p className="TodoTitle">{todo.title}</p>
    </div>
  );
}
