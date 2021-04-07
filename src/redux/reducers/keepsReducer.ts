import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  content: string;
  isChecked: boolean;
};

type Keep = {
  id: string;
  title: string;
  todos: Todo[];
};

const initialState: { keeps: Keep[] } = {
  keeps: [],
};

const keeps = createSlice({
  name: "app",
  initialState,
  reducers: {
    setKeeps: (state, action: PayloadAction<Keep[]>) => {
      state.keeps = action.payload;
    },
    addKeep: (state, action: PayloadAction<Keep>) => {
      state.keeps.push(action.payload);
    },
  },
});

const { actions, reducer } = keeps;

export const { addKeep } = actions;

export default reducer;
