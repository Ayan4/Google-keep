import React from "react";
import "./App.css";
import InputBox from "./components/Input/InputBox";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [allNotes, setAllNotes] = useState([]);

  const addNoteHandler = note => {
    setAllNotes([...allNotes, note]);
  };

  console.log(allNotes);

  return (
    <div className="container w-4/5 mx-auto border border-red-500 px-4">
      {/* <Header /> */}
      <InputBox addNote={addNoteHandler} />
    </div>
  );
}

export default App;
