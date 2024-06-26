import { useState, useEffect } from 'react';
import Playing from "./Playing.js"
import Editing from "./Editing.js"
import "./App.css"

export default function App() {
  // state vars being init, written by Editing and read by Playing
  const [editMode, setEditMode] = useState(true)
  const [words, setWords] = useState()
  const [one, setOne] = useState()
  const [two, setTwo] = useState()
  const [three, setThree] = useState()
  const [four, setFour] = useState()


  function handleToggle() {
    setEditMode(!editMode)
  }

  if(editMode) {
    return (
      <>
        <Editing setWords={setWords} setOne={setOne} setTwo={setTwo} setThree={setThree} setFour={setFour} toggleChange={handleToggle} />
      </>
    );
  } else {
    return (
      <>
        <Playing input={words} one={one} two={two} three={three} four={four} />
      </>
    );
  }
}