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

type State = {
  keeps: Keep[];
  isEdit: boolean;
  editedKeep: Keep | undefined;
};

type KeepId = {
  id: string;
};

const initialState: State = {
  keeps: [],
  isEdit: false,
  editedKeep: undefined,
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
      if (state.isEdit && action.payload.id === state.editedKeep?.id) {
        state.isEdit = false;
        state.editedKeep = undefined;
      }
    },
    setEdited: (state, action: PayloadAction<Keep>) => {
      state.isEdit = true;
      state.editedKeep = action.payload;
    },
    editKeep: (state, action: PayloadAction<Keep>) => {
      state.keeps = state.keeps.map((keep) => {
        if (keep.id === action.payload.id)
          return {
            id: keep.id,
            title: action.payload.title,
            todos: action.payload.todos,
          };
        return keep;
      });
    },
    removeEdited: (state) => {
      state.isEdit = false;
      state.editedKeep = undefined;
    },
  },
});

const { actions, reducer } = keeps;

export const {
  setKeeps,
  addKeep,
  deleteKeep,
  setEdited,
  editKeep,
  removeEdited,
} = actions;

export default reducer;
