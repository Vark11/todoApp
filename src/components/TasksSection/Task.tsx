import { del, TaskT } from "../../redux/tasksSlice";
import { complete } from "../../redux/tasksSlice";
import { useTaskDispatch } from "../../redux/hooks";
import { useState } from "react";
import { TaskActiveInput } from "./TaskActiveInput";

const Task = ({ task, id, completed }: TaskT) => {
  const dispatch = useTaskDispatch();
  const [taskHovered, setTaskHovered] = useState(false);
  const [activeInput, setActiveInput] = useState(false);

  function CheckBoxOnChange() {
    dispatch(complete(id));
  }

  function onMouseEnter() {
    setTaskHovered(true);
  }

  function onMouseLeave() {
    setTaskHovered(false);
  }

  function handleDeleteTask() {
    dispatch(del(id));
  }

  function handleTaskChange() {
    if (!completed) {
      setActiveInput(true);
    }
  }

  return (
    <li
      id={id.toString()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="checkbox-wrapper-18">
        <div className="round">
          <input
            type="checkbox"
            id={"checkbox-input" + id.toString()}
            name={id.toString()}
            onChange={CheckBoxOnChange}
            checked={completed}
          />
          <label htmlFor={"checkbox-input" + id.toString()}></label>
        </div>
      </div>

      {activeInput ? (
        <TaskActiveInput id={id} task={task} setActiveInput={setActiveInput} />
      ) : (
        <input
          type="text"
          className={completed ? "task-completed" : "task"}
          value={task}
          id={"task-input" + id.toString()}
          readOnly={true}
          autoComplete="off"
          onClick={handleTaskChange}
        ></input>
      )}

      {taskHovered && !activeInput ? (
        <div className="cross" onClick={handleDeleteTask}></div>
      ) : null}
    </li>
  );
};

export { Task };
