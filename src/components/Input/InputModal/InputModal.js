import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function InputModal({ addTask, hideInputModal }) {
  const { register, handleSubmit } = useForm();
  const node = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = e => {
    if (node.current.contains(e.target)) {
    } else {
      hideInputModal();
    }
  };

  const onSubmit = data => {
    const updatedData = data;
    updatedData.id = uuidv4();
    addTask(updatedData);
  };

  return (
    <div className="flex justify-center">
      <form
        className="border main-form shadow-cus rounded-lg mt-20 w-3/6 px-4 py-1"
        action=""
        ref={node}
      >
        <input
          ref={register({ required: true })}
          placeholder="Title"
          type="text"
          name="title"
          className=" w-full py-1 text-base font-sans font-semibold focus: outline-none mb-1"
        />
        <input
          ref={register({ required: true })}
          placeholder="Take a note"
          type="text"
          name="note"
          className=" w-full py-1 text-sm font-sans font-medium focus: outline-none mb-5"
          autoFocus
        />

        <div className="flex justify-between mb-1">
          <div className="flex items-center">
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer"></div>
          </div>

          <input
            className="px-7 py-1 rounded-sm transition-all bg-green-500 text-white font-sans hover:bg-green-400 cursor-pointer focus:outline-none"
            onClick={handleSubmit(onSubmit)}
            type="submit"
            value="Add"
          />
        </div>
      </form>
    </div>
  );
}

export default InputModal;
