function InputBar({ onClick }) {
  return (
    <div className="flex justify-center">
      <form
        className="shadow-cus rounded-lg mt-20 w-3/6 px-4 py-1"
        action=""
        onClick={onClick}
      >
        <input
          className=" w-full py-2 text-md font-sans font-semibold focus:outline-none"
          placeholder="Take a Note..."
          type="text"
        />
      </form>
    </div>
  );
}

export default InputBar;
