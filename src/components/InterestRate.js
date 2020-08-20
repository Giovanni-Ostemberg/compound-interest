import React from "react";

export default function InterestRate({ interestRate, interestChange }) {
  const handleChange = (event) => {
    interestChange(event.target.value);
  };
  return (
    <div class="row">
      <div class="input-field col">
        <input
          id="inputInterest"
          type="number"
          step="0.2"
          value={interestRate}
          onChange={handleChange}
          class="validate"
        />{" "}
        <label class="active" htmlFor="first_name2">
          Taxa de Juros (Mensal):
        </label>
      </div>
    </div>
  );
}
