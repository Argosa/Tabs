import React, { useState } from 'react';
import './App.css';

// useState returns a state object and a set function

const Button = (props) => {

return (
  <button 
  onClick={() => props.textKey (props.incrementValue)} 
  className='btn'>Tab {props.incrementValue}</button> // event function activates setCounter with counter + 1 that adds 1 to the counter
  );
}

const Display = (props) => {
  return (
    <div className='display'>
      {props.message}
    </div>
  );
}

function App() {
  const [ textNumber, setTextNumber ] = useState(0);
  const changeLogger = (incValue) => {
    setTextNumber(incValue)
  }
  const textOptions = [
    'Text for Tab A',
    'Text for Tab B',
    'Text for Tab C',
    'Text for Tab D'
  ]

  return (
    <div className="App container bg-light">
      <Button textKey={() => changeLogger(0)} incrementValue="A"/>
      <Button textKey={() => changeLogger(1)} incrementValue="B"/>
      <Button textKey={() => changeLogger(2)} incrementValue="C"/>
      <Button textKey={() => changeLogger(3)} incrementValue="D"/>
      <Display message={textOptions[textNumber]}/>
    </div>
  );
}

export default App;
