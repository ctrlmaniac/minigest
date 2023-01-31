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
  dettagli?: Azienda;
  selected?: Azienda;
  list?: Azienda[];
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
  dettagli: undefined,
  selected: undefined,
  list: undefined,
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
} = aziendeSlice.actions;

export default aziendeSlice.reducer;
