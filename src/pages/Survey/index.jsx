import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Survey() {
  const { questionNumber } = useParams();

  const previousQuestion =
    parseInt(questionNumber) === 1 ? 1 : parseInt(questionNumber, 10) - 1;

  const nextQuestion = parseInt(questionNumber, 10) + 1;

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${previousQuestion}`}>Précédent</Link>
      {questionNumber === '10' ? (
        <Link to="/results">Terminer</Link>
      ) : (
        <Link to={`/survey/${nextQuestion}`}>Suivant</Link>
      )}
    </div>
  );
}

export default Survey;
