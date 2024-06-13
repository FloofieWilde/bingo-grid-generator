import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BingoPage from './pages/BingoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BingoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
