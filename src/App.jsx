// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Docs from './components/Docs.jsx'; // 👈 Move your current layout here

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
        </Routes>
    );
};

export default App;
