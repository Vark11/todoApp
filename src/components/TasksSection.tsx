import { useSelector } from "react-redux";
import { selectTasks } from "../redux/tasksSlice";
import { Task } from "./Task";


const TasksSection = () => {
  const tasks = useSelector(selectTasks);

  return (
    <div className="tasks-section">
      <ul>
        {tasks.map(elem => {
          return <Task task={elem.task} id={elem.id} completed={elem.completed}/>
        })}
      </ul>
    </div>
  );
}

export { TasksSection };