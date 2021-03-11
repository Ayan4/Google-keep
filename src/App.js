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

  const deleteNoteHandler = e => {
    const deleteNoteId = e.target.id;
    const updatedNotesArr = allNotes.filter(item => item.id !== deleteNoteId);
    setAllNotes(updatedNotesArr);
  };

  const pinHandler = () => {
    console.log("pinned");
  };

  // console.log(allNotes);

  return (
    <div className="container mx-auto app">
      {/* <Header /> */}
      <InputBox addNote={addNoteHandler} />
      <AllNotes
        pinHandler={pinHandler}
        deleteHandler={deleteNoteHandler}
        allNotesArr={allNotes}
      />
    </div>
  );
}

export default App;
