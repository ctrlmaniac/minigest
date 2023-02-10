import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Negozio } from "~/types";

interface State {
  selected?: Negozio;
  response?: string;
  dettagli?: Negozio;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
}

const initialState: State = {
  selected: undefined,
  response: undefined,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
};

export const negoziSlice = createSlice({
  name: "negozi",
  initialState,
  reducers: {
    setSelected: (state, action: PayloadAction<Negozio | undefined>) => {
      state.selected = action.payload;
    },
    unsetResponse: (state) => {
      state.response = undefined;
    },
    postStart: (state) => {
      state.postError = false;
      state.posting = true;
    },
    postSuccess: (state, action: PayloadAction<Negozio>) => {
      state.postError = false;
      state.response = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.posting = false;
      state.response = action.payload;
    },
    putStart: (state) => {
      state.putError = false;
      state.putting = true;
      state.response = undefined;
    },
    putSuccess: (state, action: PayloadAction<Negozio>) => {
      state.putError = false;
      state.putting = false;
      state.response = "Negozio aggiornato con successo";
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.putError = true;
      state.putting = false;
    },
    removeStart: (state) => {
      state.removeError = false;
      state.removing = true;
      state.response = undefined;
    },
    removeSuccess: (state, action: PayloadAction<Negozio>) => {
      state.removeError = false;
      state.removing = false;
      state.response = "Negozio aggiornato con successo";
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.removeError = true;
      state.removing = false;
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
  removeFail,
  removeStart,
  removeSuccess,
  unsetResponse,
} = negoziSlice.actions;

export default negoziSlice.reducer;
