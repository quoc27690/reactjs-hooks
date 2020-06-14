import React, { useState } from "react";

export default function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onClick}
        >
          Add
        </button>
      </div>
    </div>
  );
}
