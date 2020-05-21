import React, { useState } from "react";

import "./ColorBox.scss";

function getRamdomColor() {
  const COLOR_LIST = ["deeppink", "green", "yellow"];
  const randomIndex = Math.trunc(Math.random() * 3);
  return COLOR_LIST[randomIndex];
}

export default function ColorBox() {
  // const initColor = localStorage.getItem("box_color") || "deeppink";
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box_color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRamdomColor();
    setColor(newColor);

    localStorage.setItem("box_color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    ></div>
  );
}
