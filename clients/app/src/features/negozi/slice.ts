import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Negozio } from "~/types";

interface State {
  selected?: Negozio;
  posting: boolean;
  postError?: string;
  putting: boolean;
  putError: boolean;
  putResponse?: string;
  removing: boolean;
  removeError: boolean;
  removeResponse?: string;
}

const initialState: State = {
  selected: undefined,
  posting: false,
  postError: undefined,
  putting: false,
  putError: false,
  putResponse: undefined,
  removing: false,
  removeError: false,
  removeResponse: undefined,
};

export const negoziSlice = createSlice({
  name: "negozi",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Negozio | undefined>) => {
      state.selected = action.payload;
    },
    postStart: (state) => {
      state.postError = undefined;
      state.posting = true;
    },
    postSuccess: (state, action: PayloadAction<Negozio>) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
    putStart: (state) => {
      state.putError = false;
      state.putting = true;
      state.putResponse = undefined;
    },
    putSuccess: (state, action: PayloadAction<Negozio>) => {
      state.putError = false;
      state.putting = false;
      state.putResponse = "Negozio aggiornato con successo";
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putResponse = action.payload;
      state.putError = true;
      state.putting = false;
    },
    removeStart: (state) => {
      state.removeError = false;
      state.removing = true;
      state.removeResponse = undefined;
    },
    removeSuccess: (state, action: PayloadAction<Negozio>) => {
      state.removeError = false;
      state.removing = false;
      state.removeResponse = "Negozio aggiornato con successo";
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeResponse = action.payload;
      state.removeError = true;
      state.removing = false;
    },
    unsetResponses: (state) => {
      state.putResponse = undefined;
      state.removeResponse = undefined;
    },
  },
});

export const {
  setSelected,
  postStart,
  postSuccess,
  postFail,
  putFail,
  putSuccess,
  putStart,
  unsetResponses,
  removeFail,
  removeStart,
  removeSuccess,
} = negoziSlice.actions;

export default negoziSlice.reducer;
