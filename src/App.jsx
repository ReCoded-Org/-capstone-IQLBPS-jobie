import React from 'react';
// import { Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
    return ( 
        <div className = "App" >
            <Experience/>
            <Education/>
        </div>
    );
}

export default App;