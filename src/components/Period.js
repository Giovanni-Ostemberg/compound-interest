import React from "react";

export default function Period({ period, periodChange }) {
  const handleChange = (event) => {
    periodChange(event.target.value);
  };
  return (
    <div class="row">
      <div class="input-field col">
        <input
          id="inputPeriod"
          type="number"
          min="0"
          step="1"
          value={period}
          onChange={handleChange}
          class="validate"
        />{" "}
        <label class="active" htmlFor="first_name2">
          Período (meses):
        </label>
      </div>
    </div>
  );
}
