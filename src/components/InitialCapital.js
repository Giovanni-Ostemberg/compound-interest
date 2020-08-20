import React from "react";
import css from "./css-modules/main.module.css";

export default function InitialCapital({ initialCapital, capitalChange }) {
  const handleChange = (event) => {
    capitalChange(event.target.value);
  };
  return (
    <div className="row">
      <div className="input-field col">
        <input
          id="inputCapital"
          type="number"
          min="0"
          step="0.2"
          value={initialCapital}
          onChange={handleChange}
          className="validate"
        />{" "}
        <label className="active" htmlFor="first_name2">
          Capital Inicial:
        </label>
      </div>
    </div>
  );
}
