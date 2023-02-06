import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FatturaScadenza } from "~/types";

interface ScadenzaState {
  listing: boolean;
  listError?: string;
  list?: FatturaScadenza[];
}

const initialState: ScadenzaState = {
  listing: true,
  listError: undefined,
  list: undefined,
};

export const scadenzaSlice = createSlice({
  name: "scadenzario",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<FatturaScadenza[]>) => {
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

export const { listSuccess, listFail } = scadenzaSlice.actions;

export default scadenzaSlice.reducer;
