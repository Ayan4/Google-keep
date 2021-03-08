import { useForm } from "react-hook-form";

function MainInput({ addTask }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    addTask(data);
  };

  return (
    <div className="flex justify-center">
      <form
        className=" main-form border border-red-500 rounded-lg mt-20 w-3/6 px-4"
        action=""
      >
        <input
          ref={register({ required: true })}
          placeholder="Title"
          type="text"
          name="title"
          className="w-full py-1 w-90% text-base font-sans font-semibold focus: outline-none mb-1"
        />
        <input
          ref={register({ required: true })}
          placeholder="Take a note"
          type="text"
          name="note"
          className="w-full py-1 text-sm font-sans font-medium focus: outline-none mb-5"
          autoFocus
        />
        <input
          className="hidden"
          onClick={handleSubmit(onSubmit)}
          type="submit"
        />

        <div className="flex justify-between mb-1">
          <div className="flex items-center">
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
            <div className="border border-gray-400 w-7 h-7 bg-red-400 rounded-full hover: cursor-pointer"></div>
          </div>

          <button className="px-7 py-2 rounded-sm transition-all font-sans hover:bg-gray-50 focus:outline-none active: none">
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainInput;
