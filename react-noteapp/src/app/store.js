import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import noteContent from "../features/note/noteContent";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    note: noteContent,
  },
});
