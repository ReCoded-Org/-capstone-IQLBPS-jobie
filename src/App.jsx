import React from 'react';



// import { Routes, Route } from "react-router-dom";
import './App.css';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

function App() {
    return ( 
        <div className = "App" >
            <Experience/>
            <Education/>
</div>
    );
 
}

export default App;
