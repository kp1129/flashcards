import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Flashcard from './components/Flashcard/Flashcard';

function App() {
  const [flashcards, setFlashcards] = useState([])

  return (
    <div className="app">
      <Counter flashcards={flashcards}/>
     <Flashcard flashcards={flashcards} setFlashcards={setFlashcards} />
    </div>
  );
}

export default App;
