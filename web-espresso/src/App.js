import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import ScoreComponent from './components/score/ScoreComponent';
import RecommandComponent from './components/recommand/RecommandComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScoreComponent/>}/>
          <Route path='/recommands' element={<RecommandComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
