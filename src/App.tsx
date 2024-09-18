import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';

const App: React.FC = () => {

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/student">Students</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentsPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
