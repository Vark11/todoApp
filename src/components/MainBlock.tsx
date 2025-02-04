import { useTasksSelector } from "../redux/hooks";
import { selectTasks } from "../redux/tasksSlice";
import { InputSection } from "./InputSectionComponents/InputSection";
import { SettingsSection } from "./SettingsSectionComponents/SettingsSection";
import { TasksSection } from "./TasksSection/TasksSection";

const MainBlock = () => {
  const tasks = useTasksSelector(selectTasks);

  return (
    <div className="main-block">
      <InputSection />
      <TasksSection />
      {tasks.length ? <SettingsSection /> : null}
    </div>
  );
};

export { MainBlock };
