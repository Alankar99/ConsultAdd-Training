import { useState } from 'react';
import './App.css';
import Table from './table';
import Button from './buttons';


function App() {

  const [sortByValue, setSortByValue] = useState(-1);

  function dataFromButtons(val)
  {
    setSortByValue(val);
    // Table.dis('assssss');
  }

  return (
    <div className='main'>
    <Table sortTableBy={sortByValue}/>
    <Button dataTransfer={dataFromButtons} />
    </div>
  );
}

export default App;
