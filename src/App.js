import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Projectpagina from './ProjectPagina';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/ProjectPagina/:projectId" element={<Projectpagina />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
