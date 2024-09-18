import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import ExplanationPage from './pages/ExplanationPage';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/student">Students</Link>
          <Link to="/explanation">Explanation</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentsPage />} />
          <Route path="/explanation" element={<ExplanationPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
