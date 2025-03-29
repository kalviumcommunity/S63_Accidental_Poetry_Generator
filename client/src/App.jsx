import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import { useState } from 'react';

function App() {
  const [poems, setPoems] = useState([]);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home setPoems={setPoems} poems={poems} />} />
        </Routes>
    </Router>
  );
}

export default App;