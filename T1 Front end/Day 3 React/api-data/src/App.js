import { useState } from 'react';
import './App.css';
import Child from './Child';

function App() {

  const [btnClick, setBtnClick] = useState(false);
  function myOnClick(myData)
  {
    console.log('got', myData);
  }

  function changeBtnClick()
  {
    setBtnClick(true);
  }

  return (
    <div className="App">
      App component is working!
      <p>The button below on click displays the data in the child component.</p>
      <button onClick={changeBtnClick}>
        Click me
      </button>
      <Child sendDataChild={myOnClick} childBtnClick={btnClick} />

    </div>
  );
}

export default App;
