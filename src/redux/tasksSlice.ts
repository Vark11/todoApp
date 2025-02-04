import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store"

export interface TaskT {
  task: string;
  completed: boolean;
  id: number;
}

export interface TasksState {
  tasks: TaskT[];
  status: "all" | "active" | "completed"
}

// Define the initial value for the slice state
const initialState: TasksState = {
  tasks: [],
  status: "all",
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  
  reducers: {
    
    // добавить task
    add: (state, action: PayloadAction<string>) => {
      if (state.tasks.length !== 0) {
        state.tasks.push({
          id: state.tasks[state.tasks.length - 1].id + 1,
          task: action.payload,
          completed: false,
        });
      } else {
        state.tasks.push({
          id: 0,
          task: action.payload,
          completed: false,
        });
      }
    },

    // удалить таск
    del: (state, action: PayloadAction<number>) => {
      for (const obj of state.tasks) {
        if (obj.id === action.payload) {
          const index = state.tasks.indexOf(obj);

          state.tasks.splice(index, 1);
          break;
        }
      }
    },

    // сделать задание "выполненным"
    complete: (state, action: PayloadAction<number>) => {
      for (const obj of state.tasks) {
        if (obj.id === action.payload) {
          obj.completed = !obj.completed;
          break;
        }
      }
    },

    // изменить название таск'а
    change: (state, action: PayloadAction<string>) => {
      for (const obj of state.tasks) {
        if (obj.id === Number(action.payload.split("#")[0])) {
          obj.task = action.payload.split("#")[1];
          break;
        }
      }
    },

    statusChange: (state, action: PayloadAction<"all" | "active" | "completed">) => {
      state.status = action.payload;
    }
  },
})

// Export the generated action creators for use in components
export const { add, del, complete, change, statusChange } = tasksSlice.actions

// Export the slice reducer for use in the store configuration
export default tasksSlice.reducer

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectTasks = (state: RootState) => state.tasks.tasks
export const selectStatus = (state: RootState) => state.tasks.status
