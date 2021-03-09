function InputBar({ onClick }) {
  return (
    <div className="flex justify-center">
      <form
        className="border shadow-cus rounded-lg mt-20 w-3/6 px-4 py-1"
        action=""
      >
        <input
          className=" w-full py-2 text-md font-sans font-semibold focus:outline-none"
          onClick={onClick}
          placeholder="Take a Note..."
          type="text"
        />
      </form>
    </div>
  );
}

export default InputBar;
