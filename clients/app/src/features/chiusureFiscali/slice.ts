import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { remove } from "lodash";
import { ChiusuraFiscale } from "~/types";

interface State {
  listing: boolean;
  listError: boolean;
  getting: boolean;
  getError: boolean;
  posting: boolean;
  postError: boolean;
  putting: boolean;
  putError: boolean;
  removing: boolean;
  removeError: boolean;
  response?: string;
  list?: ChiusuraFiscale[];
  dettagli?: ChiusuraFiscale;
}

const initialState: State = {
  listing: false,
  listError: false,
  getting: false,
  getError: false,
  posting: false,
  postError: false,
  putting: false,
  putError: false,
  removing: false,
  removeError: false,
  response: undefined,
  list: undefined,
  dettagli: undefined,
};

export const chiusureFiscaliSlice = createSlice({
  name: "chiusure-fiscali",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    listStart: (state) => {
      state.listError = false;
      state.listing = true;
    },
    listSuccess: (state, action: PayloadAction<ChiusuraFiscale[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.listing = false;
      state.response = action.payload;
    },
    getStart: (state) => {
      state.getting = true;
      state.dettagli = undefined;
      state.getError = false;
    },
    getSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = true;
      state.getting = false;
      state.response = action.payload;
    },
    removeStart: (state) => {
      state.removing = true;
      state.response = undefined;
      state.removeError = false;
    },
    removeSuccess: (state, action: PayloadAction<string>) => {
      state.response = action.payload;
      state.removeError = false;
      state.removing = false;
    },
    removeFail: (state, action: PayloadAction<string>) => {
      state.removeError = true;
      state.removing = false;
      state.response = action.payload;
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      const chiusure = [...state.list!];

      remove(chiusure, (o) => o.id === action.payload);

      state.list = chiusure;
    },
    postStart: (state) => {
      state.posting = true;
      state.response = undefined;
      state.postError = false;
    },
    postSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.list = [...state.list!, action.payload];
      state.response = "chiusura fiscale aggiunta";
      state.postError = false;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.posting = false;
      state.response = action.payload;
    },
  },
});

export const {
  unsetResponse,
  listFail,
  listStart,
  listSuccess,
  getFail,
  getStart,
  getSuccess,
  removeFail,
  removeStart,
  removeSuccess,
  removeFromList,
  postFail,
  postStart,
  postSuccess
} = chiusureFiscaliSlice.actions;

export default chiusureFiscaliSlice.reducer;
