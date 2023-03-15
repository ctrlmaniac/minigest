import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filter, findIndex } from "lodash";
import { Negozio } from "~/types";

interface State {
  response?: string;
  selected?: Negozio;
  dettagli?: Negozio;
  list?: Negozio[];
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
}

const initialState: State = {
  response: undefined,
  selected: undefined,
  listing: false,
  listError: false,
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
    unsetResponse: (state) => {
      state.response = undefined;
    },
    setSelected: (state, action: PayloadAction<Negozio>) => {
      state.selected = action.payload;
    },
    listStart: (state) => {
      state.listing = true;
      state.listError = false;
      state.response = undefined;
    },
    listSuccess: (state, action: PayloadAction<Negozio[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state) => {
      state.response = "Impossibile recuperare lista negozi";
      state.listError = true;
      state.listing = false;
    },
    postStart: (state) => {
      state.postError = false;
      state.posting = true;
    },
    postSuccess: (state, action: PayloadAction<Negozio>) => {
      state.postError = false;
      state.response = "Negozio aggiunto con successo";
      state.posting = false;
      state.list?.push(action.payload);
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
      const index = findIndex(
        state.list!,
        (o: Negozio) => o.id === action.payload.id
      );
      state.list![index] = action.payload;

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
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.list = filter(state.list!, (o: Negozio) => o.id !== action.payload);

      state.removeError = false;
      state.removing = false;
      state.response = "Negozio eliminato con successo";
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
  listFail,
  listStart,
  listSuccess,
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
