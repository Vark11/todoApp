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
  status: "idle" | "loading" | "failed"
}

// Define the initial value for the slice state
const initialState: TasksState = {
  tasks: [],
  status: "idle",
}

// Slices contain Redux reducer logic for updating state, and
// generate actions that can be dispatched to trigger those updates.
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: state.tasks.length,
        task: action.payload,
        completed: false,
      });
    },

    del: (state, action: PayloadAction<number>) => {
      state.tasks.splice(action.payload, 1);
    }
  },
})

// Export the generated action creators for use in components
export const { add, del } = tasksSlice.actions

// Export the slice reducer for use in the store configuration
export default tasksSlice.reducer

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectTasks = (state: RootState) => state.tasks.tasks
export const selectStatus = (state: RootState) => state.tasks.status
