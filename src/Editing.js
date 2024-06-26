import { useState } from 'react';
import "./Editing.css"

export default function Editing({ setWords, setOne, setTwo, setThree, setFour, toggleChange }) {
  // getting passed setter for state vars managed by app.js
  // for date display
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date()

  let words = ['one', 'two', 'three', 'four', 'apple', 'banana', 'grape', 'pear', 'shirt', 'pants', 'socks', 'underwear', 'CPU', 'GPU', 'RAM', 'Motherboard']


  function handleClick(i) {
    // todo
  }

  // logic when user clicks create (make connections)
  function handleCreate() {
    // todo

    // correct word configs
    setOne(['ONE', 'TWO', 'THREE', 'FOUR'])
    setTwo(['APPLE', 'BANANA', 'GRAPE', 'PEAR'])
    setThree(['SHIRT', 'PANTS', 'SOCKS', 'UNDERWEAR'])
    setFour(['CPU', 'GPU', 'RAM', 'MOTHERBOARD'])

    // calling for final shuffle (will change state)
    handleShuffle()
    // toggling page
    toggleChange()
  }

  // shuffle array for delivering words to playing
  function handleShuffle() {
    let newArray = words.slice(); // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    setWords(newArray);
  } 

  // displaying
  return (
    <div className="Editing">
      <div className='heading-bar'>
        <header>Connections</header>
        <h2>{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</h2>
      </div>

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
      <CreateButton handleCreate={handleCreate}/>
    </div>
  );
}

// creates game (logic and page switch)
function CreateButton( { handleCreate } ) {
  return (
    <div className='create-button'>
      <button onClick={handleCreate}>Create</button>
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