import { useState } from 'react';
import Playing from "./Playing.js"
import Editing from "./Editing.js"
import "./App.css"

export default function App() {
  const [editMode, setEditMode] = useState(false)

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
        <Playing />
        <EditButton value={'Edit'} toggleChange={handleToggle}/>
      </>
    );
  }
}

function EditButton({ value, toggleChange }) {
  return (
    <button className='edit-toggle' onClick={toggleChange}>{value}</button>
  );
}