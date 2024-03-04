import './App.css';
import { CodingPage } from './components/CodingPage';
import { Landing } from './components/Landing';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <><div>
      <h1>
        Replit
      </h1>
    </div><BrowserRouter>
        <Routes>
          <Route path="/coding" element={<CodingPage />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter></>
  );
}

export default App;
