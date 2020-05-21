import React from "react";

import "./App.css";

import ColorBox from "./components/ColorBox/ColorBox";
import TodoList from "./components/TodoList/TodoList";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="App">
      <ColorBox />
      <TodoList />
      <PostList />
    </div>
  );
}

export default App;
