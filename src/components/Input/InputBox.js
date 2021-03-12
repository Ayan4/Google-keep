import { useState } from "react";
import InputBar from "./InputBar/InputBar";
import InputModal from "./InputModal/InputModal";

function InputBox({ addNote }) {
  const [showInput, setShowInput] = useState(false);

  const mainInputHandler = e => {
    setShowInput(true);
  };

  const addTaskHandler = note => {
    setShowInput(false);
    addNote(note);
  };

  const hideInputModal = () => {
    setShowInput(false);
  };

  return (
    <div className="mb-10">
      {!showInput ? (
        <InputBar onClick={mainInputHandler} />
      ) : (
        <InputModal hideInputModal={hideInputModal} addTask={addTaskHandler} />
      )}
    </div>
  );
}

export default InputBox;
