import React from "react";
import "./App.css";
import InputBox from "./components/Input/InputBox";
// import Header from "./components/Header";
import AllNotes from "./components/Notes/AllNotes";
import { useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const addNoteHandler = note => {
    setAllNotes([...allNotes, note]);
  };

  console.log(allNotes);

  return (
    <div className="border border-red-500 container w-4/5 mx-auto px-4">
      {/* <Header /> */}
      <InputBox addNote={addNoteHandler} />
      <AllNotes allNotesArr={allNotes} />
    </div>
  );
}

export default App;
