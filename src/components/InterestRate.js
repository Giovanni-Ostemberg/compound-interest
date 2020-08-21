import React from "react";
import M from "materialize-css";

export default function InterestRate({ interestRate, interestChange }) {
  const handleChange = (event) => {
    if (event.target.value > 12 || event.target.value < -12) {
      M.toast({ html: "Limite Alcançado", classes: "rounded" });
      return interestChange(event.target.value > 12 ? 12 : -12);
    }
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
