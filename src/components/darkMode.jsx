import React, { useState, useEffect } from 'react';
import "../../src/styles/home.css";

function DarkMode() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div  className={`DarkMode ${theme}`}>
      <a onClick={toggleTheme} href="#">
        {theme === 'light' ? 
          <i className="fa fa-moon-o" aria-hidden="true"></i> :
          <i className="fa fa-sun-o" aria-hidden="true"></i>
        }
      </a>
    </div>
  );
}

export default DarkMode;

