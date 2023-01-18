import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiusuraFiscale } from "~/models";

interface ChiusuraFiscaleState {
  getting: boolean;
  getError: boolean;
  posting: boolean;
  postError: boolean;
  postSuccess: string | null;
  listing: boolean;
  listError: boolean;
  putting: boolean;
  putError: boolean;
  dettagli?: ChiusuraFiscale;
  list?: ChiusuraFiscale[];
}

const initialState: ChiusuraFiscaleState = {
  getting: true,
  getError: false,
  posting: false,
  postError: false,
  postSuccess: null,
  listing: true,
  listError: false,
  putting: false,
  putError: false,
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
      state.postSuccess = action.payload.id!;
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
    putSuccess: (state, action: PayloadAction<ChiusuraFiscale>) => {
      state.putError = false;
      state.putting = false;
      state.dettagli = action.payload;
    },
    putFail: (state) => {
      state.putError = true;
      state.putting = false;
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
} = chiusureFiscaliSlice.actions;

export default chiusureFiscaliSlice.reducer;
