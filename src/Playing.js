import './Playing.css';
import React, { useState } from 'react';

export default function Playing({ input, one, two, three, four }) {
  const [words, setWords] = useState(input.map(str => [str.toUpperCase(), false, 'color'])) // adding false and key to words array
  const [lives, setLives] = useState(4) // hook for amount of lives player has remaining
  const [selected, setSelected] = useState([]) // hook for boxes used has selected
  const [numSelected, setNumSelected] = useState(0) // hook for how may boxes uses has selected
  const [completed, setCompleted] = useState(Array)
  const [display, setDisplay] = useState(words)

  // to change but working
  function lifeHandle() {
    setLives(lives - 1)
  }
  // checking if arrays match (helper function)
  function checkArray(user, arr) {
    const sortedUser = user.slice().sort();
    const sortedArr = arr.slice().sort();
    // looping
    for (let i = 0; i < sortedUser.length; i++) {
      if (sortedUser[i] !== sortedArr[i]) {
        return false;
      }
    }
    return true; 
  }
  // called to organize arrays and update display
  function newUpdate() {
    let tmp = [] // empty array
    for(let i=0; i < completed.length; i++) {
      tmp.push(completed[i])
    } // completed array added to display
    for(let i=0; i < words.length; i++) {
      tmp.push(words[i])
    } // rest of words added
    setDisplay(tmp)
  }
  // checking if play has completed connections
  function checkWin() {
    if (words.length === 0) {
      // if words empty, user has won
      alert("YOU WON")
    }
  }
  // on submit click, checks for correct and win
  function handleSubmit() {
    let tmpWords = words
    let tmpComp = completed

    if(checkArray(selected, one)) {
      // one correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(one[i])

        let tmp = words[index]; // pushing word to tmp array
        tmpWords.splice(index, 1) // removes elem at index from words
        setWords(tmpWords) // setting words
        tmp[1] = false // deselecting
        tmp[2] = 'green'; // setting color
        tmpComp.push(tmp) // push new elem to completed tmp array
      }
      setCompleted(tmpComp)
      newUpdate()
      handleDeselect()
      checkWin()
      return;
    }
    if(checkArray(selected, two)) {
      // two correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(two[i])

        let tmp = words[index]; // pushing word to tmp array
        tmpWords.splice(index, 1) // removes elem at index from words
        setWords(tmpWords) // setting words
        tmp[1] = false // deselecting
        tmp[2] = 'yellow'; // setting color
        tmpComp.push(tmp) // push new elem to completed tmp array
      }
      setCompleted(tmpComp)
      newUpdate()
      handleDeselect()
      checkWin()
      return;
    }
    if(checkArray(selected, three)) {
      // three correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(three[i])

        let tmp = words[index]; // pushing word to tmp array
        tmpWords.splice(index, 1) // removes elem at index from words
        setWords(tmpWords) // setting words
        tmp[1] = false // deselecting
        tmp[2] = 'blue'; // setting color
        tmpComp.push(tmp) // push new elem to completed tmp array
      }
      setCompleted(tmpComp)
      newUpdate()
      handleDeselect()
      checkWin()
      return;
    }
    if(checkArray(selected, four)) {
      // four correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(four[i])

        let tmp = words[index]; // pushing word to tmp array
        tmpWords.splice(index, 1) // removes elem at index from words
        setWords(tmpWords) // setting words
        tmp[1] = false // deselecting
        tmp[2] = 'purple'; // setting color
        tmpComp.push(tmp) // push new elem to completed tmp array
      }
      setCompleted(tmpComp)
      newUpdate()
      handleDeselect()
      checkWin()
      return;
    }
    // selected words do not match, take life and notify
    lifeHandle()
    handleDeselect()
    alert("Not Quite")
  }
  // checking if submition is possible
  function possible() {
    if(numSelected === 4) { return true }
    return false
  }
  // called each update for button change
  const p = possible();
  // checking if deselect is possible
  function deslPossible() {
    if(selected.length > 0) { return true }
    return false
  }
  const d = deslPossible();
  // deselecting all selected connect boxes
  function handleDeselect() {
    const len = selected.length // getting length of selected boxes array
    if(len !== 0) {
      for(let i = 0; i < len; i++) {
        const indexArry = words.map(subArr => subArr[0]) // change to words only
        const index = indexArry.indexOf(selected[i]) // try and find index
        // checking if words exist in words array
        if(index !== -1) {
          const tmp = words
          tmp[index][1] = false
          setSelected(tmp)
        }
      }
      // words are now gone from words array
      setNumSelected(0) // set numSelected to 0
      const t = []
      setSelected(t) // remove all elems from selected array
    }
  }
  // handling click of connect box
  function handleClick(value) {
    // changing words select element
    const tmp = words
    const indexArry = words.map(subArr => subArr[0])
    const indexFind = indexArry.indexOf(value)
    tmp[indexFind][1] = !tmp[indexFind][1]
    setWords(tmp)
    // used if box already selected (can always deselect)
    const index = selected.indexOf(value) // index in selected
    if(index >= 0) {
      // already selected
      const t = selected
      t.splice(index, 1)
      setSelected(t)
      setNumSelected(numSelected-1)
      return;
    }

    // check if less than 4 are selected
    if(numSelected < 4) {
      // not selected, proceed
      // adding to selected array
      const t = selected
      t[numSelected] = value
      setSelected(t)

      // increment numSelected
      setNumSelected(numSelected+1)
      return;
    }
  }
  // shuffle array only at start or when user requests
  function handleShuffle() {
    let newArray = words.slice(); // Create a copy of the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    setWords(newArray);
    newUpdate() // updating display
  } 
  
  // ABOVE: helper, handler, logic functions
  // BELOW: component functions

  // displaying
  return (
    <div className="Playing">
      <div className='heading-bar'>
        <header>Connections</header>
      </div>

      <div className='game'>
        <GameArea display={display} handleClickGame={handleClick} />
      </div>

      <div className='footer'>
        <LivesLeft lives={lives}/>
        <div className='bottom-buttons'>
          <ShuffleButton handleShuffle={handleShuffle}/>
          <DeslButton deslPossible={d} handleDeselect={handleDeselect}/>
          <SubmitButton possible={p} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

// game area of app, returns 4 rows of 4 connect buttons
function GameArea({ display, handleClickGame }) {
  return (
    <div className='game-area'>
      {display.map((value, index) => (
        <ConnectButton key={index} value={value[0]} handleClickConnect={handleClickGame} select={value[1]} color={value[2]} />
      ))}
    </div>
  )
}

// each individual "connection box"
function ConnectButton({ value, handleClickConnect, select, color}) {
  let toAdd = '' // init empty
  // check if we have specified a color
  if(color !== 'color') {
    toAdd = '-' + color
  }
  // check if connect box is selected
  if(select) {
    return (
      <button
        className='connect-button-selected'
        onClick={() => handleClickConnect(value)}
      >
        {value}
      </button>
    );
  } else {
    // not selected
    const classString = 'connect-button' + toAdd
    if (toAdd === '') {
      // no onClick option as here box is already correct
      return (
        <button
          className={classString}
          onClick={() => handleClickConnect(value)}
        >
          {value}
        </button>
      );
    } else {
      return (
        <button
          className={classString}
        >
          {value}
        </button>
      );
    }
  }
}

// returns lives remaining text amount of hearts according to lives prop
function LivesLeft({ lives }) {
  const loopFunc = []
  for(let i = 0; i < lives; i++) {
    loopFunc.push(i)
  }
  return (
    <div className='livesLeft'>
      <b>Mistakes remaining:</b>
      {/* looping through lives, _ because we dont care about index */}
      {loopFunc.map((_, index) => (
        <Heart key={index}/>
      ))}
    </div>
  )
}

// returns HTML heart as body tag
function Heart() {
  return (
    <b className='heart'>&hearts;</b>
  )
}

// returns shuffle buttons
function ShuffleButton({ handleShuffle }) {
  return (
    <div className='shuffle'>
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  )
}

// returns button depending on if user can deselect
// deslPossible can be 'yes' for submittable, else will be deactive
function DeslButton({ deslPossible, handleDeselect }) {
  if(deslPossible) {
    return (
      <button className='deselect-active' onClick={handleDeselect}>Deselect All</button>
    );
  } else {
    return (
      <button className='deselect-inactive' >Deselect All</button>
    );
  }
}

// returns button depending on if it is possible for user to submit the selected boxes
// possible can be 'yes' for submittable, else will be deactive
function SubmitButton({ possible, handleSubmit }) {
  if(possible) {
    return (
      <button onClick={handleSubmit} className='submit-active'>Submit</button>
    );
  } else {
    return (
      <button className='submit-inactive'>Submit</button>
    );
  }
}