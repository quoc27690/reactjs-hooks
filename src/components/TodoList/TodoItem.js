import React from "react";

export default function TodoItem(props) {
  const { todoItem, onTodoClick } = props;

  function handleTodoClick(todoItem) {
    onTodoClick(todoItem);
  }

  return <li onClick={() => handleTodoClick(todoItem)}>{todoItem.title}</li>;
}
