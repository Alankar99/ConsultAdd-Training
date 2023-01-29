import logo from './logo.svg';
import './App.css';
import CurrencyInput from './CurrencyInput';


function App() {
  return (
    <>
      <div className='main'>
        <div id="header">Currency Converter</div>
        <CurrencyInput  />
      </div>
    </>
  );
}

export default App;
