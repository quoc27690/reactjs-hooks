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
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => onClick(searchTerm)}
        >
          Search
        </button>
      </div>
    </div>
  );
}
