import React from "react";

import "./App.css";

import ColorBox from "./components/ColorBox/ColorBox";
import TodoList from "./components/TodoList/TodoList";
import PostList from "./components/PostList/PostList";

function App() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <ColorBox />
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <TodoList />
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <PostList />
      </div>
    </div>
  );
}

export default App;
