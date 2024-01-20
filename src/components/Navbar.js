import React from 'react'
// Importing useState hook for state management
import { useState } from 'react';

// Navbar Compponent
export default function Navbar() {

    // State to manage dark and light mode 
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle between light and dark mode
    const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Changing color of background when button is clicked
    document.body.style.backgroundColor = darkMode ? '#a3d3ee' : '#043d5e';
  };

  // HTML for navbar component
  return (
    <div>
    <nav>
      {/* Changing the text color when switching between dark and light mode */}
    <h2 className='queezify' style={{ color: darkMode ? 'white' : 'black' }}>🎯ueezify</h2>

    {/* Changing the button according to the mode selected */}
    <div className='darkmode-image' onClick={toggleDarkMode}> {darkMode ? '🔆' : '🌙'}</div>
  </nav>
  </div>
  )
}