import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Azienda } from "~/types";

interface State {
  response?: string;
  dettagli?: Account;
  principal?: Account;
  gettingPrincipal: boolean;
  getPrincipalError: boolean;
  getting: boolean;
  getError: boolean;
  putting: boolean;
  putError: boolean;
}

const initialState: State = {
  response: undefined,
  dettagli: undefined,
  gettingPrincipal: false,
  getPrincipalError: false,
  getting: false,
  getError: false,
  putting: false,
  putError: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    unsetResponse: (state) => {
      state.response = undefined;
    },
    addAzienda: (state, action: PayloadAction<Azienda>) => {
      state.principal!.azienda = action.payload;
    },
    getPrincipalStart: (state) => {
      state.gettingPrincipal = true;
      state.getPrincipalError = false;
      state.response = undefined;
      state.principal = undefined;
    },
    getPrincipalSuccess: (state, action: PayloadAction<Account>) => {
      state.principal = action.payload;
      state.getPrincipalError = false;
      state.gettingPrincipal = false;
      state.response = undefined;
    },
    getPrincipalFail: (state, action: PayloadAction<string>) => {
      state.principal = undefined;
      state.response = action.payload;
      state.getPrincipalError = true;
      state.gettingPrincipal = false;
    },
    getStart: (state) => {
      state.getting = true;
      state.getError = false;
      state.response = undefined;
      state.dettagli = undefined;
    },
    getSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.getError = false;
      state.getting = false;
      state.response = undefined;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.dettagli = undefined;
      state.response = action.payload;
      state.getError = true;
      state.getting = false;
    },
    putStart: (state) => {
      state.putting = true;
      state.putError = false;
      state.response = undefined;
    },
    putSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.putError = false;
      state.putting = false;
      state.response = "Account modificato con successo";
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = true;
      state.response = action.payload;
      state.putting = false;
    },
  },
});

export const {
  unsetResponse,
  addAzienda,
  getPrincipalStart,
  getPrincipalSuccess,
  getPrincipalFail,
  getSuccess,
  getFail,
  getStart,
  putFail,
  putStart,
  putSuccess,
} = accountSlice.actions;

export default accountSlice.reducer;
