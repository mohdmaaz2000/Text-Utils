import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <TextForms heading="Enter the text to analyze" />
    </>
  );
}

export default App;
