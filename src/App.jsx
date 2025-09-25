import { useState } from 'react';
import Header from './components/Header.jsx';
import Quiz from './components/Quiz.jsx';
import Intro from './components/Intro.jsx';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <>
      <Header />
      <main>
        {showQuiz ? <Quiz /> : <Intro onStart={() => setShowQuiz(true)} />}
      </main>
    </>
  );
}

export default App;
