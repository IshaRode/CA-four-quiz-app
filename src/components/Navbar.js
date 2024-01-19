import React from 'react'
import { useState } from 'react';


export default function Navbar() {

    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#a3d3ee' : '#043d5e';
  };

  return (
    <div>
    <nav>
    <h2 style={{ color: darkMode ? 'white' : 'black' }}>Quizify</h2>

    <div className='darkmode-image' onClick={toggleDarkMode}> {darkMode ? '🔆' : '🌙'}</div>
    
  </nav>
  </div>
  )
}

