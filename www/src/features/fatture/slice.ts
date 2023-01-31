import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fattura } from "~/types";

interface FatturaState {
  listing: boolean;
  listError?: string;
  list?: Fattura[];
  posting: boolean;
  postError?: string;
  getting: boolean;
  getError?: string;
  dettagli?: Fattura;
}

const initialState: FatturaState = {
  listing: true,
  listError: undefined,
  list: undefined,
  posting: true,
  postError: undefined,
  getting: true,
  getError: undefined,
  dettagli: undefined,
};

export const fattureSlice = createSlice({
  name: "fatture",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<Fattura[]>) => {
      state.list = action.payload;
      state.listError = undefined;
      state.listing = false;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    postSuccess: (state) => {
      state.postError = undefined;
      state.posting = false;
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = action.payload;
      state.posting = false;
    },
    getSuccess: (state, action: PayloadAction<Fattura>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.dettagli = undefined;
      state.getError = action.payload;
      state.getting = false;
    },
  },
});

export const {
  listSuccess,
  listFail,
  postSuccess,
  postFail,
  getSuccess,
  getFail,
} = fattureSlice.actions;

export default fattureSlice.reducer;
