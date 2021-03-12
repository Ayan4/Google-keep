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
    const updatedPinnedArr = pinnedNotes.filter(
      item => item.id !== deleteNoteId
    );
    setAllNotes(updatedNotesArr);
    setPinnedNotes(updatedPinnedArr);
  };

  // Pinning the Note
  const pinHandler = noteId => {
    // for all notes
    const updatedAllNotesArr = allNotes.map(item => {
      if (item.id === noteId) {
        item.pinned = true;
      }
      return item;
    });

    updatedAllNotesArr.map(
      item => item.pinned && setPinnedNotes([...pinnedNotes, item])
    );

    const allNotesLessPinned = updatedAllNotesArr.filter(
      item => item.pinned !== true
    );

    setAllNotes(allNotesLessPinned);

    // for pinned notes
    // const updatedPinnedArr = pinnedNotes.map(item => {
    //   if (item.id === noteId) {
    //     item.pinned = false;
    //   }
    //   return item;
    // });

    // updatedPinnedArr.map(item => console.log(item));
  };

  return (
    <div className="container mx-auto app">
      {/* <Header /> */}
      <InputBox addNote={addNoteHandler} />
      {pinnedNotes.length > 0 ? (
        <PinnedNotes
          pinHandler={pinHandler}
          deleteHandler={deleteNoteHandler}
          pinnedNotesArr={pinnedNotes}
          setAllNotes={setPinnedNotes}
        />
      ) : (
        ""
      )}
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
