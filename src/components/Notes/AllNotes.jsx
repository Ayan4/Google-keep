import "./AllNotes.css";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePushpin } from "react-icons/ai";

function AllNotes({ allNotesArr, deleteHandler, pinHandler }) {
  return (
    <ul className="border border-green-600 grid lg:grid-cols-4 md:grid-cols-3 mx-auto w-full">
      {allNotesArr.map(item => {
        return (
          <li
            key={item.id}
            className="border border-gray-400 flex flex-col justify-between rounded-lg m-2 noteCard"
          >
            <div className="p-2">
              <div className=" flex justify-between ">
                <p className="w-full font-semibold mb-2 break-all">
                  {item.title}
                </p>
                <AiOutlinePushpin
                  onClick={pinHandler}
                  className="text-gray-500 w-6 h-6 hide cursor-pointer hover:text-gray-700"
                />
              </div>
              <p className="note break-all">{item.note}</p>
            </div>

            <div className="p-2 hide flex justify-between items-center">
              <div className=" inline-block mr-2 flex items-center">
                <div className="border border-gray-400 w-6 h-6 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
                <div className="border border-gray-400 w-6 h-6 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
                <div className="border border-gray-400 w-6 h-6 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
                <div className="border border-gray-400 w-6 h-6 bg-red-400 rounded-full hover: cursor-pointer mr-2"></div>
                <div className="border border-gray-400 w-6 h-6 bg-red-400 rounded-full hover: cursor-pointer"></div>
              </div>

              <div
                id={item.id}
                onClick={deleteHandler}
                className="inline-block cursor-pointer"
                data-tooltip="delete"
              >
                <BiTrash className="inline-block text-gray-500 w-6 h-6 tooltip pointer-events-none" />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default AllNotes;
