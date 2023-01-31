import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Azienda } from "~/types";

interface AziendeState {
  getting: boolean;
  getError?: string;
  dettagli?: Azienda;
  selected?: Azienda;
}

const initialState: AziendeState = {
  getting: false,
  getError: undefined,
  dettagli: undefined,
  selected: undefined,
};

export const aziendeSlice = createSlice({
  name: "account",
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
  },
});

export const {
  getStart,
  getFail,
  getSuccess,
  getSelectedSuccess,
  getSelectedFail,
} = aziendeSlice.actions;

export default aziendeSlice.reducer;
