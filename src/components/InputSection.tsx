import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../redux/tasksSlice";

const INPUT_PLACEHOLDER = "What needs to be done?";

const InputSection = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      dispatch( add(inputValue) );
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <input type="text" name="task-name" placeholder={INPUT_PLACEHOLDER} onKeyDown={onKeyDown} onChange={onChange}></input>
  );
};

export { InputSection };
