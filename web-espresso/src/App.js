import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import ScoreComponent from './components/score/ScoreComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScoreComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
