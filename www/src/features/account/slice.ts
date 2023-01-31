import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "~/types";

interface AccountState {
  getting: boolean;
  getError?: string;
  dettagli?: Account;
}

const initialState: AccountState = {
  getting: false,
  getError: undefined,
  dettagli: undefined,
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
  },
});

export const { getStart, getFail, getSuccess } = accountSlice.actions;

export default accountSlice.reducer;
