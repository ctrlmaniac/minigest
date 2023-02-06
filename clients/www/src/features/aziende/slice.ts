import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/types";

interface AziendeState {
  getting: boolean;
  getError?: string;
  putting: boolean;
  putError?: string;
  posting: boolean;
  postError?: string;
  listing: boolean;
  listError?: string;
  removing: boolean;
  removeError?: string;
  dettagli?: Azienda;
  selected?: Azienda;
  list?: Azienda[];
  esiste: boolean;
}

const initialState: AziendeState = {
  getting: false,
  getError: undefined,
  putting: false,
  putError: undefined,
  posting: false,
  postError: undefined,
  listing: true,
  listError: undefined,
  removing: false,
  removeError: undefined,
  dettagli: undefined,
  selected: undefined,
  list: undefined,
  esiste: false,
};

export const aziendeSlice = createSlice({
  name: "aziende",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
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
    getSelectedSuccess: (state, action: PayloadAction<Azienda>) => {
      state.selected = action.payload;
    },
    getSelectedFail: (state, action: PayloadAction<string>) => {
      state.selected = undefined;
    },
    putSuccess: (state) => {
      state.getError = undefined;
      state.getting = false;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.getting = false;
    },
    postSuccess: (state) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
    listSuccess: (state, action: PayloadAction<Azienda[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    removeSuccess: (state) => {
      state.removeError = undefined;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = action.payload;
      state.removing = false;
    },
    getExists: (state, action: PayloadAction<boolean>) => {
      state.esiste = action.payload;
    },
  },
});

export const {
  getStart,
  getFail,
  getSuccess,
  getSelectedSuccess,
  getSelectedFail,
  putSuccess,
  putFail,
  postSuccess,
  postFail,
  listSuccess,
  listFail,
  removeSuccess,
  removeFail,
  getExists,
} = aziendeSlice.actions;

export default aziendeSlice.reducer;