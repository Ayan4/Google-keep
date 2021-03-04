import { useState } from "react";
import InputBar from "./InputBar/InputBar";
import MainInput from "./MainInput/MainInput";

function InputBox({ addNote }) {
  const [showInput, setShowInput] = useState(false);

  const mainInputHandler = e => {
    setShowInput(true);
  };

  const addTaskHandler = note => {
    setShowInput(false);
    addNote(note);
  };

  return (
    <div>
      {!showInput ? <InputBar onClick={mainInputHandler} /> : ""}
      {showInput ? <MainInput addTask={addTaskHandler} /> : ""}
    </div>
  );
}

export default InputBox;
