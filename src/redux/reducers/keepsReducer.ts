import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Keep } from "../../utils/types";

type State = {
  keeps: Keep[];
  isEdit: boolean;
  editedKeep: Keep | null;
};

const initialState: State = {
  keeps: [],
  isEdit: false,
  editedKeep: null,
};

const updateLocalStorage = (keeps: Keep[]) => {
  localStorage.setItem("keeps", JSON.stringify(keeps));
};

const keeps = createSlice({
  name: "app",
  initialState,
  reducers: {
    setKeeps: (state, action: PayloadAction<State>) => {
      state.keeps = action.payload.keeps;
      state.isEdit = action.payload.isEdit;
      state.editedKeep = action.payload.editedKeep;
    },
    addKeep: (state, action: PayloadAction<Keep>) => {
      const _keeps = [...state.keeps, action.payload];

      state.keeps = _keeps;
      updateLocalStorage(_keeps);
    },
    deleteKeep: (state, action: PayloadAction<{ id: string }>) => {
      const _keeps = state.keeps.filter(
        (keep) => keep.id !== action.payload.id
      );

      if (state.isEdit && action.payload.id === state.editedKeep?.id) {
        state.isEdit = false;
        state.editedKeep = null;
      }

      state.keeps = _keeps;
      updateLocalStorage(_keeps);
    },
    setEdited: (state, action: PayloadAction<Keep>) => {
      state.isEdit = true;
      state.editedKeep = action.payload;
    },
    editKeep: (state, action: PayloadAction<Keep>) => {
      const _keeps = state.keeps.map((keep) => {
        if (keep.id === action.payload.id)
          return {
            id: keep.id,
            title: action.payload.title,
            todos: action.payload.todos,
          };
        return keep;
      });

      state.keeps = _keeps;
      updateLocalStorage(_keeps);
    },
    removeEdited: (state) => {
      state.isEdit = false;
      state.editedKeep = null;
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
