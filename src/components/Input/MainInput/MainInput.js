import "./MainInput.css";
import { useForm } from "react-hook-form";

function MainInput({ addTask }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    addTask(data);
  };

  return (
    <div>
      <form className="main-form" action="">
        <input
          ref={register({ required: true })}
          placeholder="Title"
          type="text"
          name="title"
        />
        <input
          ref={register({ required: true })}
          placeholder="take a note"
          type="text"
          name="note"
        />
        <input onClick={handleSubmit(onSubmit)} type="submit" />
      </form>
    </div>
  );
}

export default MainInput;
