import './Playing.css';
import React, { useState } from 'react';

export default function Playing() {
  const one = [(1, 'one'), (1, 'two'), (1, 'three'), (1, 'four')]
  const two = [(2, 'apple'), (2, 'banana'), (2, 'grape'), (2, 'pear')]
  const three = [(3, 'shirt'), (3, 'pants'), (3, 'socks'), (3, 'underwear')]
  const four = [(4, 'CPU'), (4, 'GPU'), (4, 'RAM'), (4, 'Motherboard')]

  return (
    <div className="Playing">
      <div className='heading-bar'>
        <header>Connections</header>
      </div>

      <div className='game'>
        <GameArea first={one} second={two} third={three} fourth={four} />
      </div>

      <div className='footer'>
        <LivesLeft/>
        <BottomButtons possible={'yes'}/>
      </div>
    </div>
  );
}

// game area of app
function GameArea({ first, second, third, fourth }) {
  return (
    <div className='game-area'>
      <div className='game-row'>
        {first.map((value) => (
          <ConnectButton value={value}/>
        ))}
      </div>
      <div className='game-row'>
        {second.map((value) => (
          <ConnectButton value={value}/>
        ))}
      </div>
      <div className='game-row'>
        {third.map((value) => (
          <ConnectButton value={value}/>
        ))}
      </div>
      <div className='game-row'>
        {fourth.map((value) => (
          <ConnectButton value={value}/>
        ))}
      </div>
    </div>
  )
}


// each individual "connection box"
function ConnectButton({ value }) {
    return (
      <button 
        className='connectionBox'
      >
        {value}
      </button>
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
      <b className='dot'>&hearts;</b>
    )
  }

function BottomButtons({ possible }) {
  return (
    <div className='Bottom-button'>
      <button>Shuffle</button>
      <button>Deselect All</button>
      <button className={possible}>Submit</button>
    </div>
  )
}