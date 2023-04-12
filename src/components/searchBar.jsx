import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          border: "none",
          borderBottom: "1px solid #ccc",
          borderRadius: "5px",
          outline: "none",
          fontSize: "16px",
          marginRight: "10px",
        }}
      />
      <button
        style={{
          border: "none",
          backgroundColor: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
