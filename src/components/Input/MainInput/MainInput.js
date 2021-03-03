import "./MainInput.css";

function MainInput() {
  return (
    <div>
      <form className="main-form" action="">
        <input placeholder="Title" type="text" />
        <input placeholder="take a note" type="text" />
        <input type="submit" />
      </form>

      <button>silk me</button>
    </div>
  );
}

export default MainInput;
