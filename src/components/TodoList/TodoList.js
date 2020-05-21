import React, { useState } from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const [todoList, setTodoList] = useState([
    { title: "I love Easy Frontend! 😍 " },
    { title: "We love Easy Frontend! 🥰 " },
    { title: "They love Easy Frontend! 🚀 " },
  ]);

  function onTodoClick(todoItem) {
    const index = todoList.indexOf(todoItem);
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  const onSubmit = (value) => {
    const newTodoList = [...todoList];
    newTodoList.unshift({ title: value });
    setTodoList(newTodoList);
  };

  return (
    <div>
      <TodoForm onSubmit={onSubmit} />
      <ul className="todo-list">
        {todoList.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            todoItem={todoItem}
            onTodoClick={onTodoClick}
          />
        ))}
      </ul>
    </div>
  );
}
