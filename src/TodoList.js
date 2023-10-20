import Reac, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todolist() {
  const [todos, setTodos] = useState([
    { title: "exercise", selected: true, id: 0 },
    { title: "laundry", selected: false, id: 1 },
    { title: "dishes", selected: false, id: 2 },
    { title: "study", selected: false, id: 3 },
  ]);

  function handleTodoItemClicked(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    console.log(todo.selected);
    setTodos(newTodos);
  }

  function deleteOptions() {
    const newTodos = todos.filter((todo) => todo.selected === false);
    setTodos(newTodos);
  }

  return (
    <div className="TodoListContainer">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onClick={handleTodoItemClicked} />
      ))}
      <div className="DeleteButton" onClick={deleteOptions}>
        <p>delete</p>
      </div>
    </div>
  );
}
