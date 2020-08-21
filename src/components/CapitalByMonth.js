import React from "react";
import Cards from "./Cards";
import css from "./css-modules/main.module.css";

export default function CapitalByMonth({
  interestRate,
  period,
  initialCapital,
}) {
  return (
    <div>
      {period != 0 && (
        <div>
          <h4>Expectativa</h4>
        </div>
      )}
      <div className={css.cardContainer}>
        <Cards
          interestRate={+interestRate}
          period={+period}
          initialCapital={+initialCapital}
        />
      </div>
    </div>
  );
}
