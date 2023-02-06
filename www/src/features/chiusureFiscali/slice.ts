import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findIndex } from "lodash";
import { ChiusuraFiscale } from "~/types";

interface ChiusuraFiscaleState {
  getting: boolean;
  getError?: string;
  posting: boolean;
  postError?: string;
  listing: boolean;
  listError?: string;
  putting: boolean;
  putError?: string;
  dettagli?: ChiusuraFiscale;
  removing: boolean;
  removeError?: string;
  list?: ChiusuraFiscale[];
}

const initialState: ChiusuraFiscaleState = {
  getting: true,
  getError: undefined,
  posting: false,
  postError: undefined,
  listing: true,
  listError: undefined,
  putting: false,
  putError: undefined,
  dettagli: undefined,
  removing: false,
  removeError: undefined,
  list: undefined,
};

export const chiusureFiscaliSlice = createSlice({
  name: "chiusure-fiscali",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.getting = false;
    },
    postSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.dettagli = action.payload;
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
    listSuccess: (state, action: PayloadAction<ChiusuraFiscale[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    putSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.putError = undefined;
      state.putting = false;
      state.dettagli = action.payload;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = action.payload;
      state.putting = false;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      const list = [...state.list!];

      const index = findIndex(list, (o) => o.id === action.payload);

      list.splice(index, 1);

      state.list = list;
      state.removeError = undefined;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = action.payload;
      state.removing = false;
    },
  },
});

export const {
  getSuccess,
  getFail,
  postSuccess,
  postFail,
  listSuccess,
  listFail,
  putSuccess,
  putFail,
  removeSuccess,
  removeFail,
} = chiusureFiscaliSlice.actions;

export default chiusureFiscaliSlice.reducer;
