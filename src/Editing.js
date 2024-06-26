import { useState } from 'react';
import "./Editing.css"

export default function Editing({ setWords, setOne, setTwo, setThree, setFour, toggleChange }) {
  // getting passed setter for state vars managed by app.js
  // for date display
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const date = new Date()

  // final array to be delivered
  const [out, setOut] = useState()
  // four categories
  const [first, setFirst] = useState()
  const [second, setSecond] = useState()
  const [third, setThird] = useState()
  const [fourth, setFourth] = useState()

  // logic when user clicks create (make connections)
  function handleCreate() {
    // regex check for digit or space
    if(/[\d]/.test(first)) {
      return;
    }
    if(/[\d]/.test(second)) {
      return;
    }
    if(/[\d]/.test(third)){
      return;
    }
    if(/[\d]/.test(fourth)) {
      return;
    }
    // adding strings and splitting into array (will handle multiple spaces if needed)
    if(first.split(/\s+/).length > 4) {
      return;
    } else {
      setOne(first.split(/\s+/))
    }
    if(second.split(/\s+/).length > 4) {
      return;
    } else {
      setTwo(second.split(/\s+/))
    } 
    if(third.split(/\s+/).length > 4) {
      return;
    } else {
      setThree(third.split(/\s+/))
    }
    if(fourth.split(/\s+/).length > 4) {
      return;
    } else {
      setFour(fourth.split(/\s+/))
    }
    const tmp = (first + ' ' + second + ' ' + third + ' ' + fourth).split(/\s+/)
    if(tmp.length > 16) {
      return; // too many words
    }
    // setting out array
    setOut(tmp)
    // calling for final shuffle (will change state of words aswell)
    handleShuffle()
    // toggling page
    toggleChange()
  }

  // shuffle array for delivering words to playing
  function handleShuffle() {
    let newArray = out.slice(); // Create a copy of the array
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

      <div className='game-area-edit'>
        <div className='connect-row'>
          <input 
            placeholder='Entre 1st row (space separated) of 4 words'
            onChange={(e) => setFirst(e.target.value)}
          />
        </div>
        <div className='connect-row'>
          <input 
            placeholder='Entre 2nd row (space separated) of 4 words'
            onChange={(e) => setSecond(e.target.value)}
          />
        </div>
        <div className='connect-row'>
          <input 
            placeholder='Entre 3rd row (space separated) of 4 words'
            onChange={(e) => setThird(e.target.value)}
          />
        </div>
        <div className='connect-row'>
          <input 
            placeholder='Entre 4th row (space separated) of 4 words'
            onChange={(e) => setFourth(e.target.value)}
          />
        </div>
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