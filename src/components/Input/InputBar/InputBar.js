function InputBar({ onClick }) {
  return (
    <div className="flex justify-center">
      <form
        className=" border border-red-500 rounded-xl mt-20 w-3/6 px-4"
        action=""
      >
        <input
          className="border border-red-500 w-full py-2 focus: outline-none"
          onClick={onClick}
          placeholder="take a note"
          type="text"
        />
      </form>
    </div>
  );
}

export default InputBar;
