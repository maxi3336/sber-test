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

type KeepId = {
  id: string;
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
    deleteKeep: (state, action: PayloadAction<KeepId>) => {
      state.keeps = state.keeps.filter((keep) => keep.id !== action.payload.id);
    },
  },
});

const { actions, reducer } = keeps;

export const { setKeeps, addKeep, deleteKeep } = actions;

export default reducer;
