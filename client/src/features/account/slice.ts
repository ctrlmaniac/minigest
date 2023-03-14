import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "~/types";

interface State {
  response?: string;
  dettagli?: Account;
  getting: boolean;
  getError: boolean;
}

const initialState: State = {
  response: undefined,
  dettagli: undefined,
  getting: false,
  getError: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    getStart: (state) => {
      state.getting = true;
      state.getError = false;
      state.response = undefined;
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
  },
});

export const { getStart, getSuccess, getFail } = accountSlice.actions;

export default accountSlice.reducer;
