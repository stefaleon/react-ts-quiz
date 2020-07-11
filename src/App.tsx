import React from 'react';

// Components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {};
  const checkAnswer = async (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = async () => {};

  return (
    <div className='App'>
      <h1>Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default App;
