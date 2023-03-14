import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account, Azienda } from "~/types";

interface State {
  response?: string;
  dettagli?: Account;
  list?: Account[];
  principal?: Account;
  gettingPrincipal: boolean;
  getPrincipalError: boolean;
  getting: boolean;
  getError: boolean;
  putting: boolean;
  putError: boolean;
  listing: boolean;
  listError: boolean;
  posting: boolean;
  postError: boolean;
}

const initialState: State = {
  response: undefined,
  dettagli: undefined,
  list: undefined,
  gettingPrincipal: false,
  getPrincipalError: false,
  getting: false,
  getError: false,
  putting: false,
  putError: false,
  listing: false,
  listError: false,
  posting: false,
  postError: false,
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
    listStart: (state) => {
      state.listing = true;
      state.listError = false;
      state.response = undefined;
    },
    listSuccess: (state, action: PayloadAction<Account[]>) => {
      state.list = action.payload;
      state.listError = false;
      state.listing = false;
      state.response = "Account modificato con successo";
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.listError = true;
      state.response = action.payload;
      state.listing = false;
    },
    postStart: (state) => {
      state.posting = true;
      state.postError = false;
      state.response = undefined;
    },
    postSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.postError = false;
      state.posting = false;
      state.response = "Account aggiunto con successo";
    },
    postFail: (state, action: PayloadAction<string>) => {
      state.postError = true;
      state.response = action.payload;
      state.posting = false;
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
  listFail,
  listStart,
  listSuccess,
  postFail,
  postStart,
  postSuccess,
} = accountSlice.actions;

export default accountSlice.reducer;
