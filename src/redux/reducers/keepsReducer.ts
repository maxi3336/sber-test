import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Keep = {
  name: string;
  todo: [];
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
    addKeep: (state, action: PayloadAction<Keep[]>) => {
      state.keeps.push(...action.payload);
    },
  },
});

const { actions, reducer } = keeps;

export const { addKeep } = actions;

export default reducer;
