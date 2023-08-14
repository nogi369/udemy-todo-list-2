import { useState } from "react";

export const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    // const inputVal = e.target.value

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
      // content: inputVal,
    };
    // console.log(enteredTodo);
    // console.log(inputVal);
    createTodo(newTodo);

    setEnteredTodo("");
  };

  return (
    <div>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </div>
  );
};
