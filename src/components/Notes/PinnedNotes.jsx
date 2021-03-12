import NoteCard from "./NoteCard";

function PinnedNotes({
  pinnedNotesArr,
  deleteHandler,
  pinHandler,
  setAllNotes
}) {
  return (
    <div /* className="border border-green-500" */>
      <h2 className="ml-3 mb-3 font-semibold text-xs text-gray-600 tracking-wider">
        PINNED
      </h2>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 mx-auto w-full">
        <NoteCard
          allNotesArr={pinnedNotesArr}
          pinHandler={pinHandler}
          setAllNotes={setAllNotes}
          deleteHandler={deleteHandler}
        />
      </ul>
    </div>
  );
}

export default PinnedNotes;
