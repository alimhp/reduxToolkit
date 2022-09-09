import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import TodoSlice from "./Todo/TodoSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, todos: TodoSlice },
});
