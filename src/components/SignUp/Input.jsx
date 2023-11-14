import React from "react";

const Input = ({ id, type, onChange, value, label, error }) => {
  return (
    <div className="elementContainer">
      <label htmlFor={id}>{label}: </label>
      <input id={id} onChange={onChange} type={type} value={value} />
      {error && (
        <div
          style={{ marginTop: 12, width: "100%", textTransform: "capitalize" }}
          className="error-view"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Input;
