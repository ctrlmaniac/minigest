import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiusuraFiscale } from "~/models";

interface ChiusuraFiscaleState {
  getting: boolean;
  getError: boolean;
  posting: boolean;
  postError: boolean;
  listing: boolean;
  listError: boolean;
  dettagli?: ChiusuraFiscale;
  list?: ChiusuraFiscale[];
}

const initialState: ChiusuraFiscaleState = {
  getting: true,
  getError: false,
  posting: false,
  postError: false,
  listing: true,
  listError: false,
  dettagli: undefined,
  list: undefined,
};

export const chiusureFiscaliSlice = createSlice({
  name: "chiusure-fiscali",
  initialState,
  reducers: {
    getSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state) => {
      state.getError = true;
      state.getting = false;
    },
    postSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.postError = false;
      state.posting = false;
      state.dettagli = action.payload;
    },
    postFail: (state) => {
      state.postError = true;
      state.posting = false;
    },
    listSuccess: (state, action: PayloadAction<ChiusuraFiscale[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
    },
    listFail: (state) => {
      state.list = undefined;
      state.listError = true;
      state.listing = false;
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
} = chiusureFiscaliSlice.actions;

export default chiusureFiscaliSlice.reducer;
