import React from "react";
import "./App.css";
import InputBox from "./components/Input/InputBox";
import { useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const addNoteHandler = note => {
    setAllNotes([...allNotes, note]);
  };

  console.log(allNotes);

  return (
    <div className="App">
      <InputBox addNote={addNoteHandler} />
    </div>
  );
}

export default App;
