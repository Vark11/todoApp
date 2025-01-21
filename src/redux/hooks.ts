// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "./store"

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useTaksDispatch = useDispatch.withTypes<AppDispatch>()
export const useTasksSelector = useSelector.withTypes<RootState>()
