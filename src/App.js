import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {

    const [isDarkMode, setisDarkMode] = useState('light');

    const toggleMode = () => {
      if (isDarkMode==='light') {
        setisDarkMode('dark');
        document.body.style.backgroundColor = '#0A1648';
      } else {
        setisDarkMode('light');
        document.body.style.backgroundColor = '#ffffff';
      }
    }

  return (
    <>
      <Navbar mode={isDarkMode} toggleMode={toggleMode} />
      <Textform mode={isDarkMode} />
    </>
  );
}

export default App;
