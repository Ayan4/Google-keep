import "./NoteCard.css";
import ColorPalette from "../ColorPalette";
import { BiTrash } from "react-icons/bi";
import { AiOutlinePushpin } from "react-icons/ai";

function NoteCard({ allNotesArr, deleteHandler, pinHandler, setAllNotes }) {
  return (
    <>
      {allNotesArr.map(item => {
        return (
          <li
            key={item.id}
            className={`shadow-cus flex flex-col justify-between rounded-lg m-2 ${item.color} noteCard`}
          >
            <div className="p-3">
              <div className=" flex justify-between ">
                <p className="w-full font-semibold mb-2 break-all">
                  {item.title}
                </p>
                <AiOutlinePushpin
                  onClick={() => pinHandler(item.id)}
                  className="text-gray-500 w-6 h-6 hide cursor-pointer hover:text-gray-700"
                />
              </div>
              <p className="note break-all">{item.note}</p>
            </div>

            <div className="p-3 hide flex justify-between items-center">
              <ColorPalette
                noteId={item.id}
                allNotesArr={allNotesArr}
                setAllNotes={setAllNotes}
              />

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
    </>
  );
}

export default NoteCard;
