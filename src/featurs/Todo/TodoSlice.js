import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
  { id: 4, title: "todo4", completed: false },
  { id: 5, title: "todo5", completed: true },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //creat an obj
      const newTodo = {
        id: DataTransfer.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});
// Action creators are generated for each case reducer function
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
