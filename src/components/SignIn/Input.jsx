import React from "react";

const Input = ({ id, type, onChange, value, label }) => {
  return (
    <div className="elementContainer">
      <label htmlFor={id}>{label}: </label>
      <input id={id} onChange={onChange} type={type} value={value} />
    </div>
  );
};

export default Input;
