import "./InputBar.css";

function InputBar({ onClick }) {
  return (
    <div>
      <form className="input-bar" action="">
        <input onClick={onClick} placeholder="take a note" type="text" />
      </form>
    </div>
  );
}

export default InputBar;
