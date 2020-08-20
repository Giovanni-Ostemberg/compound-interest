import React from "react";

export default function Card({ interestRate, period, initialCapital }) {
  const cards = [];
  let newInitialCapital = +initialCapital;
  let totalRate = +interestRate;

  const distributeValues = () => {
    for (let i = 1; i <= period; i++) {
      let card = {
        capital: +newInitialCapital + newInitialCapital * interestRate,
        totalRate: +totalRate,
        month: i,
      };

      newInitialCapital = newInitialCapital + newInitialCapital * interestRate;
      totalRate += +interestRate;
      cards.push(card);
    }
    console.log(cards);
    return cards;
  };

  if (period > 0) {
    const render = distributeValues();
    return render.map((card) => {
      return (
        <div key={card.month}>
          <span>{card.capital}</span>
          <span>{card.totalRate}</span>
          <span>{card.month}</span>
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
