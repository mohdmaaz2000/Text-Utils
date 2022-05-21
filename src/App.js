import './App.css';
import React, { useState } from 'react';

import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setStyle({
        backgroundColor: "#03153cf0",
        color: "white"
      });
      document.body.style.backgroundColor = '#03153cf0';
      showAlert('Dark Mode Enabled', 'success');
    }
    else {
      setMode('light');
      setStyle({
        backgroundColor: "white",
        color: "black"
      });
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />

        {/* <About /> */}

        <Routes>
          <Route exact path="/" element={<TextForms heading="Enter the text to analyze" showAlert={showAlert} style={style} />} />
            
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
