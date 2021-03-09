function Header() {
  return (
    <div className="border border-red-500 py-8 flex flex-col lg:flex-row items-center justify-center">
      <a
        href="https://tailwindcss.com/docs/text-color"
        className="border border-green-500"
      >
        NoteDown
      </a>
      <input
        className="border border-blue-500 px-60 py-2.5 rounded-xl"
        placeholder="search your note"
        type="text"
      />
    </div>
  );
}

export default Header;
