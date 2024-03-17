import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';
import Navigation from './components/Navigation';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  return (
    <div className="App">
      <Router>
        
        <header>
          <h1>Exercise App - Assignment 9</h1>
          <p>This app lets you add, edit, update and delete exercises to track your fitness progress easily.</p>
        </header>
        
        <Navigation />

      <main>
        <div className="App-header">
		    <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}/>
            <Route path="/add-exercise" element={<AddExercisePage />}/>
            <Route path="/edit-exercise" element={ <EditExercisePage exerciseToEdit={exerciseToEdit}/>}/>
		    </Routes>
        </div>
      </main>

      <footer>
        <p>© 2024 Matthew Paccione</p>
      </footer>

      </Router>
    </div>
  );
}

export default App;