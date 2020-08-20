import React, { Component, useState, useEffect } from "react";
import InitialCapital from "./components/InitialCapital";
import InterestRate from "./components/InterestRate";
import Period from "./components/Period";
import css from "./components/css-modules/main.module.css";
import CapitalByMonth from "./components/CapitalByMonth";

// O estado da aplicação deve ser composto do capitalinicial, a taxa de juros mensale o período. A taxa de juros pode ser tanto positiva (investimento) quanto negativa (depreciação).A implementação da manipulação do estado da aplicação pode ser
// feita tanto com class componentsquanto hooks, ficando a escolha àcritério do aluno.Entretanto, as questões do desafio serão elaboradas com base em conceitos e implementação referentes somente aos React Hooks

export default function App() {
  const [initialCapital, setInitialCapital] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState(0);

  useEffect(() => {
    console.log("Change");
  }, [initialCapital, period, interestRate]);

  const handleCapitalChange = (newCapital) => {
    setInitialCapital(newCapital);
  };

  const handleInterestChange = (newInterestRate) => {
    setInterestRate(newInterestRate);
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return (
    <div className=" container">
      <h2>Juros Compostos</h2>
      <div className={css.inputContainer}>
        <InitialCapital
          initialCapital={initialCapital}
          capitalChange={handleCapitalChange}
        />
        <InterestRate
          interestRate={interestRate}
          interestChange={handleInterestChange}
        />
        <Period period={period} periodChange={handlePeriodChange} />
      </div>
      <div>
        <CapitalByMonth
          initialCapital={initialCapital}
          interestRate={interestRate}
          period={period}
        />
      </div>
    </div>
  );
}
