import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForms heading="Enter the text to analyze" />
      <About />
    </>
  );
}

export default App;
