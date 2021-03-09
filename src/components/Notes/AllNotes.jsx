function AllNotes({ allNotesArr }) {
  return (
    <ul className="border border-green-600">
      {allNotesArr.map(item => {
        return (
          <li className="border border-gray-400 inline-block rounded-lg p-2 m-2 w-60">
            <div className="">
              <p className="font-semibold mb-2">{item.title}</p>
              <p className="border border-red-400">{item.note}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default AllNotes;
