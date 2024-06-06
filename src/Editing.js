import { useState } from 'react';

export default function Editing() {
const [words, setWords] = useState([Array(12).fill(null)])
  const [inputText, setInput] = useState("")

  function handleClick(i) {
    const newWords = words.slice();
    newWords[i] = i
  }

  return (
    <div className="App">
      <div className='headingBar'>
        <header>Connections</header>
      </div>

      <div className='input-area'>
        <input
          type="text" 
          placeholder="----"
        >
        </input>
        <b>{inputText}</b>
        <div className='input-row'>
          <ConnectButton key={0} value={words[0]} onConnectClick={() => handleClick(0)}/>
          <ConnectButton key={1} value={words[1]} onConnectClick={() => handleClick(1)}/>
          <ConnectButton key={2} value={words[2]} onConnectClick={() => handleClick(2)}/>
          <ConnectButton key={3} value={words[3]} onConnectClick={() => handleClick(3)}/>
        </div>
        <div className='input-row'>
          <ConnectButton key={4} value={words[4]} onConnectClick={() => handleClick(4)}/>
          <ConnectButton key={5} value={words[5]} onConnectClick={() => handleClick(5)}/>
          <ConnectButton key={6} value={words[6]} onConnectClick={() => handleClick(6)}/>
          <ConnectButton key={7} value={words[7]} onConnectClick={() => handleClick(7)}/>
        </div>
        <div className='input-row'>
          <ConnectButton key={8} value={words[8]} onConnectClick={() => handleClick(8)}/>
          <ConnectButton key={9} value={words[9]} onConnectClick={() => handleClick(9)}/>
          <ConnectButton key={10} value={words[10]} onConnectClick={() => handleClick(10)}/>
          <ConnectButton key={11} value={words[11]} onConnectClick={() => handleClick(11)}/>
        </div>
      </div>

      <div className='footer'>
        <button>Create</button>
      </div>
    </div>
  );
}

function ConnectButton({ key, value, onConnectClick }) {
  return (
    <button 
      className='connect-button'
      onClick={onConnectClick}
    >
      {value}
    </button>
  );
}