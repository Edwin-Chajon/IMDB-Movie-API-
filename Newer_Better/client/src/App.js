import React from 'react';
import './App.css';
import { HashRouter as Router} from 'react-router-dom';

import MovieGet from './components/MovieGet';
//import MovieCard from './components/MovieCard'

function App() {







  return (
    <Router >
      <div className = 'nextTry'>
       <MovieGet/>
      </div>
    </Router>
  );
}

export default App;
