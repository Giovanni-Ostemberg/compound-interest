import React from "react";
import css from "./css-modules/main.module.css";

export default function Card({ capital, totalRate, month, gain }) {
  const formatValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  console.log(gain > 0);

  return (
    <div className="col s12 m7">
      <div className="card horizontal">
        <div className={css.cardMonth}>
          <span>{month}</span>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <ul>
              <li className={gain > 0 ? css.positive : css.negative}>
                {gain > 0 ? "+" : ""}
                {formatValue.format(gain)}
              </li>
              <li
                className={
                  gain > 0 ? css.positivePercentage : css.negativePercentage
                }
              >
                {capital != 0
                  ? parseFloat(totalRate).toFixed(2) + "%"
                  : "Informar capital"}
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span className={gain > 0 ? css.positiveTotal : css.negativeTotal}>
              {formatValue.format(capital)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
