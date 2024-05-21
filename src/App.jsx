import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Exercises from './components/Exercises'
import NavBar from './components/NavBar';
import ExerciseSummary from './components/ExerciseSummary';
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateExercise from './components/UpdateExercises';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <UpdateExercise />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercise-summary" element={<ExerciseSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;