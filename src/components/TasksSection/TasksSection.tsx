import { useSelector } from "react-redux";
import { selectStatus, selectTasks } from "../../redux/tasksSlice";
import { Task } from "./Task";

const TasksSection = () => {
  const tasks = useSelector(selectTasks);
  const status = useSelector(selectStatus);

  return (
    <div className="tasks-section">
      <ul>
        {tasks.map((elem) => {
          if (status === "all") {
            return (
              <Task
                task={elem.task}
                id={elem.id}
                key={elem.id}
                completed={elem.completed}
              />
            );
          } else if (status == "active") {
            if (!elem.completed) {
              return (
                <Task
                  task={elem.task}
                  id={elem.id}
                  key={elem.id}
                  completed={elem.completed}
                />
              );
            }
          } else {
            if (elem.completed) {
              return (
                <Task
                  task={elem.task}
                  id={elem.id}
                  key={elem.id}
                  completed={elem.completed}
                />
              );
            }
          }
        })}
      </ul>
    </div>
  );
};

export { TasksSection };
