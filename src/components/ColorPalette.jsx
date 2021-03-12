function ColorPalette({ allNotesArr, noteId, setAllNotes, setColor }) {
  const colors = [
    "bg-white",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-pink-100"
  ];

  const changeColorHandler = color => {
    if (allNotesArr) {
      const updatedNoteArr = allNotesArr.map(item => {
        if (item.id === noteId) {
          item.color = color;
        }
        return item;
      });
      setAllNotes(updatedNoteArr);
    } else {
      setColor(color);
    }
  };

  return (
    <div className="flex items-center">
      {colors.map(item => {
        return (
          <div
            onClick={() => changeColorHandler(item)}
            key={item}
            className={`border border-gray-400 w-7 h-7 rounded-full hover: cursor-pointer mr-2 ${item}`}
          ></div>
        );
      })}
    </div>
  );
}

export default ColorPalette;
