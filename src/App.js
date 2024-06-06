import './App.css';
import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className='headingBar'>
        <header>Connections</header>
      </div>

      <div className='game'>
        <GameArea/>
      </div>
      <div className='footer'>
        <button>Create</button>
      </div>
    </div>
  );
}

export default App;
// game area of app
function GameArea() {
  return (
    <div>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
      <ButtonRow/>
    </div>
  )
}
// row of connection boxes
function ButtonRow() {
  return (
    <div>
      <ConnectButton/>
      <ConnectButton/>
      <ConnectButton/>
      <ConnectButton/>
    </div>
  )
}

const Textbox = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
      setInputValue(event.target.value);
  };
  return (
      <div className='textboxContain'>
          <input 
              type="text" 
              value={inputValue} 
              onChange={handleChange} 
              placeholder="----" 
          />
      </div>
  );
};

// each individual "connection box"
function ConnectButton() {
  return (
    <button className='connectionBox'>{<Textbox/>}</button>
  )
}