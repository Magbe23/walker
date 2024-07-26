import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:resource/:id" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
