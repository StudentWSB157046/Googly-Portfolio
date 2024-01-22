import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './Main/HomePage';
import Main from './Main/Main';
import Projects from './Main/Projects';
import SocialMedia from './Main/SocialMedia';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Main" element={<Main />} />
        <Route path="" element={<HomePage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/SocialMedia" element={<SocialMedia/>} />

      </Routes>
    </Router>
  );
}

export default App;
