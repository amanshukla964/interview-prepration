// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DSAComponent from './components/lib/DSAComponent/DSACOmponent';

// Components for different pages
function Home() {
  return <h2>Home Page</h2>;
}

const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsa" element={<DSAComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
