import React, { useState } from "react";

export default function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onClick = (value) => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          onClick={() => onClick(value)}
        >
          Add
        </button>
      </div>
    </div>
  );
}
