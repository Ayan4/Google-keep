import React from "react";
import "./App.css";
import InputBox from "./components/Input/InputBox";
// import Header from "./components/Header";
import AllNotes from "./components/Notes/AllNotes";
import { useState } from "react";
import PinnedNotes from "./components/Notes/PinnedNotes";

function App() {
  const [allNotes, setAllNotes] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);

  const addNoteHandler = note => {
    setAllNotes([...allNotes, note]);
  };

  const deleteNoteHandler = e => {
    const deleteNoteId = e.target.id;
    const updatedNotesArr = allNotes.filter(item => item.id !== deleteNoteId);
    setAllNotes(updatedNotesArr);
  };

  const pinHandler = noteId => {
    const pinnedNote = allNotes.map(item => {
      if (item.id === noteId) {
        item.pinned = true;
      }
      return item;
    });

    const pinnedNotesArr = pinnedNote.filter(item => item.pinned === true);
    const updatedAllNotesArr = pinnedNote.filter(item => item.pinned !== true);

    const updatedPinnedArr = [];
    pinnedNotesArr.map(item => updatedPinnedArr.push(item));
    console.log(updatedPinnedArr);

    // setPinnedNotes(pinnedNotesArr);
    // console.log(pinnedNotesArr);
    setAllNotes(updatedAllNotesArr);
    // console.log(updatedAllNotesArr);
  };

  // console.log(allNotes);

  return (
    <div className="container mx-auto app">
      {/* <Header /> */}
      <InputBox addNote={addNoteHandler} />
      {/* {pinnedNotes.length > 0 ? (
        <PinnedNotes
          pinHandler={pinHandler}
          deleteHandler={deleteNoteHandler}
          pinnedNotesArr={pinnedNotes}
          setAllNotes={setAllNotes}
        />
      ) : (
        ""
      )} */}
      {allNotes.length > 0 ? (
        <AllNotes
          pinHandler={pinHandler}
          deleteHandler={deleteNoteHandler}
          allNotesArr={allNotes}
          setAllNotes={setAllNotes}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
