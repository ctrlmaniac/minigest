import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex, remove } from "lodash";
import { Azienda, Negozio } from "~/types";

interface State {
  exists: boolean;
  selected?: Azienda;
  listing: boolean;
  listError?: string;
  list?: Azienda[];
  getting: boolean;
  getError?: string;
  dettagli?: Azienda;
  removing: boolean;
  removeError: boolean;
  removeResponse?: string;
  posting: boolean;
  postError: boolean;
  postResponse?: string;
  putting: boolean;
  putError: boolean;
  putResponse?: string;
}

const initialState: State = {
  exists: false,
  selected: undefined,
  listing: false,
  listError: undefined,
  list: undefined,
  getting: false,
  getError: undefined,
  dettagli: undefined,
  removing: false,
  removeError: false,
  removeResponse: undefined,
  posting: false,
  postError: false,
  postResponse: undefined,
  putting: false,
  putError: false,
  putResponse: undefined,
};

export const aziendeSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    setExists: (state, action: PayloadAction<boolean>) => {
      state.exists = action.payload;
    },
    setSelected: (state, action: PayloadAction<Azienda>) => {
      state.selected = action.payload;
    },
    addNegozio: (state, action: PayloadAction<Negozio>) => {
      state.selected!.negozi = [...state.selected!.negozi!, action.payload];
    },
    listStart: (state) => {
      state.listing = true;
      state.listError = undefined;
      state.list = undefined;
    },
    listSuccess: (state, action: PayloadAction<Azienda[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = action.payload;
      state.listing = false;
    },
    getStart: (state) => {
      state.getting = true;
      state.getError = undefined;
      state.dettagli = undefined;
    },
    getSuccess: (state, action: PayloadAction<Azienda>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.dettagli = undefined;
      state.getting = false;
    },
    removeStart: (state) => {
      state.removing = true;
      state.removeError = false;
      state.removeResponse = undefined;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.removeResponse = action.payload;
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = true;
      state.removeResponse = action.payload;
      state.removing = false;
    },
    postStart: (state) => {
      state.posting = true;
      state.postError = false;
      state.postResponse = undefined;
    },
    postSuccess: (state, action: PayloadAction<string>) => {
      state.postResponse = action.payload;
      state.postError = false;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.postResponse = action.payload;
      state.posting = false;
    },
    putStart: (state) => {
      state.putting = true;
      state.putError = false;
      state.putResponse = undefined;
    },
    putSuccess: (state, action: PayloadAction<string>) => {
      state.putResponse = action.payload;
      state.putError = false;
      state.putting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.putResponse = action.payload;
      state.posting = false;
    },
    updateSelectedNegozio(state, action: PayloadAction<Negozio>) {
      const negozio = action.payload;
      const negozi = [...state.selected!.negozi!];
      const index = findIndex(negozi, (o) => o.id === negozio.id);

      if (index >= 0) {
        negozi[index] = negozio;

        state.selected!.negozi = negozi;
      }
    },
    deleteSelectedNegozio(state, action: PayloadAction<string>) {
      const negozi = [...state.selected!.negozi!];

      remove(negozi, (o) => o.id === action.payload);

      state.selected!.negozi = negozi;
    },
    unsetResponses: (state) => {
      state.removeResponse = undefined;
      state.postResponse = undefined;
      state.putResponse = undefined;
    },
  },
});

export const {
  setExists,
  setSelected,
  addNegozio,
  listStart,
  listSuccess,
  listFail,
  getFail,
  getStart,
  getSuccess,
  removeFail,
  removeStart,
  removeSuccess,
  unsetResponses,
  postFail,
  postStart,
  postSuccess,
  putFail,
  putStart,
  putSuccess,
  updateSelectedNegozio,
  deleteSelectedNegozio,
} = aziendeSlice.actions;

export default aziendeSlice.reducer;
