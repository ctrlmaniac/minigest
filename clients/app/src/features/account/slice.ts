import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "~/types";

interface State {
  getting: boolean;
  getError?: string;
  dettagli?: Account;
}

const initialState: State = {
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
      state.dettagli = undefined;
      state.getError = action.payload;
      state.getting = false;
    },
  },
});

export const { getStart, getSuccess, getFail } = accountSlice.actions;

export default accountSlice.reducer;
