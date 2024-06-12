import './Playing.css';
import React, { useState } from 'react';

export default function Playing({ input, one, two, three, four }) {
  let count = 0; // used for keys
  const [words, setWords] = useState(input.map(str => [str.toUpperCase(), false, count++, 'color'])) // adding false and key to words array
  const [lives, setLives] = useState(4) // hook for amount of lives player has remaining
  const [selected, setSelected] = useState([Array(4).fill(null)]) // hook for boxes used has selected
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
    return true; 
  }
  // on submit click
  function handleSubmit() {
    if(checkArray(selected, one)) {
      // one correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(one[i])
        // setting color
        const tmp = words
        tmp[index][3] = 'green';
        setWords(tmp)
      }
      handleDeselect() 
      return;
    }
    if(checkArray(selected, two)) {
      // two correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(two[i])
        // setting color
        const tmp = words
        tmp[index][3] = 'yellow';
        setWords(tmp)
      }
      handleDeselect()
      return;
    }
    if(checkArray(selected, three)) {
      // three correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(three[i])
        // setting color
        const tmp = words
        tmp[index][3] = 'blue';
        setWords(tmp)
      }
      handleDeselect()
      return;
    }
    if(checkArray(selected, four)) {
      // four correct, change color value and deselect
      for(let i = 0;i < 4; i++) {
        // getting index
        const subWords = words.map(subArr => subArr[0])
        const index = subWords.indexOf(two[i])
        // setting color
        const tmp = words
        tmp[index][3] = 'purple';
        setWords(tmp)
      }
      handleDeselect()
      return;
    }
    // selected words do not match, take life and notify
    lifeHandle()
    console.log("not quite")
  }
  // checking if submition is possible
  function possible() {
    if(numSelected === 4) {
      return 'yes'
    } else {
      return 'no'
    }
  }
  // called each update for button change
  const p = possible()
  // deselecting all selected connect boxes
  function handleDeselect() {
    const len = selected.length // getting length of 

    for(let i = 0; i < len; i++) {
      const indexArry = words.map(subArr => subArr[0])
      const index = indexArry.indexOf(selected[i])
      const tmp = words
      tmp[index][1] = false
      setSelected(tmp)
    }

    setNumSelected(0) // set numSelected to 0
    const t = Array(4)
    setSelected(t) // remove all elems from selected array
  }
  // handling click of connect box
  function handleClick(value, keyProp) {
    // changing words select element
    const tmp = words
    tmp[keyProp][1] = !tmp[keyProp][1]
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

  // NEED TO MAKE IT SO EACH RELOAD WILL NOT SHUFFLE ARRAY
  function handleShuffle() {
    const shuffleArray = (array) => {
      const shuffledArray = array.slice(); // Create a copy of the array
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };
    words = shuffleArray.map(str => [str, false, count++])
  }

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
          <BottomButtons handleShuffle={handleShuffle} handleLifeLoss={lifeHandle} handleDeselect={handleDeselect} />
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
      {words.map((value) => (
        <ConnectButton value={value[0]} handleClickConnect={handleClickGame} select={value[1]} key={value[2]} keyProp={value[2]} color={value[3]} />
      ))}
    </div>
  )
}

// each individual "connection box"
function ConnectButton({ value, handleClickConnect, select, keyProp, color}) {
  var toAdd = ''
  if(color != 'color') {
    toAdd = '-' + color
  }
  if(select) {
    const classString = 'connect-button-selected' + toAdd
    return (
      <button
        className={classString}
        onClick={() => handleClickConnect(value, keyProp)}
      >
        {value}
      </button>
    );
  } else {
    const classString = 'connect-button' + toAdd
    return (
      <button
        className={classString}
        onClick={() => handleClickConnect(value, keyProp)}
      >
        {value}
      </button>
    );
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
function BottomButtons({ handleShuffle, handleLifeLoss, handleDeselect}) {
  return (
    <div className='shuffle-deselect'>
      <button onClick={handleShuffle}>Shuffle</button>
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