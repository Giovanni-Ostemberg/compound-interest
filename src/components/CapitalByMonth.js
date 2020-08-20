import React from "react";
import Cards from "./css-modules/Cards";

export default function CapitalByMonth({
  interestRate,
  period,
  initialCapital,
}) {
  return (
    <div>
      <div>
        <h4>Expectativa:</h4>
      </div>
      <div>
        <Cards
          interestRate={interestRate}
          period={period}
          initialCapital={initialCapital}
        />
      </div>
    </div>
  );
}
