import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegCorrispettivi } from "~/types";

interface State {
  getting: boolean;
  getError: boolean;
  response?: string;
  registro?: RegCorrispettivi;
}

const initialState: State = {
  getting: false,
  getError: false,
  registro: undefined,
  response: undefined,
};

export const registroCorrispettiviSlice = createSlice({
  name: "registro-corrispettivi",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    getStart: (state) => {
      state.getError = false;
      state.getting = true;
    },
    getSuccess: (state, action: PayloadAction<RegCorrispettivi>) => {
      state.registro = action.payload;
      state.getError = false;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = true;
      state.getting = false;
      state.response = action.payload;
    },
  },
});

export const { unsetResponse, getFail, getStart, getSuccess } =
  registroCorrispettiviSlice.actions;

export default registroCorrispettiviSlice.reducer;
