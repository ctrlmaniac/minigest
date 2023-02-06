import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "~/types";

interface AccountState {
  getting: boolean;
  getError?: string;
  dettagli?: Account;
  registering: boolean;
  registerError?: string;
}

const initialState: AccountState = {
  getting: false,
  getError: undefined,
  dettagli: undefined,
  registering: false,
  registerError: undefined,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
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
    registerStart: (state) => {
      state.registering = true;
      state.registerError = undefined;
    },
    registerSuccess: (state) => {
      state.registerError = undefined;
      state.registering = false;
    },
    registerFail: (state, action: PayloadAction<string>) => {
      state.registerError = action.payload;
      state.registering = false;
    },
  },
});

export const {
  getStart,
  getFail,
  getSuccess,
  registerStart,
  registerSuccess,
  registerFail,
} = accountSlice.actions;

export default accountSlice.reducer;
