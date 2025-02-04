import { useEffect, useState } from "react";
import { useTaskDispatch, useTasksSelector } from "../../redux/hooks";
import {
  del,
  selectStatus,
  selectTasks,
  statusChange,
} from "../../redux/tasksSlice";

const SettingsSection = () => {
  return (
    <div className="settings-section">
      <ItemsCount />
      <Buttons />
      <ClearCompletedButton />
    </div>
  );
};

const ItemsCount = () => {
  const tasks = useTasksSelector(selectTasks);
  const [itemsLeft, setItemsLeft] = useState("");

  useEffect(() => {
    let itemsLeft = 0;

    for (const task of tasks) {
      if (!task.completed) {
        itemsLeft++;
      }
    }

    if (itemsLeft === 0) {
      setItemsLeft("No items left");
    } else if (itemsLeft === 1) {
      setItemsLeft(itemsLeft + " item left");
    } else {
      setItemsLeft(itemsLeft + " items left");
    }
  }, [tasks]);

  return <div className="items-left">{itemsLeft}</div>;
};

const styles = { border: "2px solid #B83F45", borderRadius: "5px" };

const Buttons = () => {
  const dispatch = useTaskDispatch();
  const status = useTasksSelector(selectStatus);

  function handleClick(buttonName: "all" | "active" | "completed") {
    dispatch(statusChange(buttonName));
  }

  return (
    <div className="settings-buttons">
      <button
        className="settings-button"
        style={status === "all" ? styles : undefined}
        onClick={() => handleClick("all")}
      >
        All
      </button>
      <button
        className="settings-button"
        style={status === "active" ? styles : undefined}
        onClick={() => handleClick("active")}
      >
        Active
      </button>
      <button
        className="settings-button"
        style={status === "completed" ? styles : undefined}
        onClick={() => handleClick("completed")}
      >
        Completed
      </button>
    </div>
  );
};

const ClearCompletedButton = () => {
  const tasks = useTasksSelector(selectTasks);
  const dispatch = useTaskDispatch();
  const [isBinShown, setIsBinShown] = useState(false);

  useEffect(() => {
    for (const task of tasks) {
      if (task.completed) {
        setIsBinShown(true);
        return;
      }
    }

    setIsBinShown(false);
  }, [tasks]);

  function handleClick() {
    for (const task of tasks) {
      if (task.completed) {
        dispatch(del(task.id));
      }
    }

    if (tasks.length === 0) {
      dispatch(statusChange("all"));
    }
  }

  return (
    <>
      {isBinShown ? (
        <div className="clear-completed" onClick={handleClick}>
          <img src="../public/icons8-bin-32.png"></img>
        </div>
      ) : null}
    </>
  );
};

export { SettingsSection };
