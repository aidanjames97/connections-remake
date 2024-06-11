import { useState } from 'react';
import Playing from "./Playing.js"
import Editing from "./Editing.js"
import "./App.css"

export default function App() {
  const [editMode, setEditMode] = useState(false)

  // temp arrays for value testing
  const words = ['one', 'two', 'three', 'four', 'apple', 'banana', 'grape', 'pear', 'shirt', 'pants', 'socks', 'underwear', 'CPU', 'GPU', 'RAM', 'Motherboard']

  // correct word configs
  const one = ['one', 'two', 'three', 'four'];
  const two = ['apple', 'banana', 'grape', 'pear'];
  const three = ['shirt', 'pants', 'socks', 'underwear'];
  const four = ['CPU', 'GPU', 'RAM', 'Motherboard'];

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
        <Playing input={words} one={one} two={two} three={three} four={four} />
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