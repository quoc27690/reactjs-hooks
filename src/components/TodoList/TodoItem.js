import React from "react";

export default function TodoItem(props) {
  const { todoList, onTodoClick } = props;

  function handleTodoClick(todoItem) {
    onTodoClick(todoItem);
  }

  return (
    <ul>
      {todoList.map((todoItem, index) => (
        <li key={index} onClick={() => handleTodoClick(todoItem)}>
          {todoItem.title}
        </li>
      ))}
    </ul>
  );
}
