import React from "react";
import Card from "./Card";
import css from "./css-modules/main.module.css";

export default function Cards({ interestRate, period, initialCapital }) {
  const cards = [];
  let newInitialCapital = initialCapital;
  let totalRate = interestRate;

  const distributeValues = () => {
    for (let i = 1; i <= period; i++) {
      let accumulated = initialCapital * (1 + interestRate / 100) ** i;
      let card = {
        capital: accumulated,
        gain: accumulated - initialCapital,
        month: i,
        totalRate: parseFloat(
          ((accumulated - initialCapital) * 100) / initialCapital
        ).toFixed(2),
      };

      newInitialCapital = newInitialCapital + newInitialCapital * interestRate;
      totalRate += interestRate;
      cards.push(card);
    }
    console.log(cards);
    return cards;
  };

  // M = C (1+i)t

  if (period > 0) {
    const render = distributeValues();
    return render.map((card) => {
      return (
        <div key={card.month} className={css.card}>
          <Card
            capital={card.capital}
            totalRate={card.totalRate}
            month={card.month}
            gain={card.gain}
          />
        </div>
      );
    });
  } else {
    return (
      <div>
        <span>Nada a ser mostrado!</span>
      </div>
    );
  }
}
