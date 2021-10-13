import React from 'react';
import { GithubState } from './context/GithubContext';
import Hero from './components/Hero';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <GithubState>
      <Router>
        <Hero />
      </Router>
    </GithubState>
  );
}

export default App;
