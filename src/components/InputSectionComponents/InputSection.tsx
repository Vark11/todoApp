import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, statusChange } from "../../redux/tasksSlice";

const INPUT_PLACEHOLDER = "What needs to be done?";

const InputSection = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (inputValue !== "") {
        dispatch(add(inputValue));
        dispatch(statusChange("all"));
        setInputValue("");

        document.getElementById("input-text")!.value = "";
      }
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <input
      type="text"
      id="input-text"
      maxLength={24}
      className="input-text"
      name="task-name"
      placeholder={INPUT_PLACEHOLDER}
      autoComplete="off"
      onKeyDown={onKeyDown}
      onChange={onChange}
    ></input>
  );
};

export { InputSection };
