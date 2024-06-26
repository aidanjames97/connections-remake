import { useState, useEffect } from 'react';
import Playing from "./Playing.js"
import Editing from "./Editing.js"
import "./App.css"

export default function App() {
  const [editMode, setEditMode] = useState(false)

  // temp arrays for value testing
  const words = ['one', 'two', 'three', 'four', 'apple', 'banana', 'grape', 'pear', 'shirt', 'pants', 'socks', 'underwear', 'CPU', 'GPU', 'RAM', 'Motherboard']

  // correct word configs
  const one = ['ONE', 'TWO', 'THREE', 'FOUR'];
  const two = ['APPLE', 'BANANA', 'GRAPE', 'PEAR'];
  const three = ['SHIRT', 'PANTS', 'SOCKS', 'UNDERWEAR'];
  const four = ['CPU', 'GPU', 'RAM', 'MOTHERBOARD'];

  function handleToggle() {
    setEditMode(!editMode)
  }

  if(editMode) {
    return (
      <>
        <Editing />
        <EditButton value={'Play'} toggleChange={handleToggle}/>
      </>
    );
  } else {
    return (
      <>
        <Playing input={words} one={one} two={two} three={three} four={four} initial={true} />
        <EditButton value={'Edit'} toggleChange={handleToggle}/>
      </>
    );
  }
}

// TO BE DELETED! AND REPLACE W SUMBIT BUTTON
function EditButton({ value, toggleChange }) {
  return (
    <button className='edit-toggle' onClick={toggleChange}>{value}</button>
  );
}