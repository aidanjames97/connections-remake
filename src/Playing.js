import './Playing.css';
import React, { useState } from 'react';

export default function Playing({ input, one, two, three, four }) {
  let count = 0; // used for keys
  const words = input.map(str => [str, false, count++]) // adding false and key to words array
  const [lives, setLives] = useState(4) // hook for amount of lives player has remaining
  const [selected, setSelected] = useState([Array(4)]) // hook for boxes used has selected
  const [numSelected, setNumSelected] = useState(0) // hook for how may boxes uses has selected

  // to change but working
  function lifeHandle() {
    setLives(lives - 1)
  }
  // checking if arrays match
  function checkArray(user, arr) {
    const sortedUser = user.slice().sort();
    const sortedArr = arr.slice().sort();
    // looping
    for (let i = 0; i < sortedUser.length; i++) {
      if (sortedUser[i] !== sortedArr[i]) {
        return false;
      }
    }
    return true; // arrays are the same
  }
  // on submit click
  function handleSubmit() {
    if(checkArray(selected, one)) {
      // one correct
      console.log("ONE TITLE")
    } else if (checkArray(selected, two)) {
      // two correct
      console.log("TWO TITLE")
    } else if (checkArray(selected, three)) {
      // three correct
      console.log("THREE TITLE")
    } else if (checkArray(selected, four)) {
      // four correct
      console.log("FOUR TITLE")
    } else {
      lifeHandle()
      console.log("not quite")
    }
  }
  // checking if submition is possible
  function possible() {
    if(numSelected === 4) {
      return 'yes'
    } else {
      return 'no'
    }
  }
  const p = possible() // called each update for button change
  // deselecting all selected connect boxes
  function handleDeselect() {
    setNumSelected(0)
    const t = Array(4)
    setSelected(t)

    console.log("-- deselected --")
  }
  // handling click of connect box
  function handleClick(value) {
    if(numSelected < 4) {
      // adding to selected array
      const t = selected
      t[numSelected] = value
      setSelected(t)

      // increment numSelected
      setNumSelected(numSelected+1)
      updateME()
    }
  }
  // to be deleted
  function updateME() {
    console.log(selected)
  }

  // NEED TO MAKE IT SO EACH RELOAD WILL NOT SHUFFLE ARRAY
  // const shuffleArray = (array) => {
  //   const shuffledArray = array.slice(); // Create a copy of the array
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  //   }
  //   return shuffledArray;
  // };

  // what is to be displayed  
  return (
    <div className="Playing">
      <div className='heading-bar'>
        <header>Connections</header>
      </div>

      <div className='game'>
        <GameArea words={words} handleClickGame={handleClick} />
      </div>

      <div className='footer'>
        <LivesLeft lives={lives}/>
        <div className='bottom-buttons'>
          <BottomButtons handleLifeLoss={lifeHandle} handleDeselect={handleDeselect} />
          <SubmitButton possible={p} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

// game area of app, returns 4 rows of 4 connect buttons
function GameArea({ words, handleClickGame }) {
  return (
    <div className='game-area'>
      {words.map((value, select ) => (
        <ConnectButton value={value[0]} handleClickConnect={handleClickGame} select={select} key={value[2]}/>
      ))}
    </div>
  )
}

// each individual "connection box"
function ConnectButton({ value, handleClickConnect, select}) {
  return (
    <button 
      className='connect-button'
      onClick={() => handleClickConnect(value)}
    >
      {value}
    </button>
  )
}

// returns lives remaining text amount of hearts according to lives prop
function LivesLeft({ lives }) {
  const loopFunc = []
  for(let i = 0; i < lives; i++) {
    loopFunc.push(i)
  }
  return (
    <div className='livesLeft'>
      <b>Lives Remaining:</b>
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
    <b className='dot'>&hearts;</b>
  )
}

// returns shuffle, deselect, and submit buttons
function BottomButtons({ handleLifeLoss, handleDeselect}) {
  return (
    <div className='shuffle-deselect'>
      <button>Shuffle</button>
      <button onClick={handleDeselect}>Deselect All</button>
    </div>
  )
}

// returns button depending on if it is possible for user to submit the selected boxes
// possible can be 'yes' for submittable, else will be deactive
function SubmitButton({ possible, handleSubmit }) {
  if(possible === 'yes') {
    return (
      <button onClick={handleSubmit} className='submit-active'>Submit</button>
    );
  } else {
    return (
      <button className='submit-inactive'>Submit</button>
    );
  }
}