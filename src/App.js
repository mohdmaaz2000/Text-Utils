import './App.css';
import { useState } from 'react';

// import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  const [mode, setMode] = useState('light');
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setStyle({
        backgroundColor: "#03153cf0",
        color: "white"
      });
      document.body.style.backgroundColor = '#03153cf0';
    }
    else {
      setMode('light');
      setStyle({
        backgroundColor: "white",
        color: "black"
      });
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForms heading="Enter the text to analyze" style={style} />
      {/* <About /> */}
    </>
  );
}

export default App;
