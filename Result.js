import React from 'react';

function Result({ score, totalQuestions }) {
  return (
    <div>
      <h2>¡Has completado el cuestionario!</h2>
      <p>Tu puntaje es: {score} de {totalQuestions}</p>
    </div>
  );
}

export default Result;
