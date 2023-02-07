import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Account } from "~/types";

interface AccountState {
  getting: boolean;
  getError?: string;
  dettagli?: Account;
  reqPwResetMessage?: string;
  reqUpdateMessage?: string;
}

const initialState: AccountState = {
  getting: false,
  getError: undefined,
  dettagli: undefined,
  reqPwResetMessage: undefined,
  reqUpdateMessage: undefined,
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
    setReqPwMessage: (state, action: PayloadAction<string>) => {
      state.reqPwResetMessage = action.payload;
    },
    setReqUpdateMessage: (state, action: PayloadAction<string>) => {
      state.reqUpdateMessage = action.payload;
    },
  },
});

export const { getStart, getFail, getSuccess, setReqPwMessage } =
  accountSlice.actions;

export default accountSlice.reducer;
