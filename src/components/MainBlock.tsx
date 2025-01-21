import { InputSection } from "./InputSection";
import { TasksSection } from "./TasksSection";


const MainBlock = () => {

  return (
    <div className="main-block">
      <InputSection />
      <TasksSection />
    </div>
  );
}

export { MainBlock };