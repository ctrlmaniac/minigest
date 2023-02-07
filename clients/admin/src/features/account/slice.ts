import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "~/types";

interface State {
  listing: boolean;
  listError?: string;
  getting: boolean;
  getError?: string;
  putting: boolean;
  putError?: string;
  list?: Account[];
  dettagli?: Account;
}

const initialState: State = {
  listing: false,
  listError: undefined,
  getting: true,
  getError: undefined,
  list: undefined,
  putting: false,
  putError: undefined,
  dettagli: undefined,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    listSuccess: (state, action: PayloadAction<Account[]>) => {
      state.list = action.payload;
      state.listError = undefined;
    },
    listFail: (state, action: PayloadAction<string>) => {
      state.list = undefined;
      state.listError = action.payload;
      state.listing = false;
    },
    getSuccess: (state, action: PayloadAction<Account>) => {
      state.dettagli = action.payload;
      state.getError = undefined;
      state.getting = false;
    },
    getFail: (state, action: PayloadAction<string>) => {
      state.getError = action.payload;
      state.dettagli = undefined;
      state.getting = false;
    },
    putSuccess: (state, action: PayloadAction<Account>) => {
      state.putError = undefined;
      state.putting = false;
      state.dettagli = action.payload;
    },
    putFail: (state, action: PayloadAction<string>) => {
      state.putError = action.payload;
      state.putting = false;
    },
  },
});

export const {
  listSuccess,
  listFail,
  getSuccess,
  getFail,
  putSuccess,
  putFail,
} = accountSlice.actions;

export default accountSlice.reducer;
