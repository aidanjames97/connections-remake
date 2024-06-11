import { useState } from 'react';
import "./Editing.css"

export default function Editing() {
const [words, setWords] = useState([Array(16).fill(null)])
  const [inputText, setInput] = useState("")

  function handleClick(i) {
    const newWords = words.slice();
    newWords[i] = i
  }

  return (
    <div className="Editing">
      <div className='heading-bar'>
        <header>Connections</header>
      </div>

      <div className='input-area'>
        <input
          type="text" 
          placeholder="----"
        >
        </input>
        <b>{inputText}</b>
        <div className='game-area'>
          <ConnectButton value={words[0]} onConnectClick={() => handleClick(0)}/>
          <ConnectButton value={words[1]} onConnectClick={() => handleClick(1)}/>
          <ConnectButton value={words[2]} onConnectClick={() => handleClick(2)}/>
          <ConnectButton value={words[3]} onConnectClick={() => handleClick(3)}/>
          <ConnectButton value={words[4]} onConnectClick={() => handleClick(4)}/>
          <ConnectButton value={words[5]} onConnectClick={() => handleClick(5)}/>
          <ConnectButton value={words[6]} onConnectClick={() => handleClick(6)}/>
          <ConnectButton value={words[7]} onConnectClick={() => handleClick(7)}/>
          <ConnectButton value={words[8]} onConnectClick={() => handleClick(8)}/>
          <ConnectButton value={words[9]} onConnectClick={() => handleClick(9)}/>
          <ConnectButton value={words[10]} onConnectClick={() => handleClick(10)}/>
          <ConnectButton value={words[11]} onConnectClick={() => handleClick(11)}/>
          <ConnectButton value={words[12]} onConnectClick={() => handleClick(8)}/>
          <ConnectButton value={words[13]} onConnectClick={() => handleClick(9)}/>
          <ConnectButton value={words[14]} onConnectClick={() => handleClick(10)}/>
          <ConnectButton value={words[15]} onConnectClick={() => handleClick(11)}/>
        </div>
      </div>

      <div className='bottom-buttons'>
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