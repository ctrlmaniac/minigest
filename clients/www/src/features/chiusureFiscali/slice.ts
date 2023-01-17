import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiusuraFiscale } from "~/models";

interface ChiusuraFiscaleState {
  getting: boolean;
  getError: boolean;
  dettagli?: ChiusuraFiscale;
}

const initialState: ChiusuraFiscaleState = {
  getting: true,
  getError: false,
  dettagli: undefined,
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
  },
});

export const { getSuccess, getFail } = chiusureFiscaliSlice.actions;

export default chiusureFiscaliSlice.reducer;
