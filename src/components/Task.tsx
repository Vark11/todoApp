import { TaskT } from "../redux/tasksSlice";

const Task = ({ task, id, completed}: TaskT) => {

  return (
    <li>
      <div className="task">{task}</div>
    </li>
  );
}

export { Task };