import { useEffect, useState } from "react";
import { useTaskDispatch } from "../../redux/hooks";
import { change } from "../../redux/tasksSlice";

interface TaskActiveInputProps {
  task: string;
  id: number;
  setActiveInput: React.Dispatch<React.SetStateAction<boolean>>;
}

const TaskActiveInput = ({
  task,
  id,
  setActiveInput,
}: TaskActiveInputProps) => {
  const [inputValue, setInputValue] = useState(task);
  const dispatch = useTaskDispatch();

  useEffect(() => {
    document.getElementById("task-input-active" + id.toString())!.value = task;
    document.getElementById("task-input-active" + id.toString())!.focus();
  }, [task, id]);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (inputValue !== "") {
        dispatch(change(id.toString() + "#" + inputValue));
        setActiveInput(false);
      }
    }
  }

  function onBlur() {
    dispatch(change(id.toString() + "#" + inputValue));
    setActiveInput(false);
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <input
      type="text"
      id={"task-input-active" + id.toString()}
      className="task"
      name="task-name"
      autoComplete="off"
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onChange={onChange}
      maxLength={24}
    ></input>
  );
};

export { TaskActiveInput };
