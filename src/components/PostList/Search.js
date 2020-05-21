import React, { useState } from "react";

export default function Search(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const onChange = (value) => {
    setSearchTerm(value);
  };

  const onClick = (searchTerm) => {
    const searchTerm1 = { searchTerm };
    onSubmit(searchTerm1);
  };

  return (
    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          onClick={() => onClick(searchTerm)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
