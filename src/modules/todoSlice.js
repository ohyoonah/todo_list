import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    onInsert: (state, { payload: text }) => {
      state.push({
        id: Date.now(),
        text,
        checked: false,
        important: false,
      });
    },
    onRemove: (state, { payload: id }) => {
      return state.filter((todo) => todo.id !== id);
    },
    onChecked: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      );
    },
    onImportant: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      );
    },
    onUpdate: (state, actions) => {
      const { id, text } = actions.payload;
      return state.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    },
  },
});

export const { onInsert, onRemove, onChecked, onImportant, onUpdate } =
  todoSlice.actions;
export default todoSlice.reducer;
