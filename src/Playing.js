import './Playing.css';
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

      <div className='lives'>
        <LivesLeft/>
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

function LivesLeft() {
    return (
      <div className='livesLeft'>
        <b>Lives Remaining:</b>
        <Heart/>
        <Heart/>
        <Heart/>
        <Heart/>
      </div>
    )
  }

function Heart() {
    return (
      <p className='dot'>&hearts;</p>
    )
  }

function BottomButtons() {
    return (
      <div>
        <button>Shuffle</button>
        <button>Deselect All</button>
        <button>Submit</button>
      </div>
    )
  }